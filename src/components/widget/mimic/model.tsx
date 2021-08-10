import ModelBase from "../model.base";

/**
 * Mimic tool model cum logic class
 */
class MimicModel extends ModelBase {
    value: any = null;
    title: string = "Diagram";
    dataBinding: BindingTypes[] = [];

    /**
     * create instance of flipcard
     * @param {object} data
     */
    static instance(data: MimicModel = new MimicModel()) {
        let instance = Object.assign(new MimicModel(), data);
        return instance;
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
    attribute?: string;
    defaultValue?: number;
    jsonData: {
        controlledType?: number;//:todo enum 1>valueType  2>contorlledType
        mutableElementId?: string;
    };
};


export { MimicModel as default };
