import React from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import {
  NodeModel,
  ConnectorModel,
  SelectorModel,
} from "@syncfusion/ej2-react-diagrams";
import { BaseComponent } from "../base";
import "./style.scss";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

const sizeData: string[] = [
  "8",
  "12",
  "14",
  "16",
  "18",
  "20",
  "24",
  "36",
  "48",
  "72",
];

export default class ElementEditor extends BaseComponent<TProps, TState> {
  state: TState = {};

  getTextColor = (): string => {
    return this.props.selectedItem
      ? this.props.selectedItem.propName
        ? this.props.selectedItem?.properties.annotations[0].properties.style
            .properties.color
        : "#000000"
      : "#000000";
  };

  getStrokeColor = (): string => {
    return this.props.selectedItem
      ? this.props.selectedItem.propName
        ? this.props.selectedItem?.properties.style.properties.strokeColor
        : "#000000"
      : "#000000";
  };

  getTextSize = (): string => {
    return this.props.selectedItem
      ? this.props.selectedItem.propName
        ? this.props.selectedItem.properties.annotations[0].properties.style.properties.fontSize.toString()
        : "12"
      : "12";
  };

  getFillColor = (): string => {
    return this.props.selectedItem
      ? this.props.selectedItem.propName
        ? this.props.selectedItem?.properties.style.properties.fill
        : "#ffffff"
      : "#ffffff";
  };

  getLocX = (): string => {
    return this.props.selectedItem
      ? this.props.selectedItem.propName
        ? this.props.selectedItem.propName === "nodes"
          ? this.props.selectedItem.offsetX.toString()
          : this.props.selectedItem.properties.sourcePoint.properties.x.toString()
        : "0"
      : "0";
  };

  getLocY = (): string => {
    return this.props.selectedItem
      ? this.props.selectedItem.propName
        ? this.props.selectedItem.propName === "nodes"
          ? this.props.selectedItem.offsetY.toString()
          : this.props.selectedItem.properties.sourcePoint.properties.y.toString()
        : "0"
      : "0";
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div className="editor-panel">
          <div
            style={{
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "black",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Properties Editor</h3>
          </div>
          <div className="row-header">
            <p style={{ textAlign: "center" }}>Fill-Color</p>
          </div>
          <div style={{ alignSelf: "center" }}>
            <ColorPickerComponent
              id="color-picker-1"
              value={this.getFillColor()}
              change={(e: any) => {
                this.props.colorChange(e.currentValue.hex);
                this.setState({ fillColor: e.currentValue.hex });
              }}
            />
          </div>
          <div className="row-header">
            <p style={{ textAlign: "center" }}>Stroke-Color</p>
          </div>
          <div style={{ alignSelf: "center" }}>
            <ColorPickerComponent
              id="color-picker-2"
              value={this.getStrokeColor()}
              change={(e: any) => {
                this.props.strokeChange(e.currentValue.hex);
                this.setState({ strokeColor: e.currentValue.hex });
              }}
            />
          </div>
          <div className="row-header">
            <p style={{ textAlign: "center" }}>Text-Color</p>
          </div>
          <div style={{ alignSelf: "center" }}>
            <ColorPickerComponent
              id="color-picker-3"
              value={this.getTextColor()}
              change={(e: any) => {
                this.props.textColorChange(e.currentValue.hex);
                this.setState({ textColor: e.currentValue.hex });
              }}
            />
          </div>
          <div className="row-header">
            <p style={{ textAlign: "center" }}>Text-Size</p>
          </div>
          <div
            style={{
              paddingTop: "5px",
              alignSelf: "center",
              paddingBottom: "5px",
            }}
          >
            <DropDownListComponent
              id="ddlelement"
              dataSource={sizeData}
              popupHeight="200px"
              popupWidth="20vh"
              placeholder="Select Font Size"
              value={this.getTextSize()}
              change={(e: any) => {
                this.props.textSizeChange(e.value);
                this.setState({ textSize: e.value });
              }}
            />
          </div>
          <div
            style={{
              paddingTop: "5px",
              alignSelf: "center",
              paddingBottom: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextBoxComponent
              placeholder="Set X Coordinate"
              floatLabelType="Auto"
              width="10vh"
              value={this.getLocX()}
              onChange={(e: any) => {
                this.props.changeX(e.value);
                this.setState({ loc_X: e.value });
              }}
            />
            <TextBoxComponent
              placeholder="Set Y Coordinate"
              floatLabelType="Auto"
              width="10vh"
              value={this.getLocY()}
              onChange={(e: any) => {
                this.props.changeY(e.value);
                this.setState({ loc_Y: e.value });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

type TState = {};

type TProps = {
  colorChange: Function;
  strokeChange: Function;
  textColorChange: Function;
  textSizeChange: Function;
  changeX: Function;
  changeY: Function;
  selectedItem: SelectorModel | null;
};
