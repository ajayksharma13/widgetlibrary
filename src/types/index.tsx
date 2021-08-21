import ApolloClient from "apollo-client";
import { RouteComponentProps } from "react-router-dom";
import { ToastOptions } from "react-semantic-toasts";
import { SemanticShorthandItem } from "semantic-ui-react/dist/commonjs/generic";
import { TabPaneProps } from "semantic-ui-react/dist/commonjs/modules/Tab/TabPane";

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
