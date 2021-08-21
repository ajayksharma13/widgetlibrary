import ModelBase from "../model.base";
import { configurationRunningScript } from "./configration-running-script";

/**
 * Mimic tool model cum logic class
 */
class MimicModel extends ModelBase {
    value: any = null;
    title: string = "Diagram";
    dataBinding: BindingTypes[] = [];

    /**
     * create instance of mimic
     * @param {object} data
     */
    static instance(data: MimicModel = new MimicModel()) {
        let instance = Object.assign(new MimicModel(), data);
        return instance;
    }

    public diagramRunner(): void {
        if (this.dataBinding.length) {
            configurationRunningScript.animationRunner(this.dataBinding);
        }
    }

    public updatediagramObject(data: any): void {
        this.value = data;
    }
    public appendBindingElement(data: any): void {
        this.dataBinding.push(data);
        console.log(this.dataBinding);
    }
    public resetBindingElement(): void {
        this.dataBinding = [];
        console.log(this.dataBinding);
    }
}

type BindingTypes = {
    nodeId?: string;
    parameterId?: string;
    defaultValue?: number;
    type?: string;
    jsonData: {
        attribute?: string;
        controlledType?: number;//:todo enum 1>valueType  2>contorlledType
        mutableElementId?: string;
        scriptObj?: {
            customScript: boolean;
            scriptName?: string;
        }
    };
};


export { MimicModel as default };
