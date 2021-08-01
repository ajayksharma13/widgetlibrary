import React from 'react';
import { BaseComponent } from '../base';
import DiagramPanel from "./diagram-panel";
import { SymbolPalette } from "./symbol-pallete";
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
import Items from "./menu-items.json";
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Submenu from './submenu-bar';
import { MimicToolModel } from '../widget/mimic';
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
    width: "1000",
    height: "700",
    diagramBg: "https://www.solidbackgrounds.com/images/1280x720/1280x720-white-solid-color-background.jpg",
    x: 0,
    y: 0,
  };
  componentDidMount() {
    const { model } = this.props;
    if (Object.keys(model!.value).length > 0) {
      diagramInstance.loadDiagram(JSON.stringify(this.props.model?.value));
    }
    //remove after practising
    diagramInstance.dataBindingModule
  }

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
        this.props.model?.updatediagramObject(JSON.parse(diagramInstance.saveDiagram()));
        this.props.updateWidget?.();
        this.props.closeModal?.();
        // download(diagramInstance.saveDiagram());

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
  setDiagramWidth = (width: string) => {
    this.setState({ width });
  }
  setDiagramHeight = (height: string) => {
    this.setState({ height });
  }
  setDiagrambg = (url: string, width: string, height: string) => {
    this.setState({
      diagramBg: url,
      width: width,
      height: height,
    });
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
          this.setDiagrambg(reader.result as string, imgWidth, imgHeight);
        } else {
          console.log(imgWidth, imgHeight);
          // this.setState({ showDialog: true });
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

  uploadHandler = () => {
    document.getElementById("backgroundUploader")?.click();
    //  todo:implement with react ref
    // const node = this.uploaderRef.current;
    // console.log(node);
  }

  onMouse = (codX: any, codY: any) => {
    this.setState({ x: codX, y: codY });
    const { x, y } = this.state;
  }

  /**
  *render function
  */
  render() {
    return (
      <div className="control-pane">
        <div className="control-section">
          <div className="title-bar">
            <p>Anexee Diagram</p>
            <span title="Close" onClick={() => this.props.closeModal?.()} className="e-icons e-close"></span>
          </div>
          <ToolbarComponent
            height="3vh"
            id="toolbar_diagram"
            style={{ width: "100%" }}
            //@ts-ignore
            clicked={this.onClickMenuItem}
            items={this.state.menuItem.items}
          />
          <hr className="m-0 custom-hr" />
          <Submenu
            height={this.state.height}
            path={this.path}
            setDiagramWidth={this.setDiagramWidth}
            onUploadSuccess={this.onUploadSuccess}
            setDiagramHeight={this.setDiagramHeight}
            setDiagrambg={this.setDiagrambg}
            uploadHandler={this.uploadHandler}
            width={this.state.width}
          />
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
              <DiagramPanel getDiagramInstance={this.getDiagramInstance}
                height={this.state.height}
                width={this.state.width}
                diagramBg={this.state.diagramBg}
                setDiagrambg={this.setDiagrambg}
                toggleAnimation={this.state.toggleAnimation}
                onMouse={this.onMouse}
              />
            </div>
          </div>
        </div>
        <div className="status-bar">
          <p className="m-l-10">x:{this.state.x} y:{this.state.y}</p>
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
    // document.body.appendChild(a);
    // a.click();
    // a.remove();
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
  diagramBg: string;
  x: number;
  y: number;
};

/**
 * Props
 */
type TProps = {
  closeModal?: Function;
  model?: MimicToolModel;
  updateWidget?: Function;
};
export { DiagramTool as default };
