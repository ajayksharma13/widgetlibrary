import ModelBase from "../model.base";

/**
 * Mimic tool model cum logic class
 */
class MimicModel extends ModelBase {
    value: any = {};
    title: string = "Diagram";

    /**
     * create instance of flipcard
     * @param {object} data
     */
    static instance(data: MimicModel = new MimicModel()) {
        let instance = Object.assign(new MimicModel(), data);
        return instance;
    }

    public updatediagramObject(data: object): void {
        this.value = data;
    }
}

export { MimicModel as default };
