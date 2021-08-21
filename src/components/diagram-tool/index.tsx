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
import { MimicModel } from '../widget/mimic';
import { TClientRoute, TRouteProps } from '../../types';
import { compose } from 'recompose';
import withToastHOC from '../../hoc/with-toast';
import withRouterHOC from '../../hoc/with-router';
import { withApollo } from 'react-apollo';
const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

let node: NodeModel;
let diagramInstance: DiagramComponent;
enum diagramMode {
  FULLSCREEN,
  CONFIGURE
};

/**
 * Diagram tool component
 */
class DiagramToolComponent extends BaseComponent<TClientRoute<TProps>, TState> {



  /**
   * default props
   */
  // static defaultProps: TProps = {};

  /**
   * default state
   */
  state: Readonly<TState> = {
    toggleAnimation: false,
    menuItem: Items,
    x: 0,
    y: 0,
    viewMode: diagramMode.CONFIGURE,
  };
  componentDidMount() {
    const { value, location, title } = this.props;
    if (value) {
      diagramInstance.loadDiagram(JSON.stringify(value));
    }
    else if (location.pathname == "/diagram") {
      let diagramObj = localStorage.getItem("diagramData")!;
      diagramInstance.loadDiagram(diagramObj);
      //load diagram with state
      this.setState({
        viewMode: diagramMode.FULLSCREEN,
      })
    }
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
        // this.props.resetBinding?.();
        break;
      }
      case "Load": {
        document
        document.getElementById("fileupload")?.click();
        break;
      }
      case "Save": {
        // download(diagramInstance.saveDiagram());
        this.props.updateWidget?.(diagramInstance.saveDiagram());
        this.props.closeModal?.();
        break;
      }
      case "Toggle Animation": {
        this.setState({ toggleAnimation: !this.state.toggleAnimation });
        break;
      }
      case "Group": {
        diagramInstance.selectedItems.nodes?.length ||
          diagramInstance.selectedItems.connectors?.length
          ? diagramInstance.group()
          : {};
        break;
      }
      case "Ungroup": {
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

  onMouse = (codX: any, codY: any) => {
    this.setState({ x: codX, y: codY });
    const { x, y } = this.state;
  }

  /**
  *render function
  */
  render() {
    const { viewMode } = this.state;
    return (
      <div className="control-pane">
        <div className="control-section">
          <div className="title-bar">
            <p>{viewMode ? this.props.title : localStorage.getItem("title")}</p>
            {viewMode ? <span title="Close" onClick={() => this.props.closeModal?.()} className="e-icons e-close"></span> : <></>}
          </div>
          {
            viewMode ? <ToolbarComponent
              height="3vh"
              id="toolbar_diagram"
              style={{ width: "100%" }}
              //@ts-ignore
              clicked={this.onClickMenuItem}
              items={this.state.menuItem.items}
            /> : <></>}
          {/* <hr className="m-0 custom-hr" /> */}
          {viewMode ? <Submenu
            diagramInstance={diagramInstance}
          /> : <></>}
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
              {viewMode ? <SymbolPalette /> : <></>}
              <DiagramPanel getDiagramInstance={this.getDiagramInstance}
                toggleAnimation={this.state.toggleAnimation}
                onMouse={this.onMouse}
                dataBinder={this.props.dataBinder!}
                dataBinding={this.props.dataBinding}
                viewMode={viewMode}
              />
            </div>
          </div>
        </div>
        {viewMode ? <div className="status-bar">
          <p className="m-l-10" style={{}}>X:{this.state.x}  Y:{this.state.y}</p>
        </div> : <></>}
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
  x: number;
  y: number;
  viewMode: number;
};

/**
 * Props
 */
type TProps = {
  closeModal?: Function;
  updateWidget?: Function;
  value?: any;
  title?: string;
  dataBinding?: any;
  dataBinder?: Function;
  resetBinding?: Function;
};
const DiagramTool = compose<TClientRoute<TProps>, TProps>(
  withToastHOC,
  withRouterHOC,
  withApollo,
)(DiagramToolComponent);


export { DiagramTool as default }

