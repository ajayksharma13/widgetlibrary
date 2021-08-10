import gql from "graphql-tag";

/**
 * GQL Sample
 */
class GQLSample {
  /**
   *
   * @param fetch all brands
   */
  static fetchAllCountries() {
    return gql`
      query {
        countries {
          name
        }
      }
    `;
  }
}

export { GQLSample };
