export * from './enums';

/**
 * Login Type
 */
export type TLogin = {
    userId: string;
    password: string;
    isRemember: boolean;
}


/**
 * Layout Config Type
 */
export type TLayoutConfig = {
    isShowHeader: boolean,
    isShowFooter: boolean
}