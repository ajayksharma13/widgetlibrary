/**
 * enum result code
 */
export enum eResultCode {
  SUCCESS = 0,
  DB_ERROR = 1,
  NO_DATA_FOUND = 2,
  AUTHENTICATION_FAILED = 3,
  UNAUTHORIZED = 4,
  UNKNOWN = 5,
  INVALID_LOGIN_ID = 6,
  INVALID_PASSWORD = 7,
  SERVICE_ERROR = 8,
  INVALID_REQUEST = 9,
  NOT_FOUND = 10,
  NETWORK_ERRORSERVEERROR = 11,
  CREATED = 12,
  INTERNAL_SERVEERROR = 13,
  UNUSED = 14,
  MULTIPLE_RECORDS = 15,
  BAD_REQUEST = 16,
}

/**
 * enum http status code
 */
export enum eHTTPStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
}

export enum eDesignerMode {
  CONFIGURE = 1,
  CONFIGURE_PLAY = 2,
  RUNNING = 3,
}

export enum eParameterType {
  INSTANTENOUSES = 1,
  INCREMENTAL = 2,
}

export enum eWidgetSignature {
  VALUE_TYPE = 1,
  ANCHOR_TYPE = 2,
}

export enum eTableType {
  ROW = 1,
  COLUMN = 2,
}

export enum eOperationType {
  DIRECT = 1,
  BOOLEAN = 2,
  PERCENTAGE = 3,
  DEPENDENT = 4,
  CUSTOM = 5,
}
export enum eMimicNodeType {
  HTMLNODE = 1,
  SVGNODE = 2,
}
