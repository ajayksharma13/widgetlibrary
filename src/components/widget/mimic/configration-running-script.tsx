import { eOperationType } from "../../../utils/enum";
import { ParameterOperation } from "../../../utils/parameter-operation";

/**
 * dummy timmer Function
 */
const timer = (ms: any) => new Promise(res => setTimeout(res, ms));

/**
 * 
 * @param view of html type
 * @param value of Number type
 */
const genrealScript = (value: number, mutableElementId: string) => {
    const progress = document.getElementById(mutableElementId)!;
    if (((value - 0) * (value - 99)) <= 0) {
        progress.style.width = value.toString() + "%";
    }
}

const alarmScript = (view: HTMLElement, value: number) => {
    if (((value - 30) * (value - 50)) <= 0) {
        view.querySelectorAll(".alarm")[0].classList.add("on");
    } else {
        view.querySelectorAll(".alarm")[0].classList.remove("on");
    }
}

/**
 * script Array
 */
const scriptArray = [alarmScript];


/**
 * this class will take value from paramerter operation and perform action on actual Node 
 */
class configurationRunningScript {


    static animationRunner = async (dataBindingArray: Array<any>) => {
        let bindedHtmlNode: Array<any> = [];
        let bindedSvgNode: any[] = [];
        const diagramElement = document.getElementById("widget-diagram")!;//will use this later
        const ele = document.getElementById(dataBindingArray[0].nodeId! + "_content_groupElement");

        dataBindingArray.map((node) => {
            const { nodeId, controlledType, attribute, srciptObj, mutableElementId } = node.jsonData;
            if (node.type == "HTML") {
                if (controlledType) {
                    if (!srciptObj.customScript) {
                        bindedHtmlNode.push(
                            {
                                attribute: attribute,
                                data: node.jsonData,
                            });
                    }
                }
            }
            else {
                if (controlledType) {
                    const ele = document.getElementById(nodeId + "_content_groupElement");

                    ele?.querySelectorAll("#" + mutableElementId)[0]?.setAttribute("data-id", nodeId);
                    bindedSvgNode.push(
                        {
                            attribute: node.jsonData.attribute,
                            data: document.querySelectorAll(`[data-id*="${nodeId}"]`)[0],
                        });
                }
                else {
                    diagramElement?.querySelectorAll("#" + mutableElementId)?.forEach((node) => {
                        node.setAttribute("class", mutableElementId);
                    });
                }

            }
        })



        //temp animation runner  
        for (let i = 0; i <= 100; i++) {
            bindedHtmlNode.map((node) => {
                genrealScript(ParameterOperation.operator(eOperationType.DIRECT, i), node.data.mutableElementId);
            })
            bindedSvgNode.map((item) => {
                item.data.setAttribute(item.attribute, ParameterOperation.operator(eOperationType.DIRECT, i).toString());
            });
            await timer(500);
        }
    }

}

export { configurationRunningScript };


