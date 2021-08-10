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
  TextArea,
} from "semantic-ui-react";
import { UserContext } from "../../context";
import withRouterHOC from "../../hoc/with-router";
import { TClientRoute, TDropdownOption, TUser } from "../../types";
import Utils, { LOGO_URL_2x } from "../../utils";
import { BaseComponent } from "../base";
import "./style.scss";
import { DropDownHelper, TDropdownHelper } from "../general/dropdown-helper";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations/src/treeview/treeview.component";
import { Link } from "react-router-dom";

const cities = [
  {
    id: 1,
    name: "Udaipur",
  },
  {
    id: 1,
    name: "Jaipur",
  },
];

const countries = [
  { id: 1, name: "Australia", hasChild: true, expanded: true },
  { id: 2, pid: 1, name: "New South Wales" },
  { id: 3, pid: 1, name: "Victoria" },
  { id: 4, pid: 1, name: "South Australia" },
  { id: 6, pid: 1, name: "Western Australia" },
  { id: 7, name: "Brazil", hasChild: true },
  { id: 8, pid: 7, name: "Paraná" },
  { id: 9, pid: 7, name: "Ceará" },
  { id: 10, pid: 7, name: "Acre" },
  { id: 11, name: "China", hasChild: true },
  { id: 12, pid: 11, name: "Guangzhou" },
  { id: 13, pid: 11, name: "Shanghai" },
  { id: 14, pid: 11, name: "Beijing" },
  { id: 15, pid: 11, name: "Shantou" },
  { id: 16, name: "France", hasChild: true },
  { id: 17, pid: 16, name: "Pays de la Loire" },
  { id: 18, pid: 16, name: "Aquitaine" },
  { id: 19, pid: 16, name: "Brittany" },
  { id: 20, pid: 16, name: "Lorraine" },
  { id: 21, name: "India", hasChild: true },
  { id: 22, pid: 21, name: "Assam" },
  { id: 23, pid: 21, name: "Bihar" },
  { id: 24, pid: 21, name: "Tamil Nadu" },
  { id: 25, pid: 21, name: "Punjab" },
];

/**
 * SampleForm Component
 */
class SampleFormComponent extends BaseComponent<TClientRoute<TProps>, TState> {
  formikRef = React.createRef<FormikProps<TForm>>();

  /**
   * user Context type
   */
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>;

  /**
   * declare default state value
   */
  state: Readonly<TState> = {
    cities: [],
    formError: {
      header: "",
      content: "",
    },
  };

  /**
   * form initial value
   */
  formInitialValue: Readonly<TForm> = {
    userName: "",
    cityId: 0,
    pincode: "",
    place: "",
    gender: "male",
    isAgree: false,
  };

  /**
   * validation Schema
   */
  validationSchema = Yup.object().shape({
    userName: Yup.string().required("Required."),
    cityId: Yup.string().required("Required."),
    pincode: Yup.string().required("Required."),
    place: Yup.string().required("Required."),
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

  async componentDidMount() {
    await this.fetchCities();
  }

  /**
   * fetch brands
   */
  private async fetchCities() {
    // const { client } = this.props;
    // const requestVariables = {
    //   brandFilter: {
    //     pageCount: -1,
    //   },
    // };

    // const { data: gqlData } = await client.query({
    //   query: GQLBrand.fetchAllBrands(),
    //   variables: requestVariables,
    // });
    // const { fetchAllBrands } = gqlData;
    // const { resultCode, message, data } = fetchAllBrands;

    // if (resultCode == eResultCode.SUCCESS) {
    //   const { result } = data;
    // this.setState({
    //   brands: Utils.mapObjectToDropdownOptions(result, {
    //     text: "name",
    //     value: "id",
    //   }),
    // });

    // } else {
    //   console.error(`Result Error Code (${resultCode}): ${message} `);
    // }

    this.setState({
      cities: Utils.mapObjectToDropdownOptions(cities, {
        text: "name",
        value: "id",
      }),
    });
  }

  /**
   * on submit form
   * @param values
   * @param props
   */
  private onSubmit = async (
    values: FormikValues & TForm,
    formikHelpers: FormikHelpers<FormikValues & TForm>
  ) => {
    const { client, SidebarCallBack, onChangeSidebar, alert, update } = this
      .props as any;

    try {
      formikHelpers.setSubmitting(true);

      const requestVariables = {
        inputUsers: {
          ...values,
          ssoid: values.email,
        },
      };

      console.log(requestVariables);
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
          );
            
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
    const { formError, cities } = this.state as TState;
    const { onChangeSidebar } = this.props;

    return (
      <div className="sample-form form">
        <Grid columns="2" verticalAlign="middle">
          <Grid.Column floated="left" className="section-items">
            <Header as="h5" className="form__header">
              {/* <Image size="massive" src={LOGO_URL_2x} /> */}
              Add form
            </Header>
          </Grid.Column>

          <Grid.Column
            floated="right"
            textAlign="right"
            className="section-items"
          >
            <Link to="/sample" title="Add Brand">
              <Button size="mini" className="primary m-l-15">
                Go to list
              </Button>
            </Link>
          </Grid.Column>
        </Grid>
        <Segment basic className="form__segment">
          <Formik
            className="form__formik"
            innerRef={this.formikRef}
            validationSchema={this.validationSchema}
            initialValues={this.formInitialValue}
            onSubmit={this.onSubmit}
          >
            {(props: FormikProps<TForm>) => (
              <Form onSubmit={props.handleSubmit}>
                <Form.Input
                  fluid
                  // icon="user"
                  // iconPosition="left"
                  required
                  label="User Name"
                  placeholder="Textbox"
                  autoComplete="off"
                  // autoFocus
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.userName}
                  error={
                    props.errors.userName &&
                    props.touched.userName &&
                    props.errors.userName
                  }
                  disabled={props.isSubmitting}
                  onKeyDown={(e: any) => this.restrictInput(e)}
                  name="userName"
                />
                {/* <div className="error-message">
                        <ErrorMessage name="userName"></ErrorMessage>
                      </div> */}

                <DropDownHelper
                  name="cityId"
                  isReturnObject={false}
                  formikProps={props}
                >
                  {(helpers: TDropdownHelper) => (
                    <Form.Select
                      search
                      label="City"
                      autoComplete="off"
                      onChange={helpers.handleChange}
                      onBlur={helpers.handleBlur}
                      value={props.values.cityId}
                      error={
                        props.errors.cityId &&
                        props.touched.cityId &&
                        props.errors.cityId
                      }
                      options={cities}
                      name="cityId"
                      disabled={props.isSubmitting}
                      id="cityId"
                    />
                  )}
                </DropDownHelper>
                <Form.Group widths="equal">
                  <Form.Input
                    label="Pin code"
                    autoComplete="off"
                    onChange={props.handleChange}
                    value={props.values.pincode}
                    error={
                      props.errors.pincode &&
                      props.touched.pincode &&
                      props.errors.pincode
                    }
                    name="pincode"
                    disabled={props.isSubmitting}
                    id="pincode"
                  />
                  <Form.Input
                    label="Landmark"
                    search
                    autoComplete="off"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.place}
                    error={
                      props.errors.place &&
                      props.touched.place &&
                      props.errors.place
                    }
                    name="place"
                    disabled={props.isSubmitting}
                    id="place"
                  />
                </Form.Group>

                <Form.Field
                  id="form-textarea"
                  control={TextArea}
                  disabled={props.isSubmitting}
                  label="Textarea"
                  rows={2}
                  placeholder="Enter something long text...."
                />
                <Form.Field>
                  <label>Checkbox</label>
                </Form.Field>
                <Form.Group widths="equal">
                  <Form.Radio
                    label="Male"
                    onChange={(e: any) => {
                      props.setFieldValue(
                        "gender",
                        e.target.checked ? "male" : "female"
                      );
                      props.setFieldTouched("gender", true);
                    }}
                    name="male"
                    disabled={props.isSubmitting}
                    checked={props.values.gender == "male"}
                    id="male"
                  />
                  <Form.Radio
                    label="Female"
                    name="female"
                    onChange={(e: any) => {
                      props.setFieldValue(
                        "gender",
                        e.target.checked ? "female" : "male"
                      );
                      props.setFieldTouched("gender", true);
                    }}
                    checked={props.values.gender == "female"}
                    disabled={props.isSubmitting}
                    id="female"
                  />
                </Form.Group>

                <Form.Field>
                  <label>Treeview</label>
                  <TreeViewComponent
                    showCheckBox={true}
                    fields={{
                      dataSource: countries,
                      id: "id",
                      parentID: "pid",
                      text: "name",
                      hasChildren: "hasChild",
                    }}
                  />
                </Form.Field>

                <Form.Checkbox
                  label="I agree to the terms and conditions"
                  onChange={(e: any) => {
                    props.setFieldValue("isAgree", e.target.checked);
                    props.setFieldTouched("isAgree", true);
                  }}
                  name="isAgree"
                  disabled={props.isSubmitting}
                  checked={props.values.isAgree}
                  id="isAgree"
                />
                <Segment
                  basic
                  className="p-l-0 p-r-0 m-b-0 p-b-0"
                  textAlign="right"
                >
                  <Button
                    primary
                    size="small"
                    className="form-button primary"
                    disabled={props.isSubmitting}
                    loading={props.isSubmitting}
                    type="submit"
                  >
                    Save
                  </Button>

                  <Button
                    size="small"
                    basic
                    disabled={props.isSubmitting}
                    type="button"
                    onClick={() => this.props.history.goBack()}
                  >
                    Cancel
                  </Button>
                </Segment>
              </Form>
            )}
          </Formik>
        </Segment>
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
  cities: Array<TDropdownOption>;
  formError: {
    header?: string;
    content?: string;
  };
};

/**
 * default state
 */
type TForm = {
  userName: string;
  cityId: any;
  pincode: string;
  place: string;
  gender: string;
  isAgree: boolean;
};

const SampleForm = compose<TClientRoute<TProps>, TProps>(withRouterHOC)(
  SampleFormComponent
);
SampleForm.displayName = "SampleForm";
export { SampleForm as default };
