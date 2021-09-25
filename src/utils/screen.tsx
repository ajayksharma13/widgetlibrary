import { TScreen } from '../types';

const REACT_APP_API_BASEURL = process.env.REACT_APP_API_BASEURL ?? '/';

/**
 * Screen Util
 */
class ScreenUtil {
  /**
   * get window screen dimension
   */
  static getWindowDimension(): TScreen {
    const { innerWidth: width, innerHeight: height } = window as any;
    return {
      width,
      height,
    };
  }

  /**
   * get window screen dimension
   */
  static reload() {
    window.location.reload();
  }

  /**
   * download
   * @param path
   */
  static download(path: string) {
    window.location.href = REACT_APP_API_BASEURL + path;
  }
}

export { ScreenUtil };
