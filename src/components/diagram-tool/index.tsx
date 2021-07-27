import React from 'react';
import { BaseComponent } from '../base';
import DiagramPanel from "./diagramPanel";
import { SymbolPalette } from "./symbolPallete";
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
  IExportOptions,
} from "@syncfusion/ej2-react-diagrams";
import { TextBoxComponent, UploaderComponent } from "@syncfusion/ej2-react-inputs";
import "./style.scss";
import "../../app.scss";
import Items from "./menu-items.json";
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider';
const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

let node: NodeModel;
let diagramInstance: DiagramComponent;


/**
 * Diagram tool component
 */
class DiagramTool extends BaseComponent<TProps, TState> {

  /**
   * default props
   */
  static defaultProps: TProps = {};

  /**
   * default state
   */
  state: Readonly<TState> = {
    toggleAnimation: false,
    menuItem: Items,
    width: "900",
    height: "600",
  };
  // componentDidMount() {
  //   this.onInit();
  // }

  /**
   * @description init method of component
   */
  private async onInit() { }

  getDiagramInstance = (instance: DiagramComponent) => {
    diagramInstance = instance;
  };
  /**
   * menu bar click handle
   * @returns 
   */
  onClickMenuItem = (args: ClickEventArgs) => {
    switch (args.item.text) {
      case "New": {
        diagramInstance.clear();
        break;
      }
      case "Load": {
        document
        document.getElementById("fileupload")?.click();
        break;
      }
      case "Save": {
        download(diagramInstance.saveDiagram());
        break;
      }
      case "Toggle Animation": {
        this.setState({ toggleAnimation: !this.state.toggleAnimation });
        break;
      }
      case "Grop": {
        diagramInstance.selectedItems.nodes?.length ||
          diagramInstance.selectedItems.connectors?.length
          ? diagramInstance.group()
          : {};
        break;
      }
      case "Ungrop": {
        diagramInstance.selectedItems.nodes?.length ||
          diagramInstance.selectedItems.connectors?.length
          ? diagramInstance.unGroup()
          : {};
        break;
      }
      case "Export": {
        var connectors = document.querySelectorAll(
          'path[id^="Link1"]'
        );
        for (let i = 0; i < connectors.length; i += 3) {
          var animateElement = document.createElement("animate");
          animateElement.setAttributeNS(
            null,
            "attributeName",
            "stroke-dashoffset"
          );
          animateElement.setAttributeNS(null, "to", "-16");
          animateElement.setAttributeNS(null, "dur", "0.5s");
          animateElement.setAttributeNS(
            null,
            "repeatCount",
            "indefinite"
          );
          animateElement.removeAttribute("xmlns");
          connectors[i].appendChild(animateElement);
          console.log(connectors[i]);
        }
        let options: IExportOptions = {};
        options.mode = "Download";
        options.format = "SVG";
        diagramInstance.exportDiagram(options);
        break;
      }
      default: {
      }
    }
  }
  /**
  *render function
  */
  render() {
    console.log(this.state.menuItem);

    return (
      <div className="control-pane">
        <div className="control-section">
          <ToolbarComponent
            height="3vh"
            id="Title-bar"
            cssClass="title-bar"
            //@ts-ignore
            // clicked={this.onClickMenuItem}
            items={[
              {
                text: "Untitled Diagram",
                tooltipText: "Rename",
              },
            ]}
          />


          <ToolbarComponent
            height="3vh"
            id="toolbar_diagram"
            style={{ width: "100%" }}
            //@ts-ignore
            clicked={this.onClickMenuItem}
            items={this.state.menuItem.items}
          />
          <Divider className="primary" />
          <ToolbarComponent
            height="3vh"
            id="sub-menu-bar"
            cssClass="sub-menu"
            //@ts-ignore
            // clicked={this.onClickMenuItem}
            items={[]}
          >

            <div className="flex-row">
              <TextBoxComponent placeholder="Set Width" floatLabelType="Never" width="70px"
              //  value={this.props.width}
              // onChange={(e: any) => { this.props.diagramWidth(e.target.value); }} 
              />
              <div className="m-10" />
              <TextBoxComponent placeholder="Set Height" floatLabelType="Never" width="70px"
              //  value={this.props.height} 
              //  onChange={(e: any) => { this.props.diagramHeight(e.target.value); }}
              />
            </div>
          </ToolbarComponent>
          <div className="display-none">
            <UploaderComponent
              type="file"
              style={{ height: "3vh" }}
              id="fileupload"
              asyncSettings={{
                saveUrl:
                  "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
                // removeUrl:
                //   "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove",
              }}
              success={onUploadSuccess as any}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              className="content-wrapper"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <SymbolPalette />
              <DiagramPanel getDiagramInstance={this.getDiagramInstance} toggleAnimation={this.state.toggleAnimation} />
            </div>
          </div>
        </div>
        <div className="status-bar">
          <h3>Status bar </h3>
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
  // @ts-ignore
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

/**
 * State
 */
type TState = {
  toggleAnimation: boolean;
  menuItem: any;
  width: string;
  height: string;
};

/**
 * State
 */
type TProps = {};
export { DiagramTool as default };
