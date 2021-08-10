import { ErrorMessage, Formik, FormikHelpers, FormikProps, FormikValues } from 'formik';
import React from 'react';
import { withApollo } from 'react-apollo';
import { compose } from 'recompose';
import { Button, Form, Icon, Input, Message } from 'semantic-ui-react';
import withRouterHOC from '../../hoc/with-router';
import withToastHOC from '../../hoc/with-toast';
import { TClientRoute } from '../../types';
import Utils, { eResultCode, ScreenUtil, SCREEN_BREAKPOINT } from '../../utils';
import * as Yup from 'yup';
import { BaseComponent } from '../base';
import { GQLGeneral } from './gql';
import { ButtonLink } from './button-link';
import DateUtils from '../../utils/date';

/**
 * otp status
 */
enum OTPSTATUS {
  NotSend = 0,
  Send = 1,
  Verified = 2,
}

class MobileInputComponent extends BaseComponent<TClientRoute<TProps>, TState> {
  /**
   * declare default state value
   */
  state: Readonly<TState> = {
    currentOtpStatus: OTPSTATUS.NotSend,
    otp: '',
    dataToken: '',
    inValidOtp: true,
    responseMessage: '',
    showLoader: false,
  };
  /**
   * component did mount
   */
  componentDidMount() {
    const { isMobileVerified } = this.props;
    if (isMobileVerified) {
      this.setState({
        currentOtpStatus: OTPSTATUS.Verified,
      });
    }
  }
  /**
   * on submit form
   * @param values  : form value
   * @param props   : formik props with user form
   */
  private sendOtp = async () => {
    const { value } = this.props;
    if (value.length == 10) {
      try {
        await Utils.asyncState(this, { showLoader: true });
        const { client } = this.props;
        const requestVariables = {
          mobileno: value,
        };
        const { data: gqlData } = await client.mutate({
          mutation: GQLGeneral.sendOTP(),
          variables: requestVariables,
        });
        const {
          sendOTP: { resultCode, message, data },
        } = gqlData;
        if (resultCode == eResultCode.SUCCESS) {
          await Utils.asyncState(this, {
            currentOtpStatus: OTPSTATUS.Send,
            dataToken: data,
            responseMessage: undefined,
            showLoader: false,
          });

          this.initTimer(60);
        } else {
          this.setState({
            responseMessage: 'Invalid mobile number',
            showLoader: false,
          });
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  /**
   * init timer
   * @param seconds
   */
  private initTimer = (seconds: number) => {
    DateUtils.timer(seconds, ({ status, remainingTimeInString }: any = {}) => {
      const { currentOtpStatus } = this.state;
      if (currentOtpStatus == OTPSTATUS.Verified) return;

      /**
       * set running
       */
      if (status == 'running') {
        (this.state as TState).remainingTime = remainingTimeInString;
        this.forceUpdate();
        return;
      }

      /**
       * clear timer and reset otp status
       */
      this.setState({
        inValidOtp: true,
        remainingTime: undefined,
        currentOtpStatus: OTPSTATUS.NotSend,
      });
    });
  };

  /**
   * for verifying send  otp
   * @returns
   */
  async verifySendOtp(otp: string) {
    if (otp.length == 4) {
      const { client, setFieldValue, value } = this.props;
      const { dataToken } = this.state;
      const requestVariables = {
        mobileno: value,
        data: dataToken,
        otp: otp,
      };
      const { data: gqlData } = await client.mutate({
        mutation: GQLGeneral.verifyOTP(),
        variables: requestVariables,
      });
      const {
        verifyOTP: { resultCode, message },
      } = gqlData;
      if (resultCode == eResultCode.SUCCESS) {
        this.setState({ currentOtpStatus: OTPSTATUS.Verified, inValidOtp: true });
        setFieldValue?.('ismobileverified', true);
      } else {
        this.setState({
          inValidOtp: false,
        });
      }
    }
  }

  //render content
  private renderOTPContent = () => {
    const { currentOtpStatus, showLoader } = this.state;
    const restrictInvalidOtpInput = (e: { target: { value: string | any[] }; preventDefault: () => void }) => {
      if (e.target.value.length > 3) {
        e.preventDefault();
      }
    };

    /**
     * verified
     */
    if (currentOtpStatus == OTPSTATUS.Verified) {
      return null;
      //return <Icon name="check circle" color="green" className="verified-checkbox" />;
    }

    /**
     * send
     */
    if (currentOtpStatus == OTPSTATUS.Send) {
      return (
        <Form.Input
          label="OTP"
          onChange={e => this.verifySendOtp(e.target.value)}
          autoComplete="off"
          placeholder="OTP"
          className="_otp-input"
          type="number"
          width={5}
          aria-label="enter otp"
          name="otp"
          onKeyPress={(e: any) => restrictInvalidOtpInput(e)}
        />
      );
    }

    return (
      <Button
        className="_send-otp-button"
        disabled={this.props.value.length != 10 || showLoader}
        primary
        type="button"
        aria-label="send-otp"
        loading={showLoader}
        onClick={this.sendOtp}
      >
        Send OTP
      </Button>
    );
  };

  //render content
  private renderMessage = () => {
    const { remainingTime, currentOtpStatus, inValidOtp, responseMessage } = this.state;

    if (currentOtpStatus == OTPSTATUS.Verified) {
      return (
        <p className="mobile-message">
          <Icon name="check circle" color="green" /> Your mobile number is verified!
        </p>
      );
    }

    if (!inValidOtp) {
      return (
        <p className="mobile-message">
          <span style={{ color: '#CC9694' }}>Please enter valid OTP.</span> You can resend OTP after{' '}
          <b>{remainingTime}.</b>
        </p>
      );
    }

    if (currentOtpStatus == OTPSTATUS.Send) {
      return (
        <p className="mobile-message">
          OTP send successfully. You can resend OTP after <b>{remainingTime}.</b>
        </p>
      );
    }

    if (responseMessage) {
      return (
        <p className="mobile-message">
          <span style={{ color: '#CC9694' }}>{responseMessage}</span>
        </p>
      );
    }

    if (!this.props.errorMobile && this.props.errorMobileVerified) {
      return (
        <div className="error-message">
          <ErrorMessage name="ismobileverified"></ErrorMessage>
        </div>
      );
    }
  };

  render() {
    const { remainingTime, currentOtpStatus } = this.state;
    const isTabNMobile = ScreenUtil.getWindowDimension().width < SCREEN_BREAKPOINT.tablet;
    const numberOfColoumn = isTabNMobile ? 8 : 11;
    return (
      <Form className="mobile-input" >
        <Form.Group widths="equal" unstackable className="m-b-10" >
          <Form.Field
            control={Input}
            label="Mobile No."
            icon="mobile"
            iconPosition="left"
            placeholder={isTabNMobile ? "Mobile no." : "Enter your mobile no."}
            autoComplete="off"
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            value={this.props.value}
            error={this.props.errorMobile}
            aria-label="enter mobile number"
            disabled={
              this.props.isSubmitting || currentOtpStatus == OTPSTATUS.Send || currentOtpStatus == OTPSTATUS.Verified
            }
            name="mobile"
            width={numberOfColoumn}
          />
          {this.renderOTPContent()}
        </Form.Group>
        {this.renderMessage()}
      </Form>
    );
  }
}

/**
 * default props
 */
type TProps = {
  handleChange?: any;
  handleBlur?: any;
  isSubmitting?: any;
  value?: any;
  errorMobile?: any;
  errorMobileVerified?: any;
  setFieldValue?: Function;
  isMobileVerified: any;
};

/**
 * default state
 */
type TState = {
  currentOtpStatus: number;
  remainingTime?: string;
  otp: string;
  dataToken: string;
  inValidOtp: Boolean;
  responseMessage: string;
  showLoader: boolean;
};

const MobileInput = compose<TClientRoute<TProps>, TProps>(
  withRouterHOC,
  withApollo,
  withToastHOC,
)(MobileInputComponent);
export { MobileInput as default };
