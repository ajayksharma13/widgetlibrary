import _ from 'lodash';
import { UserContext } from '../context';
import { TDropdownOption, TPreference } from '../types';
import DateUtils from './date';

declare const document: any;
declare const Element: any;

/**
 * Utils
 */
class Utils {
  /**
   * map object to dropdown options
   * @param data
   * @param param1
   */

  static mapObjectToDropdownOptions(
    data: Array<any> = [],
    { key, value, text }: TDropdownOption = {
      value: 'id',
      text: 'id',
    }
  ) {
    return data.map((d, index) => ({
      key: index,
      value: d[value],
      text: d[text],
      data: d,
    }));
  }

  /**
   * get dropdown option
   * @param values
   * @param compareId
   */
  static getDropdownOption(
    values: Array<any>,
    compareId: string | number
  ): TDropdownOption {
    return _.find(values, b => b.value == Utils.ToIntFloat(compareId));
  }

  /**
   * get latitude and longitude
   */
  static async getLatLng(): Promise<
    GeolocationPosition | GeolocationPositionError | null
  > {
    // chec geo location api exists or not
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          position => resolve(position),
          error => reject(error)
        );
      });
    } else {
      console.info(`Your browser is not support geolocation api`);
      return null;
    }
  }

  // update state with async
  static asyncState = (thisVariable: any, value = {}) => {
    return new Promise((resolve: any) =>
      thisVariable.setState(
        {
          ...value,
        },
        () => resolve()
      )
    );
  };

  // conversion
  static ToIntFloat = (value: any, parseFn = parseInt) => {
    try {
      const result = parseFn(value);
      return !isNaN(result) ? result : undefined;
    } catch {
      return undefined;
    }
  };

  // get graphql errors
  static getGraphQLErrors = (error: any) => {
    let formikErrors: any = {};
    if (error.message.includes('Validation Error')) {
      const { graphQLErrors: errors } = error;
      for (let error of errors) {
        switch (error.extensions.code) {
          /**
           * check argument validation error
           */
          case 'ARGUMENT_VALIDATION_ERROR':
            const fieldErrors = error.extensions.exception.validationErrors;

            // collect field error
            for (let { property, constraints } of fieldErrors) {
              const constraintKeys: any = Object.keys(constraints);
              formikErrors[property] = constraints[constraintKeys[0]];
            }
            break;
        }
      }
    }
    return formikErrors;
  };

  /**
   * is null or undefined
   * @param value
   * @returns
   */
  static isNullOrUndefined = (value: any) => [null, undefined].includes(value);

  /**
   * get interval
   * @param startTime
   * @param endTime
   * @returns
   */
  static getInterval = (startTime = Date.now(), endTime = Date.now()) =>
    DateUtils.getIntervalString(
      DateUtils.getInterval(new Date(startTime), new Date(endTime))
    );

  /**
   * check preference
   * @param preferences
   * @param preference
   * @returns
   */
  static checkPreference = (
    preferences: Array<TPreference> = [],
    name: string
  ) => {
    const preference: TPreference | undefined = preferences.find(
      p => p.preference === name
    );
    return preference?.access;
  };

  // fullscreen mode
  static upFullScreen() {
    // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (
      (document.fullScreenElement !== undefined &&
        document.fullScreenElement === null) ||
      (document.msFullscreenElement !== undefined &&
        document.msFullscreenElement === null) ||
      (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
      (document.webkitIsFullScreen !== undefined &&
        !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    }
  }

  // close fullscreen mode
  static downFullScreen() {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  static async getScreenShot(elementId: string) {
    try {
      if (elementId) {
        const el = document.querySelector(elementId) as HTMLElement;
        const html2canvas: any = await import('html2canvas');
        const canvas = await html2canvas.default(el);
        return canvas.toDataURL();
      } else {
        return {
          error: 'Please provide element to capture',
        };
      }
    } catch (error) {
      console.error(`Error ! while capturing screen shoot error ${error}`);
      return {
        error: 'Error ! while capturing screen shoot',
      };
    }
  }

  static getFloatValue = (value: any) =>
    typeof value == 'number'
      ? value
      : isNaN(parseFloat(value))
      ? 0
      : parseFloat(value);

  static toUpper = (value: any) =>
    value && typeof value == 'string' ? value.toUpperCase() : '';

  static scrollToTop = (top: number = document.documentElement.scrollHeight) =>
    window.scroll({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

  static scrollToElement = (id: string, extraTop: number = 0) => {
    const element = document.getElementById(id);
    const clientBoundRect = element?.getBoundingClientRect();
    const top = document.documentElement.scrollTop + clientBoundRect?.top;

    window.scroll({
      top: top + extraTop,
      behavior: 'smooth',
      // block: "start",
    });

    // element?.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
  };

  /**
   *
   * @param event prevent default
   * @returns
   */
  static preventDefault = (event: any = {}) => {
    event?.preventDefault();
    event?.stopPropagation();
    return false;
  };
}

export { Utils as default };
export * from './script';
export * from './screen';
export * from './enum';
export * from './constants';
export * from './store';
export * from './auth';
export * from './date';
export * from './drag-drop';
// export * from './custom-event';
