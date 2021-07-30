import ModelBase from "../model.base";

/**
 * Mimic tool model cum logic class
 */
class MimicToolModel extends ModelBase {
    footerTitle: string = "";

    /**
     * create instance of flipcard
     * @param {object} data
     */
    static instance(data: MimicToolModel = new MimicToolModel()) {
        let instance = Object.assign(new MimicToolModel(), data);
        return instance;
    }

    public changeFooterTitle(title: string): void {
        this.footerTitle = title;
    }
}

export { MimicToolModel as default };
