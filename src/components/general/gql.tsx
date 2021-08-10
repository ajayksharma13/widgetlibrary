import gql from 'graphql-tag';
/**
 * GQL for general component
 */
class GQLGeneral {
    /**
     * for sending otp on moblie number
     */
    static sendOTP() {
        return gql`
    mutation sendOTP($mobileno: String!) {
        sendOTP(mobileno: $mobileno) {
          statusCode
          resultCode
          message
          data
        }
      }
    `;
    }
    /**
    * for verifying send  otp 
    */
    static verifyOTP() {
        return gql`
    mutation verifyOTP($otp:String!,$mobileno: String!,$data:String!) {
        verifyOTP(otp:$otp ,mobileno: $mobileno, data:$data) {
          statusCode
          resultCode
          message
          data
        }
      }
    `;
    }
}



export { GQLGeneral };