import { FormikProps } from "formik";
import React from "react";
import { toRenderProps } from "recompose";
import compose from "recompose/compose";
import {
  DropdownOnSearchChangeData,
  DropdownProps,
} from "semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown";
import { DropdownItemProps } from "semantic-ui-react/dist/commonjs/modules/Dropdown/DropdownItem";
import withToastHOC from "../../hoc/with-toast";
import { TAlert } from "../../types";
import Utils from "../../utils";

/**
 * DropDownHelper
 */
class DropDownHelperComponent extends React.Component<TProps & TAlert> {
  static defaultProps: Pick<TProps, "isReturnObject" | "textId" | "valueId"> = {
    isReturnObject: false,
    textId: "id",
    valueId: "name",
  };

  // default state
  state: Readonly<TState> = {
    allowAdditions: false,
  };

  /**
   * handler change
   * @param event
   * @param data
   */
  handleChange = async (event: unknown, data: DropdownProps) => {
    const { handleChange, value: currentValue } = this.props;
    const { value, options = [], multiple } = data;
    const { name, formikProps, isReturnObject } = this.props;

    // declare  new value
    let newValue;
    try {
      newValue = isReturnObject
        ? multiple
          ? (value as Array<any>).map(
            (v) => (options.find((o) => o.value == v) as any).data
          )
          : (options.find((o) => o.value == value) as any)?.data
        : value;
      formikProps?.setFieldValue?.(name, newValue, true);
      formikProps?.setFieldTouched?.(name, true, true);
    } catch (e) { }
    handleChange?.(event, data, { newValue });
  };

  /**
   * handler change
   * @param event
   * @param data
   */
  handleBlur = async (event: unknown, data: DropdownProps) => {
    // await this.onRemoveAddedItem(event, data);
    const { handleBlur } = this.props;
    // const { value, options = [] } = data;
    const { name, formikProps, isReturnObject } = this.props;
    // const selectedOption = options.find(o => o.value === value);
    // formikProps.setFieldValue(name, isReturnObject ? selectedOption?.data : value);
    formikProps?.setFieldTouched?.(name, true);
    handleBlur?.(event, data);
  };

  /**
   * search change
   * @param event
   * @param data
   */
  onSearchChange = async (event: any, data: DropdownOnSearchChangeData) => {
    const { onSearchChange } = this.props;
    const { options, searchQuery } = data;
    const allowAdditions = !options?.some((o: DropdownItemProps) =>
      o.text?.toString().includes(searchQuery)
    );
    await onSearchChange?.(event, {
      ...data,
      isSearchQueryOptionExist: !allowAdditions,
    });
    await Utils.asyncState(this, { allowAdditions });
  };

  /**
   * add item
   * @param event
   * @param data
   */
  onAddItem = (event: unknown, data: DropdownProps) => {
    const {
      name,
      onAddItem,
      formikProps,
      isReturnObject,
      textId = "id",
      valueId = "name",
      alert,
      value: currentValue,
    } = this.props;
    const { options = [], multiple, value } = data;

    // for add item return type should be object
    if (!isReturnObject) {
      console.error(`Dropdown '${name}' must be set return object type`);
      return;
    }

    const newId = -Math.floor(Math.random() * 200);
    const createItem = {
      key: newId,
      text: value,
      value: newId,
      data: { [textId]: value, [valueId]: newId },
    };
    const updateValue = multiple
      ? [...currentValue, createItem.data]
      : createItem.data;
    const updatedOptions = [createItem, ...options];

    // update field with formik props
    formikProps?.setFieldValue?.(name, updateValue);
    formikProps?.setFieldTouched?.(name, true);

    // call add item
    onAddItem?.(event, { ...data, updatedOptions, updateValue });
  };

  /**
   * add item
   * @param event
   * @param data
   */
  onFocus = (event: unknown, data: DropdownProps) => {
    const { onFocus } = this.props;
    onFocus?.(event, data);
  };

  /**
   * droper helpers
   */
  helpers: Omit<TDropdownHelper, "allowAdditions"> = {
    handleChange: this.handleChange,
    handleBlur: this.handleBlur,
    onSearchChange: this.onSearchChange,
    onAddItem: this.onAddItem,
    onFocus: this.onFocus,
  };

  render() {
    const { children, formikProps, ...props } = this.props;
    return (
      <React.Fragment>
        {children({ ...formikProps, ...this.helpers, ...this.state })}
      </React.Fragment>
    );
  }
}

/**
 * props
 */
type TProps = {
  name: string;
  isReturnObject?: Boolean;
  formikProps?: FormikProps<any>;
  textId?: string;
  valueId?: string;
  value?: any;
  children(data: object): React.ReactNode;
  onFocus?(event: any, data: DropdownProps): void;
  handleChange?(event: any, data: DropdownProps, extra?: any): void;
  handleBlur?(event: any, data: DropdownProps, extra?: any): void;
  onSearchChange?(event: any, data: DropdownOnSearchChangeData): void;
  onAddItem?(event: any, data: DropdownProps): void;
};

type TState = {
  allowAdditions: boolean;
};

/**
 * dropdown helper
 */
export type TDropdownHelper = {
  allowAdditions: false;
  onFocus?(event: any, data: DropdownProps): void;
  handleChange(event: any, data: DropdownProps, extra?: any): void;
  handleBlur(event: any, data: DropdownProps, extra?: any): void;
  onSearchChange(event: any, data: DropdownOnSearchChangeData): void;
  onAddItem(event: any, data: DropdownProps): void;
};

const DropDownHelper = compose<TProps & TAlert, TProps>(withToastHOC)(
  DropDownHelperComponent
);
DropDownHelper.displayName = "DropDownHelper";
export { DropDownHelper };
