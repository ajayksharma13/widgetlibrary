import React from "react";
import { BaseComponent } from "../base";

import {
  DiagramComponent,
  NodeModel,
  BasicShape,
  Inject,
  SnapSettingsModel,
  SnapConstraints,
  PointPortModel,
  PortConstraints,
  PortVisibility,
  PointModel,
  UndoRedo,
  Snapping,
  GridlinesModel,
  ConnectorModel,
} from "@syncfusion/ej2-react-diagrams";

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

let interval: number[] = [
  1,
  9,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
];

let gridlines: GridlinesModel = {
  lineColor: "#e0e0e0",
  lineIntervals: interval,
};

let diagramInstance: DiagramComponent;
let snapSettings: SnapSettingsModel = {
  snapObjectDistance: 5,
  constraints:
    SnapConstraints.SnapToObject |
    SnapConstraints.SnapToLines |
    SnapConstraints.ShowLines,
  horizontalGridlines: gridlines,
  verticalGridlines: gridlines,
};

import ElementEditor from "./elementEditor";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default class DiagramPanel extends BaseComponent<TProps, TState> {
  state: TState = {
    diagramBg:
      "https://www.pngmagic.com/product_images/solid-color-background-pastel.jpg",
    url:
      "https://www.pngmagic.com/product_images/solid-color-background-pastel.jpg",
    width: "1200",
    height: "600",
  };
  public ColorChange(args: string) {
    if (diagramInstance.selectedItems.nodes?.length > 0) {
      //Get the selected node from diagram’s selected items collection.
      let node: NodeModel = diagramInstance.selectedItems.nodes[0];
      node.style.fill = args;
    }
    diagramInstance.dataBind();
  }

  public StrokeChange(args: string) {
    if (diagramInstance.selectedItems.nodes?.length > 0) {
      //Get the selected node from diagram’s selected items collection.
      let node: NodeModel = diagramInstance.selectedItems.nodes[0];
      node.style.strokeColor = args;
    } else if (diagramInstance.selectedItems.connectors?.length > 0) {
      let connector: ConnectorModel =
        diagramInstance.selectedItems.connectors[0];
      connector.style.strokeColor = args;
    }
    diagramInstance.dataBind();
  }

  public textColorChange(args: string) {
    if (diagramInstance.selectedItems.nodes?.length > 0) {
      //Get the selected node from diagram’s selected items collection.
      let node: NodeModel = diagramInstance.selectedItems.nodes[0];
      node.annotations[0].style.color = args;
    } else if (diagramInstance.selectedItems.connectors?.length > 0) {
      let connector: ConnectorModel =
        diagramInstance.selectedItems.connectors[0];
      connector.annotations[0].style?.color = args;
    }
    diagramInstance.dataBind();
    // let node: NodeModel = diagramInstance.selectedItems.nodes[0];
    // node.annotations[0].style.color = args;
    // diagramInstance.dataBind();
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="col-lg-10"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <DiagramComponent
            id="diagram"
            ref={(diagram) => {
              diagramInstance = diagram as DiagramComponent;
              this.props.getDiagramInstance(diagramInstance);
            }}
            pageSettings={{
              background: {
                source: this.state.diagramBg,
              },
              width: this.state.diagramBg.length
                ? parseInt(this.state.width)
                : 0,
              height: this.state.diagramBg.length
                ? parseInt(this.state.height)
                : 0,
            }}
            width={"100%"}
            height={"540px"}
            snapSettings={snapSettings}
            rulerSettings={{ showRulers: true }}
            //Sets the default values of a node
            getNodeDefaults={(node: NodeModel) => {
              let obj: NodeModel = node;
              let basicShape: BasicShape = node.shape as BasicShape;
              if (
                basicShape.shape === "Rectangle" ||
                basicShape.shape === "Ellipse"
              ) {
                obj.ports = getPorts(node);
              } else if (basicShape.shape === "Hexagon") {
                obj.ports = getHexagonPorts(node);
              } else if (basicShape.shape === "Pentagon") {
                obj.ports = getPentagonPorts(node);
              } else if (basicShape.type === "Path") {
                obj.ports = getPathPorts(node);
              }
            }}
          />
          <Inject services={[UndoRedo, Snapping]} />
          <div className="inputURL">
            <TextBoxComponent
              placeholder="Enter Diagram Background URL"
              floatLabelType="Auto"
              width="80%"
              value={this.state.url}
              onChange={(e: any) => {
                this.setState({ url: e.target.properties.value });
              }}
            />
            <ButtonComponent
              onClick={() => {
                this.setState({ diagramBg: this.state.url });
                // console.log(this.state.url);
              }}
            >
              Change
            </ButtonComponent>
            <TextBoxComponent
              placeholder="Enter Diagram Background Width"
              floatLabelType="Auto"
              value={this.state.width}
              width="50%"
              onChange={(e: any) => {
                this.setState({ width: e.target.properties.value });
              }}
            />
            <TextBoxComponent
              placeholder="Enter Diagram Background Height"
              floatLabelType="Auto"
              width="50%"
              value={this.state.height}
              onChange={(e: any) => {
                this.setState({ height: e.target.properties.value });
              }}
            />
          </div>
        </div>
        <div
          className="col-lg-2 row property-panel-content"
          id="appearance"
          style={{
            alignSelf: "center",
          }}
        >
          <ElementEditor
            strokeChage={this.StrokeChange}
            colorChange={this.ColorChange}
            textColorChange={this.textColorChange}
          />
        </div>
      </div>
    );
  }
}

type TState = { diagramBg: string; url: string; width: string; height: string };

type TProps = {
  getDiagramInstance: Function;
};

function getPorts(obj: NodeModel): PointPortModel[] {
  let ports: PointPortModel[] = [
    createPort("port1", { x: 0, y: 0.5 }),
    createPort("port2", { x: 0.5, y: 1 }),
    createPort("port3", { x: 1, y: 0.5 }),
    createPort("port4", { x: 0.5, y: 0 }),
  ];
  return ports;
}
function getPathPorts(obj: NodeModel): PointPortModel[] {
  let ports: PointPortModel[] = [
    createPort("port1", { x: 0.5, y: 0 }),
    createPort("port2", { x: 0, y: 0.39 }),
    createPort("port3", { x: 1, y: 0.39 }),
    createPort("port4", { x: 0.2, y: 1 }),
    createPort("port5", { x: 0.8, y: 1 }),
  ];
  return ports;
}
function getHexagonPorts(obj: NodeModel): PointPortModel[] {
  let ports: PointPortModel[] = [
    createPort("port1", { x: 0, y: 0.5 }),
    createPort("port2", { x: 0.5, y: 0 }),
    createPort("port3", { x: 0.3, y: 0 }),
    createPort("port4", { x: 0.7, y: 0 }),
    createPort("port5", { x: 1, y: 0.5 }),
    createPort("port6", { x: 0.5, y: 1 }),
    createPort("port7", { x: 0.3, y: 1 }),
    createPort("port8", { x: 0.7, y: 1 }),
  ];
  return ports;
}
function getPentagonPorts(obj: NodeModel): PointPortModel[] {
  let ports: PointPortModel[] = [
    createPort("port1", { x: 0.5, y: 0 }),
    createPort("port2", { x: 0, y: 0.4 }),
    createPort("port3", { x: 1, y: 0.4 }),
    createPort("port4", { x: 0.2, y: 1 }),
    createPort("port5", { x: 0.85, y: 1 }),
  ];
  return ports;
}
function createPort(id: string, offset: PointModel): PointPortModel {
  let port: PointPortModel = {
    id: id,
    shape: "Square",
    offset: offset,
    constraints: PortConstraints.Draw,
    visibility: PortVisibility.Hover,
  };
  return port;
}
