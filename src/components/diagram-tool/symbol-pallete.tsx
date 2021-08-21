import * as React from "react";
import {
  SymbolPaletteComponent,
  SymbolInfo,
  NodeModel,
  ConnectorModel,
  AnnotationConstraints,
} from "@syncfusion/ej2-react-diagrams";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { BaseComponent } from "../base/index";

import {
  flowShapes,
  connectorShapes,
  basicShapes,
  svgShapes,
  animatedShapes,
  pipesSvg,
  valvesSvg,
  htmlNode,
} from "./palette-items";
import NodeComponent from '../../general/html-node-component';
import { UploaderComponent } from "@syncfusion/ej2-react-inputs";
import "./style.scss";
import { ExpandMode } from "@syncfusion/ej2-react-navigations";
const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

let palette: SymbolPaletteComponent;

export class SymbolPalette extends BaseComponent<TProps, TState> {
  public path: object = {
    // removeUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Remove",
    saveUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Save",
  };
  /**
   * default props
   */
  static defaultProps: TProps = {};

  /**
   * default state
   */
  state: Readonly<TState> = {
    showDialog: false,
    svgshapes: svgShapes,
    flowshapes: flowShapes,
    basicshapes: basicShapes,
    connectorshapes: connectorShapes,
    animatedSvgs: animatedShapes,
    htmlshape: htmlNode,
    pipes: pipesSvg,
    valves: valvesSvg,
  };

  addPaletteItem = async (reader: FileReader, type: string) => {
    sleep(100).then((r) => {
      console.log(reader.result);
      var newData = this.state.svgshapes.slice();
      // if (reader.result?.slice(1, 2) == "g") {
      newData.push({
        id: Math.floor(Math.random() * 10000).toString(),
        style: { fill: "none" },
        annotations: [
          { content: "", constraints: AnnotationConstraints.Interaction },
        ],
        shape: {
          type: "Native",
          content: reader.result ? reader.result.toString() : "",
        },
      });
      this.setState({ svgshapes: newData });
      // } else {
      //   this.setState({ showDialog: true });
      // }
    });
  };

  onUploadSuccess = async (args: { [key: string]: Object }) => {
    let file1: { [key: string]: Object } = args.file as {
      [key: string]: Object;
    };
    let file: Blob = file1.rawFile as Blob;
    let reader: FileReader = new FileReader();
    await reader.readAsText(file);
    this.addPaletteItem(reader, "SVG");
  };

  componentDidMount() {
    palette.getSymbolInfo = (symbol: Symbol): SymbolInfo => {
      if (symbol.text !== undefined) {
        return { description: { text: symbol.text, overflow: "Wrap" } };
      }
      return { description: { text: symbol.id } };
    };
  }
  uploadHandler = () => {
    document.getElementById("svg-uploader")?.click();
  }

  render() {
    return (
      <div className="col-lg-3">
        <div id="palette-space">
          <div className="content-wrapper">
            <DialogComponent
              isModal={true}
              width="300px"
              height="120px"
              visible={this.state.showDialog}
              close={() => {
                this.setState({ showDialog: false });
              }}
              overlayClick={() => {
                this.setState({ showDialog: false });
              }}
              header="Wrong SVG Format"
            >
              {"SVG should start and end with <g> tag only"}
            </DialogComponent>

            <SymbolPaletteComponent
              id="symbolpalette"
              ref={(symbolpal) => (palette = symbolpal!)}
              expandMode={"Single"}
              allowDrag={true}
              palettes={[
                {
                  id: "flow",
                  expanded: true,
                  symbols: this.state.flowshapes,
                  title: "Flow Shapes",
                  iconCss: "e-diagram-icons1 e-diagram-flow",
                },
                {
                  id: "basic",
                  expanded: true,
                  symbols: this.state.basicshapes,
                  title: "Basic Shapes",
                  iconCss: "e-diagram-icons1 e-diagram-basic",
                },
                {
                  id: "pipes",
                  expanded: true,
                  symbols: this.state.pipes,
                  title: "Pipes",
                  iconCss: "e-diagram-icons1 e-diagram-svgs",
                },
                {
                  id: "valves",
                  expanded: true,
                  symbols: this.state.valves,
                  title: "Valves",
                  iconCss: "e-diagram-icons1 e-diagram-svgs",
                },
                {
                  id: "ParameterizedShapes",
                  expanded: true,
                  symbols: this.state.svgshapes,
                  title: "Animation Shapes",
                  iconCss: "e-diagram-icons1 e-diagram-connector",
                },
                // {
                //   id: "htmlNode",
                //   expanded: true,
                //   symbols: this.state.htmlshape,
                //   title: "HTML Node",
                //   iconCss: "e-diagram-icons1 e-diagram-connector",
                // },
                {
                  id: "connectors",
                  expanded: true,
                  symbols: this.state.connectorshapes,
                  title: "Connectors",
                  iconCss: "e-diagram-icons1 e-diagram-connector",
                },
                // {
                //   id: "svg",
                //   expanded: true,
                //   symbols: this.state.animatedSvgs,
                //   title: "SVG Shapes",
                //   iconCss: "e-diagram-icons1 e-diagram-svgs",
                // },
              ]}
              enableAnimation={true}
              width={"100%"}
              height={"100%"}
              symbolDragSize={{ height: 65, width: 65 }}
              symbolWidth={35}
              symbolHeight={35} //set Node default value
              getNodeDefaults={this.nodeDefaults.bind(this)}
              // getSymbolInfo={this.symbolInfo}
              symbolMargin={{ left: 5, right: 5, top: 5, bottom: 5 }}
            />
          </div>
          <div id="svg-uploder">
            <div className="display-none">
              <UploaderComponent
                id="svg-uploader"
                asyncSettings={this.path}
                success={this.onUploadSuccess as any}
              />
            </div>
          </div>
          {/* <span onClick={this.uploadHandler} className="e-icons e-upload"></span> */}
        </div>
      </div>
    );
  }

  public nodeDefaults(symbol: NodeModel): NodeModel {
    if (symbol.id === "Terminator" || symbol.id === "Process") {
      symbol.width = 80;
      symbol.height = 40;
    } else if (
      symbol.id === "Document" ||
      symbol.id === "PreDefinedProcess" ||
      symbol.id === "PaperTap" ||
      symbol.id === "DirectData"
    ) {
      symbol.width = 50;
      symbol.height = 40;
    }
    symbol.style = { strokeWidth: 1, strokeColor: "#757575" };
    return symbol;
  }

  // public symbolInfo = (symbol: SymbolInfo): SymbolInfo => {
  //   symbol.fit = true;
  //   symbol.tooltip;
  //   return symbol;
  // }
}

/**
 * State
 */
type TState = {
  svgshapes: NodeModel[];
  flowshapes: NodeModel[];
  basicshapes: NodeModel[];
  htmlshape: NodeModel[];
  connectorshapes: ConnectorModel[];
  animatedSvgs: any[];
  pipes: any[];
  valves: any[];
  showDialog: boolean;
};

type TProps = {};

interface Symbol extends NodeModel {
  text?: string;
}
