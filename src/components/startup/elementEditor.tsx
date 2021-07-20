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
  state: TState = {
    textColor: this.props.selectedItem?.properties.annotations[0].properties
      .style.properties.color,
    strokeColor: this.props.selectedItem?.properties.style.properties
      .strokeColor,
    fillColor: this.props.selectedItem?.properties.style.properties.fill,
    textSize: this.props.selectedItem?.properties.annotations[0].properties
      .style.properties.fontSize,
    loc_X: "0",
    loc_Y: "0",
  };

  onTextColorChange = (e: any) => {
    // console.log(e);
    this.props.textColorChange(e.currentValue.hex);
    this.setState({ textColor: e.currentValue.hex });
  };

  onStrokeColorChange = (e: any) => {
    // console.log(e);
    this.props.strokeChange(e.currentValue.hex);
    this.setState({ strokeColor: e.currentValue.hex });
  };

  onFillColorChange = (e: any) => {
    // console.log(e);
    this.props.colorChange(e.currentValue.hex);
    this.setState({ fillColor: e.currentValue.hex });
  };

  onTextSizeChange = (e: any) => {
    this.props.textSizeChange(e.value);
    this.setState({ textSize: e.value });
  };

  render() {
    console.log(this.props.selectedItem);
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
              value={this.state.fillColor}
              change={this.onFillColorChange}
            />
          </div>
          <div className="row-header">
            <p style={{ textAlign: "center" }}>Stroke-Color</p>
          </div>
          <div style={{ alignSelf: "center" }}>
            <ColorPickerComponent
              id="color-picker-2"
              value={this.state.strokeColor}
              change={this.onStrokeColorChange}
            />
          </div>
          <div className="row-header">
            <p style={{ textAlign: "center" }}>Text-Color</p>
          </div>
          <div style={{ alignSelf: "center" }}>
            <ColorPickerComponent
              id="color-picker-3"
              value={this.state.textColor}
              change={this.onTextColorChange}
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
              change={this.onTextSizeChange}
              value={this.state.textSize}
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
              value={this.state.loc_X}
              onChange={(e: any) => {
                this.props.changeX(e.value);
                this.setState({ loc_X: e.value });
              }}
            />
            <TextBoxComponent
              placeholder="Set Y Coordinate"
              floatLabelType="Auto"
              width="10vh"
              value={this.state.loc_Y}
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

type TState = {
  textColor: string;
  fillColor: string;
  strokeColor: string;
  textSize: string;
  loc_X: string;
  loc_Y: string;
};

type TProps = {
  colorChange: Function;
  strokeChange: Function;
  textColorChange: Function;
  textSizeChange: Function;
  changeX: Function;
  changeY: Function;
  selectedItem: SelectorModel | null;
};
