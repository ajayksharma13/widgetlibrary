import { eOperationType } from './enum';

/**
 *
 */
class ParameterOperation {
  /**
   * this function takes current value and depending upon parameter type it provide value
   * @param type
   * @param valueObj
   * @returns value
   */

  static operator = (type: number, valueObj: any) => {
    switch (type) {
      case eOperationType.DIRECT: {
        return valueObj.value;
      }
      case eOperationType.BOOLEAN: {
        return valueObj.value > 0;
      }
      case eOperationType.PERCENTAGE: {
        // code block
        break;
      }

      default:
      // code block
    }
  };
}

export { ParameterOperation };
