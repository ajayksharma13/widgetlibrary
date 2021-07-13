import React from "react";
import { BaseComponent } from "../base";

import DiagramPanel from "./diagramPanel";
import { SymbolPalette } from "./symbolPallete";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  ToolbarComponent,
  ClickEventArgs,
} from "@syncfusion/ej2-react-navigations";
import {
  DiagramComponent,
  NodeModel,
  BasicShapes,
  TextModel,
  PathModel,
  ImageModel,
  DiagramTools,
  ConnectorModel,
  SymbolPaletteComponent,
} from "@syncfusion/ej2-react-diagrams";
import { UploaderComponent } from "@syncfusion/ej2-react-inputs";
import { ChangeEventArgs } from "@syncfusion/ej2-react-buttons";
import "./style.scss";

let node: NodeModel;
let diagramInstance: DiagramComponent;

/**
 * Start Up component
 */
class StartUp extends BaseComponent<TProps, TState> {
  /**
   * default props
   */
  static defaultProps: TProps = {};

  /**
   * default state
   */
  state: Readonly<TState> = {};

  // componentDidMount() {
  //   this.onInit();
  // }

  /**
   * @description init method of component
   */
  private async onInit() {}

  rendereComplete() {
    SetShape("Rectangle");
    diagramInstance.tool = DiagramTools.ContinuousDraw;
    diagramInstance.dataBind();
    //Click Event used to decide the drawing object.
    document.getElementById("appearance").onclick = (args: MouseEvent) => {
      console.log(args);
      let target: HTMLElement = args.target as HTMLElement;
      let selectedElement: HTMLCollection = document.getElementsByClassName(
        "e-selected-style"
      );

      if (target.className === "image-pattern-style e-selected-style") {
        switch (target.id) {
          case "shape1":
            SetShape("Rectangle");
            break;
          case "shape2":
            SetShape("Ellipse");
            break;
          case "shape3":
            SetShape("Hexagon");
            break;
          case "shape4":
            SetShape("Pentagon");
            break;
          case "shape5":
            SetShape("Polygon");
            break;
          case "straight":
            setdrawobject(null, { type: "Straight" });
            break;
          case "ortho":
            setdrawobject(null, { type: "Orthogonal" });
            break;
          case "cubic":
            setdrawobject(null, { type: "Bezier" });
            break;
          case "path":
            getPathShape();
            target.classList.add("e-selected-style");
            break;
          case "image":
            getImageNode();
            break;
          case "svg":
            getSVGNode();
            break;
          case "text":
            getTextNode();
            break;
          default:
            if (
              selectedElement.length &&
              target.id !== "" &&
              target.id !== "checked"
            ) {
              selectedElement[0].classList.remove("e-selected-style");
            }
        }
      }
    };
  }

  getDiagramInstance = (instance: DiagramComponent) => {
    diagramInstance = instance;
  };

  render() {
    return (
      <div className="control-pane">
        <div className="control-section">
          <ToolbarComponent
            id="toolbar_diagram"
            style={{ width: "100%", height: "10%", marginTop: "10px" }}
            clicked={(args: ClickEventArgs) => {
              if (args.item.text === "New") {
                diagramInstance.clear();
              } else if (args.item.text === "Load") {
                document
                  .getElementsByClassName("e-file-select-wrap")[0]
                  .querySelector("button")
                  .click();
              } else if (args.item.id === "palette-icon") {
                openPalette();
              } else {
                download(diagramInstance.saveDiagram());
              }
            }}
            items={[
              {
                id: "palette-icon",
                prefixIcon: "e-ddb-icons2 e-toggle-palette",
                align: "Right",
              },
              {
                text: "New",
                tooltipText: "New",
                prefixIcon: "e-diagram-icons e-diagram-new",
              },
              { type: "Separator" },
              {
                text: "Save",
                tooltipText: "Save",
                prefixIcon: "e-diagram-icons e-diagram-save",
              },
              { type: "Separator" },
              {
                text: "Load",
                tooltipText: "Load",
                prefixIcon: "e-diagram-icons e-diagram-open",
              },
            ]}
          />
          <UploaderComponent
            type="file"
            id="fileupload"
            asyncSettings={{
              saveUrl:
                "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
              removeUrl:
                "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove",
            }}
            success={onUploadSuccess}
          />
          <div className="content-wrapper">
            <SymbolPalette />
            <DiagramPanel getDiagramInstance={this.getDiagramInstance} />
          </div>
        </div>
      </div>
    );
  }
}

function onUploadSuccess(args: { [key: string]: Object }): void {
  let file1: { [key: string]: Object } = args.file as { [key: string]: Object };
  let file: Blob = file1.rawFile as Blob;
  let reader: FileReader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = loadDiagram;
}

//Load the diagraming object.
function loadDiagram(event: ProgressEvent): void {
  diagramInstance.loadDiagram((event.target as FileReader).result as string);
}

//save the diagram object in json data.
function download(data: string): void {
  if (window.navigator.msSaveBlob) {
    var blob = new Blob([data], { type: "data:text/json;charset=utf-8," });
    window.navigator.msSaveOrOpenBlob(blob, "Diagram.json");
  } else {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(data);
    var a = document.createElement("a");
    a.href = dataStr;
    a.download = "Diagram.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}

function openPalette(): void {
  let isMobile: boolean;
  let paletteSpace: HTMLElement = document.getElementById(
    "palette-space"
  ) as HTMLElement;
  isMobile = window.matchMedia("(max-width:550px)").matches;
  if (isMobile) {
    if (!paletteSpace.classList.contains("sb-mobile-palette-open")) {
      paletteSpace.classList.add("sb-mobile-palette-open");
    } else {
      paletteSpace.classList.remove("sb-mobile-palette-open");
    }
  }
}

function onChange(arg: ChangeEventArgs): void {
  diagramInstance.tool = arg.checked
    ? DiagramTools.ContinuousDraw
    : DiagramTools.DrawOnce;
}

//Enable drawing object.
function setdrawobject(
  node: NodeModel | null,
  connector: ConnectorModel | null
): void {
  let continuousDraw: any = document.getElementById("checked");
  if (!continuousDraw.checked) {
    diagramInstance.tool = DiagramTools.DrawOnce;
  }
  if (connector) {
    diagramInstance.drawingObject = connector as ConnectorModel;
  } else if (node) {
    diagramInstance.drawingObject = node as NodeModel;
  }
  diagramInstance.dataBind();
}
//Enable drawing Tool.
function enableTool(): void {
  let continuousDraw: any = document.getElementById("checked");
  if (!continuousDraw.checked) {
    diagramInstance.tool = DiagramTools.DrawOnce;
  }
  diagramInstance.dataBind();
}

//Set the Shape of the drawing Object.
function SetShape(obj: string): void {
  let drawingshape:
    | NodeModel
    | PathModel
    | ImageModel
    | TextModel
    | ConnectorModel
    | BasicShapes;
  drawingshape = { type: "Basic", shape: obj } as any;
  node = {
    shape: drawingshape as any,
  };
  diagramInstance.drawingObject = node;
  enableTool();
}
//Set TextNode Shape.
function getTextNode(): void {
  let drawingshape:
    | NodeModel
    | PathModel
    | ImageModel
    | TextModel
    | ConnectorModel;
  drawingshape = { type: "Text" };
  node = {
    shape: drawingshape,
  };
  setdrawobject(node, null);
}
//Set SVG Node
function getSVGNode(): void {
  // tslint:disable-next-line:max-line-length
  let drawingshape:
    | NodeModel
    | PathModel
    | ImageModel
    | TextModel
    | ConnectorModel;
  drawingshape = {
    type: "Native",
    content: getPath(),
  };
  node = {
    shape: drawingshape,
  };
  setdrawobject(node, null);
}

function getPath(): string {
  let str: string =
    '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="350.000000pt" ' +
    'height="229.000000pt" viewBox="0 0 350.000000 229.000000" ' +
    'preserveAspectRatio="xMidYMid meet"> <metadata>' +
    " Created by potrace 1.11, written by Peter Selinger 2001-2013" +
    ' </metadata> <g transform="translate(0.000000,229.000000) scale(0.100000,-0.100000)"' +
    ' fill="#de6ca9" stroke="none"><path d="M0 1145 l0 -1145 1750 0 1750 0 0 1145 0 1145' +
    " -1750 0 -1750 0 0 -1145z m1434 186 c19 -8 26 -18 26 -37 0 -24 -3 -26" +
    " -27 -19 -16 3 -58 9 -94 12 -63 5 -67 4 -88 -23 -23 -29 -21 -60 6 -81 8" +
    " -6 47 -19 86 -29 55 -13 80 -25 106 -51 31 -31 33 -37 29 -88 -8 -94 -69" +
    " -133 -193 -122 -90 7 -115 20 -115 58 0 26 3 30 18 24 91 -38 168 -41 204" +
    " -8 23 21 23 75 1 96 -10 8 -49 23 -88 33 -88 22 -135 63 -135 118 0 92 67 140" +
    " 181 131 31 -2 68 -9 83 -14z m854 -6 c38 -15 42 -21 42 -51 l0 -33 -47 25" +
    " c-41 22 -58 25 -115 22 -58 -3 -72 -8 -97 -32 -79 -75 -59 -259 32 -297 35" +
    " -15 106 -18 150 -6 26 7 27 10 27 67 l0 60 -50 0 c-47 0 -50 2 -50 25 0 25" +
    " 1 25 80 25 l81 0 -3 -97 -3 -98 -40 -20 c-22 -10 -65 -21 -95 -23 -153 -11" +
    " -242 74 -243 230 0 145 93 235 233 224 30 -2 74 -12 98 -21z m-638 -169 l67" +
    " -178 40 103 c22 57 53 139 69 182 28 75 29 77 62 77 19 0 32 -4 30 -9 -1 -5" +
    " -39 -104 -83 -220 l-80 -211 -37 0 c-35 0 -37 2 -56 53 -11 28 -48 124 -81 " +
    '211 -34 87 -61 163 -61 168 0 5 14 8 32 6 31 -3 32 -5 98 -182z" />' +
    "</g> </svg>";
  return str;
}
function getImageNode(): void {
  let drawingshape:
    | NodeModel
    | PathModel
    | ImageModel
    | TextModel
    | ConnectorModel;
  drawingshape = { type: "Image", source: "./src/diagram/employee.png" };
  node = {
    shape: drawingshape,
  };
  setdrawobject(node, null);
}
function getPathShape(): void {
  // tslint:disable-next-line:max-line-length
  let drawingshape:
    | NodeModel
    | PathModel
    | ImageModel
    | TextModel
    | ConnectorModel;
  drawingshape = {
    type: "Path",
    data:
      "M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z",
  };
  node = {
    shape: drawingshape,
  };
  setdrawobject(node, null);
}

/**
 * State
 */
type TState = {};

/**
 * State
 */
type TProps = {};

export { StartUp as default };
