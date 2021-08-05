import React from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { TextBoxComponent, UploaderComponent } from "@syncfusion/ej2-react-inputs";
import {
  NodeModel,
  ConnectorModel,
  SelectorModel,
} from "@syncfusion/ej2-react-diagrams";
import { BaseComponent } from "../base";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import Svgs from "./pipe.json";
import "./style.scss";

const rgba2hex = function (color: string) {
  const rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
  const hex = `#${((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1)}`;
  return hex;
}

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

const parameterData: string[] = [
  "Fill Percent",
  "Progress",
  "switch",
];
const attributeData: string[] = [
  "width",
  "height",
  "x",
  "y",
];


export default class ElementEditor extends BaseComponent<TProps, TState> {
  state: TState = {
    selectedParameter: "",
    selectedAttribute: "",
  };

  getTextColor = (): string => {
    return this.props.selectedItem
      ? this.props.selectedItem.propName
        ? !this.props.selectedItem?.properties.children
          ? rgba2hex(this.props.selectedItem?.properties.annotations[0].properties.style
            .properties.color)
          : this.props.selectedItem?.properties.annotations.length > 0
            ? rgba2hex(this.props.selectedItem?.properties.annotations[0].properties.style
              .properties.color) : "#000000"
        : "#000000" : "#000000";
  };

  getStrokeColor = (): string => {
    return this.props.selectedItem
      ? this.props.selectedItem.propName
        ? rgba2hex(this.props.selectedItem?.properties.style.properties.strokeColor)
        : "#000000"
      : "#000000";
  };

  getTextSize = (): string => {
    return this.props.selectedItem
      ? this.props.selectedItem.propName
        ? !this.props.selectedItem?.properties.children
          ? this.props.selectedItem?.properties.annotations[0].properties.style
            .properties.fontSize.toString()
          : this.props.selectedItem?.properties.annotations.length > 0
            ? this.props.selectedItem?.properties.annotations[0].properties.style
              .properties.fontSize.toString() : "12"
        : "12" : "12";
  };

  getFillColor = (): string => {
    return this.props.selectedItem
      ? this.props.selectedItem.propName
        ? rgba2hex(this.props.selectedItem?.properties.style.properties.fill)
        : "#ffffff"
      : "#ffffff";
  };

  getLocX = (): string => {
    return this.props.selectedItem
      ? this.props.selectedItem.propName
        ? this.props.selectedItem.propName === "nodes"
          ? this.props.selectedItem.properties.offsetX.toString()
          : this.props.selectedItem.properties.sourcePoint.properties.x.toString()
        : "0"
      : "0";
  };

  getLocY = (): string => {
    return this.props.selectedItem
      ? this.props.selectedItem.propName
        ? this.props.selectedItem.propName === "nodes"
          ? this.props.selectedItem.properties.offsetY.toString()
          : this.props.selectedItem.properties.sourcePoint.properties.y.toString()
        : "0"
      : "0";
  };

  getAngel = (): string => {
    return this.props.selectedItem
      ? this.props.selectedItem.propName
        ? this.props.selectedItem.propName === "nodes"
          ? this.props.selectedItem.properties.rotateAngle.toString()
          : this.props.selectedItem.properties.rotateAngle.toString()
        : "0"
      : "0";
  };

  bind = (id: string) => {
    const svgId = id.split("-")[0];
    let element = Svgs.svgShapes.filter((item: any) => (item.id == svgId + "-"))[0];

    let obj = {
      nodeid: id,
      paramterId: this.state.selectedParameter,
      attribute: this.state.selectedAttribute,
      defaultValue: 0,
      jsonData: element.data,
    }
    this.props.dataBinder(obj);
  }

  renderParameter = () => {
    const id = this.props.selectedItem.id.split("-")[0];
    return (<div>
      <p className="m-b-20">Selected Element:- {id}</p>
      {
        (id != "diagram") &&
        <div><p>Select Parameter</p>
          <DropDownListComponent id="parameter" width="100%" dataSource={parameterData} popupHeight="200px" popupWidth="100px" placeholder="Select Parameter" value={this.state.selectedParameter} change={(e: any) => { this.setState({ selectedParameter: e.value }) }} />
          <div className="m-t-20" />
          <p>Select Attribute</p>
          <DropDownListComponent id="attribute" width="100%" dataSource={attributeData} popupHeight="200px" popupWidth="100px" placeholder="Select Attribute" value={this.state.selectedAttribute} change={(e: any) => { this.setState({ selectedAttribute: e.value }) }} />
          <button className="m-t-10" onClick={() => this.bind(this.props.selectedItem.id)}>Bind</button>
        </div>
      }
    </div>
    );

  }


  render() {
    // console.log(this.props.selectedItem);
    // this.props.selectedItem && this.props.temp(this.props.selectedItem);
    return (
      <div className="element-editor">

        <h3>Properties</h3>
        <div className="flex-row">
          <div className="flex-column">
            <p>Fill-Color</p>
            <div>
              <ColorPickerComponent cssClass="colour-picker" id="color-picker-1" value={this.getFillColor()} noColor={true} change={(e: any) => { this.props.colorChange(e.currentValue.rgba); }} />
            </div>
          </div>
          <div className="flex-column">
            <p>Stroke-Color</p>

            <div>
              <ColorPickerComponent id="color-picker-2" cssClass="colour-picker" value={this.getStrokeColor()} noColor={true} change={(e: any) => { this.props.strokeChange(e.currentValue.rgba); }} />
            </div>
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-column">
            <p>Text-Color</p>

            <div>
              <ColorPickerComponent id="color-picker-3" cssClass="colour-picker" value={this.getTextColor()} noColor={true} change={(e: any) => { this.props.textColorChange(e.currentValue.rgba); }} />
            </div>
          </div>
          <div className="flex-column">
            <p style={{ paddingBottom: "1px" }}>Text-Size</p>

            <div>
              <DropDownListComponent id="ddlelement" width="60%" dataSource={sizeData} popupHeight="200px" popupWidth="100px" placeholder="Select Font Size" value={this.getTextSize()} change={(e: any) => { this.props.textSizeChange(e.value); }} />
            </div>
          </div>
        </div>
        {/* <div className="flex-row">
                  <div className="flex-column">
                    <TextBoxComponent placeholder="Set X Coordinate" floatLabelType="Auto" width="120px" value={this.getLocX()} onChange={(e: any) => { this.props.changeX(e.value); }} />
                  </div>
                  <div className="flex-column">
                    <TextBoxComponent placeholder="Set Y Coordinate" floatLabelType="Auto" width="120px" value={this.getLocY()} onChange={(e: any) => { this.props.changeY(e.value); }} />
                  </div>
                </div> */}

        {/* <div className="flex-row" >

          <div className="flex-column">
            <TextBoxComponent placeholder="Rotation Angel" floatLabelType="Auto" width="120px" value={this.getAngel()} onChange={(e: any) => { this.props.changeAngle(e.value); }} />
          </div>
        </div> */}
        <div className="flex-row" >
          {this.props.selectedItem &&
            <div className="flex-column">
              {this.renderParameter()}
            </div>
          }
        </div>
      </div>
    );
  }
}

type TState = {
  selectedParameter: string;
  selectedAttribute: string;
};

type TProps = {
  colorChange: Function;
  strokeChange: Function;
  textColorChange: Function;
  textSizeChange: Function;
  changeX: Function;
  changeY: Function;
  selectedItem: SelectorModel | any;
  changeAngle: Function;
  temp: Function;
  dataBinder: Function;
};
