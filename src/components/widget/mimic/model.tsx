import ModelBase from "../model.base";

/**
 * Mimic tool model cum logic class
 */
class MimicToolModel extends ModelBase {
    diagramObject: object = {};

    /**
     * create instance of flipcard
     * @param {object} data
     */
    static instance(data: MimicToolModel = new MimicToolModel()) {
        let instance = Object.assign(new MimicToolModel(), data);
        return instance;
    }

    public updatediagramObject(data: object): void {
        this.diagramObject = data;
        console.log(this.diagramObject);

    }
}

export { MimicToolModel as default };
