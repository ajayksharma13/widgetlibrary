/**
 * Designer categories
 */
export class ApiDesigner {
  private basePath: string = "";
  // private api: Api;

  constructor() {
    //  this.api = new Api(this.basePath);
  }

  /**
   * @description fetch designer category
   */
  getCategories() {
    //return this.api.get("designerCategories")
  }

  /**
   * fetch designer category options
   * @param category pass category
   */
  getCategoryOptions(category: any) {
    // return this.api.get(`designerOptions`, {
    //     categoryId: category.id
    // })
  }

  /**
   * fetch designer option list
   * @param option pass selected option
   */
  getCategoryOptionList(option: any) {
    // return this.api.get(`designerOptionList`, {
    //     optionId: option.id
    // })
  }
}
