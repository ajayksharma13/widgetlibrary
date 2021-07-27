import React from "react";
import { BaseComponent } from "../base";

import {
  setElementValue,
  TextBoxComponent,
} from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

import {
  DiagramComponent,
  NodeModel,
  BasicShape,
  Inject,
  SnapSettingsModel,
  SnapConstraints,
  PointPortModel,
  PortConstraints,
  Keys,
  KeyModifiers,
  CommandManagerModel,
  PortVisibility,
  PointModel,
  UndoRedo,
  Snapping,
  GridlinesModel,
  ConnectorModel,
  DiagramContextMenu,
  DataBinding,
  PrintAndExport,
  SelectorModel,
} from "@syncfusion/ej2-react-diagrams";

import ElementEditor from "./elementEditor";
import { UploaderComponent } from "@syncfusion/ej2-react-inputs";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import "./style.scss";
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

const ANIMATION_CSS_ON = `
path[id^="Link1"] {
  animation: dash 0.5s linear;
  animation-iteration-count: infinite;
}
  #level-1{
    opacity:0;
  }
@keyframes dash {
  to {
    stroke-dashoffset: -16;
  }
}
`;

const ANIMATION_CSS_OFF = `
path[id^="Link1"] {
  animation: dash 0.5s linear;
  animation-iteration-count: 0;
}

@keyframes dash {
  to {
    stroke-dashoffset: -16;
  }
}
`;

export default class DiagramPanel extends BaseComponent<TProps, TState> {
  /**
   * uploader ref
   */
  uploaderRef = React.createRef<any>();

  state: TState = {
    diagramBg:
      "https://www.solidbackgrounds.com/images/950x350/950x350-white-solid-color-background.jpg",
    showDialog: false,
    toggleAnimation: false,
    selectedItem: null,
  };

  public changeX(args: string) {
    // const { getDiagramInstance } = this.props;

    if (diagramInstance.selectedItems.nodes!.length > 0) {
      //Get the selected node from diagram’s selected items collection.
      let node: NodeModel = diagramInstance.selectedItems.nodes?.[0]!;
      node.offsetX = parseInt(args);
    } else if (diagramInstance.selectedItems.connectors!.length > 0) {
      let connector: ConnectorModel =
        diagramInstance.selectedItems.connectors?.[0]!;
      connector.sourcePoint!.x = parseInt(args);
    }
    diagramInstance.dataBind();
  }

  public changeY(args: string) {
    if (diagramInstance.selectedItems.nodes!.length > 0) {
      //Get the selected node from diagram’s selected items collection.
      let node: NodeModel = diagramInstance.selectedItems.nodes?.[0]!;
      node.offsetY = parseInt(args);
    } else if (diagramInstance.selectedItems.connectors!.length > 0) {
      let connector: ConnectorModel =
        diagramInstance.selectedItems.connectors?.[0]!;
      connector.sourcePoint!.y = parseInt(args);
    }
    diagramInstance.dataBind();
  }
  public ColorChange(args: string) {
    if (diagramInstance.selectedItems.nodes != null) {
      if (diagramInstance.selectedItems.nodes?.length > 0) {
        //Get the selected node from diagram’s selected items collection.
        let node: NodeModel = diagramInstance.selectedItems.nodes[0];
        node.style ? (node.style.fill = args) : {};
      }
    } else if (diagramInstance.selectedItems.connectors!.length > 0) {
      let connector: ConnectorModel =
        diagramInstance.selectedItems.connectors?.[0]!;
      connector.style!.fill = "red";
    }
    diagramInstance.dataBind();
  }

  public StrokeChange(args: string) {
    if (diagramInstance.selectedItems.nodes!.length > 0) {
      //Get the selected node from diagram’s selected items collection.
      let node: NodeModel = diagramInstance.selectedItems.nodes?.[0]!;
      node.style ? (node.style.strokeColor = args) : {};
    } else if (diagramInstance.selectedItems.connectors!.length > 0) {
      let connector: ConnectorModel =
        diagramInstance.selectedItems.connectors?.[0]!;
      connector.style!.strokeColor = args;
    }
    diagramInstance.dataBind();
  }

  public textColorChange(args: string) {
    if (diagramInstance.selectedItems.nodes!.length > 0) {
      //Get the selected node from diagram’s selected items collection.
      let node: NodeModel = diagramInstance.selectedItems.nodes?.[0]!;
      node.annotations && node.annotations[0].style
        ? (node.annotations[0].style.color = args)
        : {};
    } else if (diagramInstance.selectedItems.connectors!.length > 0) {
      let connector: ConnectorModel | any =
        diagramInstance.selectedItems.connectors?.[0]!;
      connector.annotations[0].style!.color = args;
    }
    diagramInstance.dataBind();
  }

  public textSizeChange(args: string) {
    if (diagramInstance.selectedItems.nodes!.length > 0) {
      //Get the selected node from diagram’s selected items collection.
      let node: NodeModel = diagramInstance.selectedItems.nodes?.[0]!;
      node.annotations && node.annotations[0].style
        ? (node.annotations[0].style.fontSize = parseInt(args))
        : {};
    } else if (diagramInstance.selectedItems.connectors!.length > 0) {
      let connector: ConnectorModel | any =
        diagramInstance.selectedItems.connectors?.[0]!;
      connector.annotations[0].style!.fontSize = parseInt(args);
    }
    diagramInstance.dataBind();
  }

  setBg = async (reader: FileReader) => {
    sleep(100).then((r) => {
      const img = new Image();
      img.src = reader.result as string;
      //Fires immediately after the browser loads the object.
      img.onload = (e) => {
        //@ts-ignore
        let imgWidth = e.target.width;
        //@ts-ignore
        let imgHeight = e.target.height;
        if (Number(imgWidth) > 700 && Number(imgHeight) > 500) {
          this.setState({
            diagramBg: reader.result as string,
            width: imgWidth,
            height: imgHeight,
          });
        } else {
          console.log(imgWidth, imgHeight);
          this.setState({ showDialog: true });
        }
      }
    });
  };

  onUploadSuccess = (args: { [key: string]: Object }) => {
    let file1: { [key: string]: Object } = args.file as {
      [key: string]: Object;
    };
    let file: Blob = file1.rawFile as Blob;
    let reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    this.setBg(reader);
  };

  public path: object = {
    // removeUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Remove",
    saveUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Save",
  };

  public getCommandManagerSettings(): CommandManagerModel {
    let commandManager: CommandManagerModel = {
      commands: [
        {
          name: "customGroup",
          canExecute: (): boolean => {
            if (
              diagramInstance.selectedItems.nodes!.length > 0 ||
              diagramInstance.selectedItems.connectors!.length > 0
            ) {
              return true;
            }
            return false;
          },
          execute: (): void => {
            diagramInstance.group();
          },
          gesture: { key: Keys.G, keyModifiers: KeyModifiers.Control },
        },
        {
          name: "customUnGroup",
          canExecute: (): boolean => {
            if (diagramInstance.selectedItems.nodes?.[0].children) {
              return true;
            }
            return false;
          },
          execute: (): void => {
            diagramInstance.unGroup();
          },
          gesture: { key: Keys.U, keyModifiers: KeyModifiers.Control },
        },
      ],
    };
    return commandManager;
  }

  uploadHandler = () => {
    document.getElementById("backgroundUploader")?.click();
    //  todo:implement with react ref
    // const node = this.uploaderRef.current;
    // console.log(node);
  }
  setDiagramWidth = (width: string) => {
    this.setState({ width });
  }
  setDiagramHeight = (height: string) => {
    this.setState({ height });
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          borderTop: "1px solid #5BD9D4",
        }}
      >

        <DialogComponent
          isModal={true}
          width="250"
          height="150px"
          visible={this.state.showDialog}
          close={() => {
            this.setState({ showDialog: false });
          }}
          overlayClick={() => {
            this.setState({ showDialog: false });
          }}
          header="Image Dimensions are too Small"
        >
          Image Dimensions should be atleast 700 by 500 px!
        </DialogComponent>
        <div
          className="col-lg-10"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "79vh",
          }}
        >

          <style>
            {this.props.toggleAnimation ? ANIMATION_CSS_ON : ANIMATION_CSS_OFF}

          </style>
          <DiagramComponent
            id="diagram"
            ref={(diagram) => {
              diagramInstance = diagram as DiagramComponent;
              this.props.getDiagramInstance(diagramInstance);
            }}
            click={(args: any) => {
              this.setState({ selectedItem: args.element });
            }}
            contextMenuSettings={{ show: true }}
            commandManager={this.getCommandManagerSettings()}
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
          >
            <Inject
              services={[
                UndoRedo,
                Snapping,
                DiagramContextMenu,
                DataBinding,
                PrintAndExport,
              ]}
            />
          </DiagramComponent>
        </div>
        <div
          className="col-lg-3 property-panel-content"
          id="appearance"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "5px",
            borderLeft: "1px solid #5BD9D4",
            background: "#FBFBFB",
          }}
        >
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <ButtonComponent
              id="toggle"
              onClick={() => {
                this.setState({ toggleAnimation: !this.state.toggleAnimation });
              }}
              style={{ width: "40%", height: "3vh", margin: "10px" }}
            >
              Toggle Animation
            </ButtonComponent>
          </div> */}
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",

            }}
          >
            <ButtonComponent
              id="group"
              onClick={() => {
                diagramInstance.selectedItems.nodes?.length ||
                  diagramInstance.selectedItems.connectors?.length
                  ? diagramInstance.group()
                  : {};
              }}
              style={{ width: "40%", height: "3vh", margin: "10px" }}
            >
              Group
            </ButtonComponent>
            <ButtonComponent
              id="ungroup"
              onClick={() => {
                diagramInstance.selectedItems.nodes?.length ||
                  diagramInstance.selectedItems.connectors?.length
                  ? diagramInstance.unGroup()
                  : {};
              }}
              style={{ width: "40%", height: "3vh", margin: "10px" }}
            >
              Ungroup
            </ButtonComponent>
          </div> */}
          <ElementEditor
            strokeChange={this.StrokeChange}
            colorChange={this.ColorChange}
            textColorChange={this.textColorChange}
            textSizeChange={this.textSizeChange}
            changeX={this.changeX}
            changeY={this.changeY}
            selectedItem={this.state.selectedItem}
            path={this.path}
            uploadSuccess={this.onUploadSuccess}
            height={this.state.height}
            width={this.state.width}
            diagramHeight={this.setDiagramHeight}
            diagramWidth={this.setDiagramWidth}
            uploadHandler={this.uploadHandler}
          />
        </div>
      </div>
    );
  }
}

type TState = {
  diagramBg: string;
  showDialog: boolean;
  toggleAnimation: boolean;
  selectedItem: SelectorModel | null;
};

type TProps = {
  getDiagramInstance: Function;
  toggleAnimation: boolean;
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
