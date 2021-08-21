import { eOperationType } from "./enum";


/**
 * 
 */
class ParameterOperation {

    /**
     * this function takes current value and depending upon parameter type it provide value
     * @param type 
     * @param value 
     * @returns value
     */

    static operator = (type: number, value: any) => {
        switch (type) {
            case eOperationType.DIRECT: {
                return value;
            }
            case eOperationType.BOOLEAN: {

                return (value > 0)
            }
            case eOperationType.PERCENTAGE: {
                // code block
                break;
            }

            default:
            // code block
        }
    }


}

export { ParameterOperation }