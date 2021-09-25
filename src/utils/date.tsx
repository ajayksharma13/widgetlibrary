import { format as formatFns, intervalToDuration } from "date-fns";
import { dateFormat } from "./constants";

/**
 * Date formatting
 */
class DateUtils {
  /**
   * format
   * @param date
   * @param format
   * @returns
   */
  static format(date: string | Date = new Date(), format = dateFormat) {
    if (date.constructor.name == "String") {
      date = DateUtils.getDateStringWithOutTimezone(date as string);
    }
    return formatFns(new Date(date), format);
  }
  /**
   * format
   * @param date
   * @param format
   */
  static getInterval(startDate = new Date(), endDate = new Date()) {
    return intervalToDuration({
      start: startDate,
      end: endDate,
    });
  }

  /**
   * get inveral string
   */

  static getIntervalString(timeInterval: Object) {
    const timeDifference = Object.entries(timeInterval).filter(
      (item) => item[1] > 0
    )[0];
    return timeDifference
      ? `${timeDifference[1]} ${timeDifference[0]} ago`
      : `1 second ago`;
  }
  /**
   * otp timmer
   * @param remaining
   * @returns
   */
  static timer(remaining: any, callBack: Function) {
    let m: any = Math.floor(remaining / 60);
    let s: any = remaining % 60;

    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    callBack({
      remainingTimeInString: m + ":" + s,
      status: "running",
    });

    remaining -= 1;

    if (remaining >= 0) {
      setTimeout(() => {
        DateUtils.timer(remaining, callBack);
      }, 1000);
      return;
    }

    callBack({
      status: "finish",
    });
  }

  // get date string without imezone
  static getDateStringWithOutTimezone(dateString: string) {
    if (dateString.charAt(dateString.length - 1).toUpperCase() == "Z")
      return dateString.substring(0, dateString.length - 1);

    return dateString;
  }
}

export { DateUtils as default };
