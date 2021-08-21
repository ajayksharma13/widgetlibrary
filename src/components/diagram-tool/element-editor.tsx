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
let selectedParameter = "";

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
  };



  getTextColor = (): string => {
    const { selectedItem } = this.props;
    if (this.props.selectedItem?.properties.annotations[0].properties.style.properties.color != "black") {
      return rgba2hex(this.props.selectedItem?.properties.annotations[0].properties.style.properties.color);
    }
    return "#000000";
  };

  getStrokeColor = (): string => {
    const { selectedItem } = this.props;
    if (selectedItem?.properties.style.properties.strokeColor != '#757575') {
      return rgba2hex(selectedItem?.properties.style.properties.strokeColor);
    }
    return "#757575";
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
    const { selectedItem } = this.props;
    if (selectedItem?.properties?.style?.properties?.fill != 'white') {
      return rgba2hex(selectedItem?.properties?.style?.properties?.fill);
    }
    return "#ffffff";
  };

  getAngel = (): string => {
    const { selectedItem } = this.props;
    return selectedItem?.properties?.rotateAngle?.toString();
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



  bind = (id: string) => {
    const svgId = id.slice(0, -5);
    let element = Svgs.svgShapes.filter((item: any) => (item.id == svgId))[0];
    let obj = {
      nodeId: id,
      paramterId: this.state.selectedParameter,
      type: element.type,
      defaultValue: 0,
      jsonData: element.data,
    }
    this.props.dataBinder(obj);
  }

  renderDiagramProperty = () => {
    return (
      <div>
        <div className="display-none">
          <UploaderComponent id="backgroundUploader"
            asyncSettings={this.props.path} success={this.props.onUploadSuccess as any}
          />
        </div>
        <div className="flex-row">
          <span style={{ margin: "10px 10px 10px 7px" }} >Background</span>
          <span className="e-icons e-import" title="Click to upload diagram background"
            onClick={this.props.uploadHandler}
          ></span>
        </div>
        <div className="flex-row">
          <div className="flex-column">
            <span className="m-r-5">Width:</span>
            <TextBoxComponent placeholder="" floatLabelType="Never" width="100%"
              value={this.props.width}
              onChange={(e: any) => {
                this.props.setDiagramWidth(e.target.value);
              }}
            />
          </div>
          <div className="flex-column" >
            <span className="m-r-5">Height:</span>
            <TextBoxComponent placeholder="" floatLabelType="Never" width="100%"
              value={this.props.height}
              onChange={(e: any) => { this.props.setDiagramHeight(e.target.value); }}
            />
          </div>
        </div>
      </div>
    );
  }


  renderParameter = () => {
    const { selectedItem, dataBinding } = this.props;
    const id = this.props.selectedItem.id.split("-")[0];
    const uid = selectedItem.id.slice(0, -5);
    dataBinding.map((item: any) => {
      if (item.nodeId == selectedItem.id) {

      }
      else {

      }
    });
    return (<div className="m-10">
      {
        (id != "diagram") &&
        <div><p>Select Parameter</p>
          <DropDownListComponent id="parameter" width="100%" dataSource={parameterData} popupHeight="200px" popupWidth="100px" placeholder="Select Parameter" value={this.state.selectedParameter}
            change={(e: any) => {
              this.setState({ selectedParameter: e.value });
              this.bind(this.props.selectedItem.id);
            }} />
          <div className="m-t-20" />
          {/* <button className="m-t-10" onClick={() => this.bind(this.props.selectedItem.id)}>Bind</button> */}
        </div>
      }
    </div>
    );

  }

  renderItem = () => {
    const nodeType = this.props.selectedItem?.properties?.shape?.type;
    // Native
    const { selectedItem } = this.props;
    if (selectedItem.id != "Diagram") {
      return (<div>
        {(nodeType == "Flow" || nodeType == "Basic") && <div className="flex-row">
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
        </div>}
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
        <div className="flex-row">
          <div className="flex-column">
            <TextBoxComponent placeholder="Set X Coordinate" floatLabelType="Auto" width="60%" value={this.getLocX()} onChange={(e: any) => { this.props.changeX(e.value); }} />
          </div>
          <div className="flex-column">
            <TextBoxComponent placeholder="Set Y Coordinate" floatLabelType="Auto" width="60%" value={this.getLocY()} onChange={(e: any) => { this.props.changeY(e.value); }} />
          </div>
        </div>
        <div className="flex-row" >
          <div className="flex-column">
            <TextBoxComponent id="angle-input" placeholder="Rotate angle" floatLabelType="Auto" width="80%" value={this.getAngel()} onChange={(e: any) => { this.props.changeAngle(e.value); }} />
          </div>
          <div className="flex-column">
            <div className="flex-row" style={{ marginLeft: "-0.7em" }}>
              <span
                title="Rotate 90 degree clockwise"
                onClick={() => {
                  let angle = parseInt(this.getAngel()) + 90;
                  this.props.changeAngle(angle.toString());
                  //@ts-ignore
                  document.getElementById("angle-input").value = this.getAngel();
                }}
                className="e-icons e-redo-icon rotation"></span>
              <span
                title="Rotate 90 degree anti-clockwise"
                onClick={() => {
                  let angle = parseInt(this.getAngel()) - 90;
                  this.props.changeAngle(angle.toString());
                  //@ts-ignore
                  document.getElementById("angle-input").value = this.getAngel();
                }}
                className="e-icons e-undo-icon rotation"></span>
            </div>
          </div>
        </div>
        <div className="flex-row" >

          {this.props.selectedItem &&
            <>
              {this.renderParameter()}
            </>
          }
        </div>

      </div>)
    }
    else {
      return this.renderDiagramProperty();

    }

  }

  render() {
    // this.props.selectedItem && this.props.temp(this.props.selectedItem);
    let { selectedItem } = this.props;
    let id = (selectedItem?.id != "Diagram") ? selectedItem?.id?.slice(0, -5) : selectedItem?.id;

    return (
      <div className="element-editor">
        <p className="editor-heading" >{selectedItem ? id : "Diagram"}</p>
        {selectedItem ? this.renderItem() : this.renderDiagramProperty()}
      </div>
    );
  }
}

type TState = {
  selectedParameter: string;
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
  dataBinding: any;
  path: object;
  onUploadSuccess: Function;
  uploadHandler: () => void;
  setDiagrambg: Function;
  setDiagramHeight: Function;
  setDiagramWidth: Function;
  height: string;
  width: string;
};
