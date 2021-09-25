import ApolloClient from 'apollo-client';
import { RouteComponentProps } from 'react-router-dom';
import { ToastOptions } from 'react-semantic-toasts';
import { SemanticShorthandItem } from 'semantic-ui-react/dist/commonjs/generic';
import { TabPaneProps } from 'semantic-ui-react/dist/commonjs/modules/Tab/TabPane';
<<<<<<< HEAD
import { eMimicNodeType, eOperationType } from '../utils/enum';
=======
>>>>>>> f7459f3c77e1ffa277605f0c08c37c7eb8c1ac3a

/**
 * Login Type
 */
export type TLogin = {
  userId: string;
  password: string;
  isRemember: boolean;
};

/**
 * Layout Config Type
 */
export type TLayoutConfig = {
  isShowHeader: boolean;
  isShowFooter: boolean;
};

/**
 * Panel directive
 */
export type TPanelDirective = {
  id?: string;
  sizeX: number;
  sizeY: number;
  row: number;
  col: number;
  minSizeX?: number;
  minSizeY?: number;
  maxSizeX?: number;
  maxSizeY?: number;
  header?: string | React.ReactNode;
  content?: string | React.ReactNode;
  cssClass?: string;
  widgetModel: any;
};

export type TLayout = {
  anchors: {
    name?: string;
  } & TGenericStringKeyPair;
  panels: TPanelDirective[];
};

/**
 * generalized type string key value pair
 */
export type TGenericStringKeyPair = {
  [key: string]: any;
};

/**
 * Apollo client type
 */
//export type TClientRoute<P> = P & TAlert & RouteComponentProps & {};
export type TClientRoute<P> = P &
  TAlert &
  TRouteProps &
  RouteComponentProps & {
    client: ApolloClient<any>;
  };

/**
 * Route component props
 */
export type TRouteComponentProps<P> = P & RouteComponentProps;

/**
 * aler props
 */
export type TAlert = {
  alert(
    options?: ToastOptions & {
      title?: string;
    }
  ): void;
};

/**
 * Route Props
 */
export type TRouteProps = {
  update(location: { pathname?: string; q?: object; state?: object }): void;
  getQueryString(): string;
  getLocation(location: {
    pathname?: string;
    q?: object;
    state?: object;
  }): void;
  getCurrentRoute(): object;
} & RouteComponentProps;

/**
 * Preference Information
 */
export type TDropdownOption = {
  key?: string | number;
  value: any;
  text: string;
  data?: any;
};

/**
 * Screen diemension
 */
export type TScreen = {
  width: number;
  height: number;
};

export type TTabPane = {
  pane?: SemanticShorthandItem<TabPaneProps>;
  menuItem?: any;
  render?: (() => React.ReactNode) | undefined;
};

export type TDesigner = {
  title: string;
  description: string;
};

/**
 * User Information
 */
export type TUser = {
  id?: number;
  ssotype?: string;
  ssoid?: string;
  password?: string;
  confirmpassword?: string;
  companyname?: string;
  fullname?: string;
  accessToken?: string;
  refreshToken?: string;
  email?: string;
  mobile?: string;
  role?: TUserRole;
  createdat?: Date;
  updatedat?: Date;
  isactive?: number;
  validupto?: Date;
  ismobileverified?: Boolean;
  isemailverified?: Boolean;
  // remember:Boolean;
};

/**
 * TSignUp Information
 */
export type TSignUp = {
  emailId: string;
  password: string;
  confirmpassword: string;
  otp: string;
};

/**
 * TUserForm Information
 */
export type TUserForm = {
  id:number;
  userId:number;
  name: string;
  displayName: string;
  designation: string;
  address: string;
  pinCode: string;
  districtId: number | undefined;
  stateId: number | undefined;
  countryId:number | undefined;
  mobileNo: string;
  emailId: string;
  statusMessage: string;
  profilePicture: string;
};

/**
 * TWorkSpace Information
 */
 export type TWorkSpace = {
  name: string;
  shortCode: string;
  displayedas: string;
  description: string;
  logo: any;
  defaultWorkSpace: any;
};

/**
 * TOrgprofile Information
 */
 export type TOrgprofile = {
  name: string;
  regAddress: string;
  pincode: string;
  district: string;
  state: string;
  phoneNo: string;
  mobileNo: string;
  email: string;
  category: string;
  description: string;
};

/**
 * TWorkSpace Information
 */
 export type TImportfile = {
  selectFile:any;
  selectOption:any
};

/**
 * TAddNode Information
 */
 export type TAddNode = {
  name:any;
  shortCode:any;
  description:any;

};

/**
 * TWorkSpace Information
 */
 export type TExportfile = {
  selectLocation:any;
  selectOption:any
};

/**
 * TForotPassword Information
 */
 export type TForotPassword = {
  emailId:string;
};

/**
 * Role Information
 */
export type TUserRole = {
  id: number;
  name: string;
  preference?: Array<TPreference>;
};

/**
 * Preference Information
 */
export type TPreference = {
  id: number;
  roleid: number;
  preference: string;
  access: number;
};

export type TWidgetError = {
  id: string;
  errorMessage: string;
  stackTrace?: any;
};

export type TParameterInfo = {
  id: number;
  name?: string;
};

/**
<<<<<<< HEAD
 * Mimic Binding Object Types
 */
export type TBindingObject = {
  nodeId: string;
  parameterId: string;
  nodeType: eMimicNodeType;
  operationType: eOperationType;
  nodedata: TBindingNode;
};

export type TBindingNode = {
  attribute: string;
  dataId: string; //unique
  hasScript?: boolean;
  script?: string;
};
=======
 * TUnit form fields
 * TUnit Props
 */
export type TUnit = {
  id?: null;
  name: string;
  description?: string;
  isActive?: boolean;
};

/**
 * TWorkSpaceRequest form fields
 * TWorkSpaceRequest Props
 */
 export type TWorkSpaceRequest = {
  workspaceName: string;
  workspaceOwner: string;
  requestMessage: string;
};

/**
 * TResetpassword form fields
 * TResetpassword Props
 */
 export type TResetpassword = {
  emailString:string;
  password: string;
  confirmpassword: string;
};

/**
 * TInformation form fields
 * TInformation form Props
 */
 export type TInformationForm = {
  name: string;
  shortCode: string;
  location: string;
  type: string;
  rangemin: number;
  rangemax: number;
  alarmHi: string;
  hihi: string;
  alarmLo: string;
  lolo: string;
  description: string;
};
>>>>>>> f7459f3c77e1ffa277605f0c08c37c7eb8c1ac3a
