import Utils, { eResultCode } from ".";
import { TUser } from "../types";
import { StoreUtil } from "./store";
import { alert } from "../hoc/with-toast";
import { ScreenUtil } from "./screen";

const REACT_APP_ACCESS_TOKEN_KEY = process.env.REACT_APP_ACCESS_TOKEN_KEY || "";
const REACT_APP_REFRESH_TOKEN_KEY =
  process.env.REACT_APP_REFRESH_TOKEN_KEY || "";
const REACT_APP_SITE_BASEURL = process.env.REACT_APP_SITE_BASEURL || "";

/**
 * Auth util
 */
class AuthUtil {
  /**
   * set current logged user
   */
  static async setLoggedUserDetail(user: TUser) {
    // store token
    StoreUtil.set(REACT_APP_ACCESS_TOKEN_KEY, user.accessToken);
    StoreUtil.set(REACT_APP_REFRESH_TOKEN_KEY, user.refreshToken);

    // retrieve current logged user
    return await AuthUtil.getLoggedUserDetail();
  }

  /**
   *
   * @param retrieve current logged user detail
   */
  static async getLoggedUserDetail<TUser>(): Promise<TUser | undefined> {
    // const { data: gqlData } = await AuthUtil.client.query({
    //   query: GQLUser.getLoggedUserDetail(),
    // });
    // const { getLoggedUserDetail } = gqlData as any;
    // const { data } = getLoggedUserDetail;
    // return data as TUser;
    return undefined;
  }

  /**
   *
   * @param retrieve current logged user detail
   */
  static async fetchPreferences<TPreference>(): Promise<TPreference | null> {
    // const { data: gqlData } = await AuthUtil.client.query({
    //   query: GQLUser.fetchPreferencesByRole(),
    // });
    // const { fetchPreferencesByRole } = gqlData as any;
    // const { data } = fetchPreferencesByRole;
    // return data as TPreference;
    return null;
  }

  /**
   * logout
   */
  static async logout(locally = false): Promise<Boolean> {
    try {
      // either remove local or both server
      if (!locally) {
        // const { data: gqlData } = await AuthUtil.client.mutate({
        //   mutation: GQLUser.signOut(),
        //   variables: {},
        // });
      }
      // const { getLoggedUserDetail } = gqlData as any;
      // const { resultCode } = getLoggedUserDetail;
    } catch (e) {
    } finally {
      // remove token
      //StoreUtil.remove(REACT_APP_ACCESS_TOKEN_KEY);
      //StoreUtil.remove(REACT_APP_REFRESH_TOKEN_KEY);
      StoreUtil.removeAll();

      // reload to site main page
      window.location.href = REACT_APP_SITE_BASEURL;
    }
    return true;
  }

  /**
   * refresh token
   */
  static async refreshToken(): Promise<Boolean> {
    const requestVariables = {
      token: StoreUtil.get(REACT_APP_REFRESH_TOKEN_KEY),
    };

    // const { data: gqlData } = await AuthUtil.client.mutate({
    //   mutation: GQLUser.refreshToken(),
    //   variables: requestVariables,
    // });

    // // store token
    // const { refreshToken } = gqlData as any;
    // const { resultCode, data: user } = refreshToken;
    // if (resultCode == eResultCode.SUCCESS) {
    //   //storing token
    //   StoreUtil.set(REACT_APP_ACCESS_TOKEN_KEY, user.accessToken);
    //   StoreUtil.set(REACT_APP_REFRESH_TOKEN_KEY, user.refreshToken);

    //   // reloading page
    //   alert(
    //     { title: "info", description: "Reloading page...", time: 5000 },
    //     ScreenUtil.reload,
    //     ScreenUtil.reload,
    //     ScreenUtil.reload
    //   );
    //   return true;
    // }

    return false;
  }

  /**
   * is user logged
   */
  static isUserLogged() {
    const token = StoreUtil.get(REACT_APP_ACCESS_TOKEN_KEY);
    return !Utils.isNullOrUndefined(token);
  }
}

export { AuthUtil as default };
