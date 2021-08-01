import ModelBase from "../model.base";

/**
 * Mimic tool model cum logic class
 */
class MimicToolModel extends ModelBase {
    value: any = {};
    title: string = "Diagram";

    /**
     * create instance of flipcard
     * @param {object} data
     */
    static instance(data: MimicToolModel = new MimicToolModel()) {
        let instance = Object.assign(new MimicToolModel(), data);
        return instance;
    }

    public updatediagramObject(data: object): void {
        this.value = data;
    }
}

export { MimicToolModel as default };
