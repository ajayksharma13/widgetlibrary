import React from "react";
// import { TPreference, TUser } from "../types";
import Utils from "../utils";
import AuthUtil from "../utils/auth";

// User Context
const UserContext = React.createContext<{
  onUpdate?: Function;
  user?: any;
  // preferences?: Array<TPreference>;
  isUserLogged?: Boolean;
}>({});

/**
 * User Provider
 */
class UserProvider extends React.Component<TProps, TState> {
  /**
   * Theme Default props
   */
  static defaultProps: TProps = {
    children: <></>,
  };

  // change theme
  onUpdate = (detail: any = {}) => {
    this.setState(({ value }: TState) => ({
      value: {
        ...value,
        ...detail,
        isUserLogged: !Utils.isNullOrUndefined(
          {
            ...value,
            ...detail,
          }.user
        ),
      },
    }));
  };

  /**
   * default state
   */
  state: Readonly<TState> = {
    value: {
      onUpdate: this.onUpdate,
      isUserLogged: false,
    },
  };

  /**
   * Update State from props
   */
  async componentDidMount() {
    //const { client } = this.props as TProps;
    // AuthUtil.client = client as ApolloClient<NormalizedCacheObject>;
    // const loggedUserDetails: any = await AuthUtil.getLoggedUserDetail();
    // const preferences: any = await AuthUtil.fetchPreferences();
    // this.onUpdate({
    //   ...loggedUserDetails,
    //   preferences,
    // });
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;
    return (
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
  }
}

/**
 * Theme Context Props
 */
type TProps = {
  children: React.ReactNode; // render children,
};

type TState = {
  value: any;
};

export { UserContext, UserProvider };
