import {
  ErrorMessage,
  Formik,
  FormikHelpers,
  FormikProps,
  FormikValues,
} from "formik";
import * as React from "react";
import * as Yup from "yup";
import { compose } from "recompose";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { UserContext } from "../../context";
import withRouterHOC from "../../hoc/with-router";
import { TClientRoute, TUser } from "../../types";
import { LOGO_URL_2x, ScreenUtil, SCREEN_BREAKPOINT } from "../../utils";
import { BaseComponent } from "../base";
import "./style.scss";

/**
 * Login Component
 */
class LoginComponent extends BaseComponent<TClientRoute<TProps>, TState> {
  formikRef = React.createRef<FormikProps<TUser>>();

  /**
   * user Context type
   */
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>;

  /**
   * declare default state value
   */
  state: Readonly<TState> = {
    isVisiblePasswordText: false,
    isForceFullyLogin: false,
    formError: {
      header: "",
      content: "",
    },
  };

  /**
   * form initial value
   */
  formInitialValue: Readonly<TUser> = {
    email: "",
    password: "",
    ssotype: "manual",
  };

  /**
   * validation Schema
   */
  validationSchema = Yup.object().shape({
    email: Yup.string()
      .lowercase("User name should not be in Uppercase.")
      .min(6, "User name must be at least 6 characters.")
      .max(30, "User name should not exceed 30 characters.")
      .required("User name is required."),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters.")
      .max(30, "Password should not exceed 30 characters.")
      .required("Password is required."),
  });

  //for restricting  input At 30 char
  restrictInput = (event: any) => {
    if (
      !(
        event.key == "Backspace" ||
        event.keyCode == 8 ||
        event.key == "Delete" ||
        event.keyCode == 46
      )
    ) {
      if (event.target.value.length > 29) {
        event.preventDefault();
      }
    }
  };

  /**
   * on submit form
   * @param values
   * @param props
   */
  private onSubmit = async (
    values: FormikValues & TUser,
    formikHelpers: FormikHelpers<FormikValues & TUser>
  ) => {
    const { client, SidebarCallBack, onChangeSidebar, alert, update } = this
      .props as any;
    const { isForceFullyLogin } = this.state;

    try {
      formikHelpers.setSubmitting(true);

      const requestVariables = {
        inputUsers: {
          ...values,
          ssoid: values.email,
        },
        isForceFullyLogin,
      };

      update({ pathname: "/sample" });

      /*
      const { data: gqlData } = await client.mutate({
        mutation: GQLUser.signIn(),
        variables: requestVariables,
      });

      const { signIn } = gqlData;
      const { resultCode, message, data } = signIn;

      // check status
      // set  user detail
      if (resultCode == eResultCode.SUCCESS) {
        const userDetail: any = await AuthUtil.setLoggedUserDetail(data);
        const preferences = await AuthUtil.fetchPreferences();
        this.context.onUpdate?.({ ...userDetail, preferences });
        
        onChangeSidebar(false);
        await SidebarCallBack?.({ success: true });
      } else {
        // reset form value
        // await SidebarCallBack?.({ success: false });
        // this.formikRef?.current?.setFieldValue('password', '', false);

        this.setState((prevState) => ({
          formError: {
            content: message,
            header: "Authentication Error",
          },
          isForceFullyLogin:
            resultCode == eResultCode.MULTIPLE_RECORDS
              ? true
              : prevState.isForceFullyLogin,
        }));
      }
      */

      formikHelpers.setSubmitting(false);
    } catch (error) {
      // set graphql errors retrieve from server side
      // this.formikRef.current?.setErrors(Utils.getGraphQLErrors(error));
    }
  };

  render() {
    const { isVisiblePasswordText, formError } = this.state as TState;
    const { onChangeSidebar } = this.props;
    const isTabNMobile =
      ScreenUtil.getWindowDimension().width < SCREEN_BREAKPOINT.tablet;

    return (
      <div className="login">
        <Grid
          textAlign="center"
          verticalAlign="middle"
          columns="equal"
          className="m-0"
        >
          <Grid.Column className="login__sidebackground">&nbsp;</Grid.Column>
          <Grid.Column className="login__form">
            <Segment basic className="login__segment">
              <Header as="h4" className="header" textAlign="center">
                <Image size="massive" src={LOGO_URL_2x} />
                <p>Welcome back! Please login to your account</p>
              </Header>
              <Formik
                innerRef={this.formikRef}
                validationSchema={this.validationSchema}
                initialValues={this.formInitialValue}
                onSubmit={this.onSubmit}
              >
                {(props: FormikProps<TUser>) => (
                  <Form onSubmit={props.handleSubmit}>
                    <Form.Input
                      fluid
                      // icon="user"
                      // iconPosition="left"
                      // label="User Name"
                      placeholder="Username"
                      autoComplete="off"
                      // autoFocus
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.email}
                      error={props.errors.email && props.touched.email}
                      disabled={props.isSubmitting}
                      onKeyDown={(e: any) => this.restrictInput(e)}
                      name="email"
                    />
                    <div className="error-message">
                      <ErrorMessage name="email"></ErrorMessage>
                    </div>

                    <div className="custom-action">
                      <Form.Input
                        fluid
                        // icon="lock"
                        // iconPosition="left"
                        // label="Password"
                        placeholder="Password"
                        type={isVisiblePasswordText ? "text" : "password"}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.errors.password && props.touched.password}
                        value={props.values.password}
                        disabled={props.isSubmitting}
                        name="password"
                        onKeyDown={(e: any) => this.restrictInput(e)}
                        // action={{
                        //   title: `${
                        //     isVisiblePasswordText ? "Hide" : "Show"
                        //   } password`,
                        //   type: "button",
                        //   icon: isVisiblePasswordText ? "eye slash" : "eye",
                        //   onClick: () =>
                        //     this.setState((prevState) => ({
                        //       isVisiblePasswordText: !prevState.isVisiblePasswordText,
                        //     })),
                        // }}
                      />
                    </div>

                    <div className="error-message">
                      <ErrorMessage name="password"></ErrorMessage>
                    </div>

                    <Segment basic className="p-l-0 p-r-0 m-b-0 p-b-0">
                      <Button
                        primary
                        size="small"
                        className="login-button primary"
                        disabled={props.isSubmitting}
                        loading={props.isSubmitting}
                        type="submit"
                      >
                        Login
                      </Button>

                      <Button
                        primary
                        basic
                        size="small"
                        className="signup-button"
                        disabled={props.isSubmitting}
                        type="button"
                      >
                        Sign up
                      </Button>
                    </Segment>
                  </Form>
                )}
              </Formik>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
/**
 * default props
 */
type TProps = {
  onChangeSidebar?: Function;
};

/**
 * default state
 */
type TState = {
  isVisiblePasswordText: boolean;
  isForceFullyLogin: boolean;
  formError: {
    header?: string;
    content?: string;
  };
};

const Login = compose<TClientRoute<TProps>, TProps>(withRouterHOC)(
  LoginComponent
);
Login.displayName = "Login";
export { Login as default };
