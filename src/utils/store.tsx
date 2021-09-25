import cookie from 'react-cookies';
const { REACT_APP_SITE_BASEURL } = process.env;
const cookieStorePath = `${REACT_APP_SITE_BASEURL || '/'}`;

// default options for storing cookie
const defaultOptions = {
  path: cookieStorePath,
};

/**
 * Store for data
 */
class StoreUtil {
  /**
   * set cookie
   * @param cookieName
   * @param data
   * @param options
   */
  static set(name: string, data: any, options: object = defaultOptions) {
    if (name && data) cookie.save(name, data, options);
  }

  /**
   * retrieve cookie
   * @param name
   * @returns
   */
  static get(name: string) {
    return cookie.load(name);
  }

  /**
   * remove cookie
   * @param cookieName
   * @param options
   */
  static remove(name: string, options = defaultOptions) {
    cookie.remove(name, options);
  }

  /**
   * remove all cookies
   */
  static removeAll() {
    const cookieKeys = cookie.loadAll();
    Object.keys(cookieKeys).map(c => StoreUtil.remove(c));
  }
}

export { StoreUtil };
