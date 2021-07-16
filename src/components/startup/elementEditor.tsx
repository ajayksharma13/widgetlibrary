import React from "react";
import { ChangeEventHandler } from "react";
import { BaseComponent } from "../base";
import "./style.scss";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

export default class ElementEditor extends BaseComponent<TProps, TState> {
  state: TState = {
    textColor: "#000000",
    strokeColor: "#000000",
    fillColor: "#ffffff",
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

  render() {
    return (
      <div className="row">
        <div className="row-header">
          <h6 style={{ textAlign: "center" }}>Fill-Color</h6>
        </div>
        <div style={{ paddingTop: "5px", alignSelf: "center" }}>
          <ColorPickerComponent
            id="color-picker-1"
            value={this.state.fillColor}
            change={this.onFillColorChange}
          />
        </div>
        <div className="row-header">
          <h6 style={{ textAlign: "center" }}>Stroke-Color</h6>
        </div>
        <div style={{ paddingTop: "5px", alignSelf: "center" }}>
          <ColorPickerComponent
            id="color-picker-2"
            value={this.state.strokeColor}
            change={this.onStrokeColorChange}
          />
        </div>
        <div className="row-header">
          <h6 style={{ textAlign: "center" }}>Text-Color</h6>
        </div>
        <div style={{ paddingTop: "5px", alignSelf: "center" }}>
          <ColorPickerComponent
            id="color-picker-3"
            value={this.state.textColor}
            change={this.onTextColorChange}
          />
        </div>
      </div>
    );
  }
}

type TState = {
  textColor: string;
  fillColor: string;
  strokeColor: string;
};

type TProps = {
  colorChange: Function;
  strokeChange: Function;
  textColorChange: Function;
};
