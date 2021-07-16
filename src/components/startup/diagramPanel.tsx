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
import { UploaderComponent } from "@syncfusion/ej2-react-inputs";
import { DialogComponent } from "@syncfusion/ej2-react-popups";

export default class DiagramPanel extends BaseComponent<TProps, TState> {
  state: TState = {
    diagramBg:
      "https://www.pngmagic.com/product_images/solid-color-background-pastel.jpg",
    width: "1500",
    height: "1000",
    uploadError: false,
  };
  public ColorChange(args: string) {
    if (diagramInstance.selectedItems.nodes != null) {
      if (diagramInstance.selectedItems.nodes?.length > 0) {
        //Get the selected node from diagram’s selected items collection.
        let node: NodeModel = diagramInstance.selectedItems.nodes[0];
        node.style ? (node.style.fill = args) : {};
      }
    } else if (diagramInstance.selectedItems.connectors?.length > 0) {
      // let connector: ConnectorModel =
      //   diagramInstance.selectedItems.connectors[0];
      // connector.style?.fill = args;
      let connector: ConnectorModel =
        diagramInstance.selectedItems.connectors[0];
      connector.style?.fill = "red";
      console.log(connector);
    }
    diagramInstance.dataBind();
  }

  public StrokeChange(args: string) {
    if (diagramInstance.selectedItems.nodes?.length > 0) {
      //Get the selected node from diagram’s selected items collection.
      let node: NodeModel = diagramInstance.selectedItems.nodes[0];
      node.style ? (node.style.strokeColor = args) : {};
    } else if (diagramInstance.selectedItems.connectors?.length > 0) {
      let connector: ConnectorModel =
        diagramInstance.selectedItems.connectors[0];
      connector.style.strokeColor = args;
      connector.style?.fill = "red";
      console.log(connector);
    }
    diagramInstance.dataBind();
  }

  public textColorChange(args: string) {
    if (diagramInstance.selectedItems.nodes?.length > 0) {
      //Get the selected node from diagram’s selected items collection.
      let node: NodeModel = diagramInstance.selectedItems.nodes[0];
      node.annotations && node.annotations[0].style
        ? (node.annotations[0].style.color = args)
        : {};
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

  setBg = async (reader: FileReader) => {
    sleep(100).then((r) => {
      // console.log(reader.result);
      const img = new Image();
      img.src = reader.result as string;
      var imgWidth = img.naturalWidth;
      var imgHeight = img.naturalHeight;
      if (imgWidth > 700 && imgHeight > 500) {
        this.setState({
          diagramBg: reader.result as string,
          width: imgWidth.toString(),
          height: imgHeight.toString(),
        });
        console.log(imgWidth, imgHeight);
      } else {
        console.log(imgWidth, imgHeight);
        this.setState({ uploadError: true });
      }
    });
  };

  onUploadSuccess = async (args: { [key: string]: Object }) => {
    let file1: { [key: string]: Object } = args.file as {
      [key: string]: Object;
    };
    let file: Blob = file1.rawFile as Blob;
    let reader: FileReader = new FileReader();
    await reader.readAsDataURL(file);
    // console.log(reader);
    this.setBg(reader);
    // reader.onloadend = loadDiagram;
  };

  public path: object = {
    removeUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Remove",
    saveUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Save",
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        {this.state.uploadError ? (
          <DialogComponent
            width="250px"
            height="150px"
            showCloseIcon={true}
            header="Upload Error"
            // closeOnEscape={true}
            onClick={() => this.setState({ uploadError: false })}
          >
            Image Dimensions should be atleast 700 by 500 px!
          </DialogComponent>
        ) : (
          <div />
        )}
        <div
          className="col-lg-8"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "84vh",
          }}
        >
          <DiagramComponent
            id="diagram"
            ref={(diagram) => {
              diagramInstance = diagram as DiagramComponent;
              this.props.getDiagramInstance(diagramInstance);
            }}
            scrollSettings={{ canAutoScroll: true, currentZoom: 1 }}
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

          <UploaderComponent
            style={{ height: "3vh" }}
            asyncSettings={this.path}
            success={this.onUploadSuccess}
          />
        </div>
        <div className="col-lg-4 row property-panel-content" id="appearance">
          <ElementEditor
            strokeChange={this.StrokeChange}
            colorChange={this.ColorChange}
            textColorChange={this.textColorChange}
          />
        </div>
      </div>
    );
  }
}

type TState = {
  diagramBg: string;
  width: string;
  height: string;
  uploadError: boolean;
};

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
