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
} from "./paletteItems";

import { UploaderComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

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
    uploadChoice: "SVG",
    showDialog: false,
    svgshapes: svgShapes,
    flowshapes: flowShapes,
    basicshapes: basicShapes,
    connectorshapes: connectorShapes,
  };

  addPaletteItem = async (reader: FileReader, type: string) => {
    sleep(100).then((r) => {
      console.log(reader.result);
      switch (type) {
        case "SVG": {
          var newData = this.state.svgshapes.slice();
          if (reader.result?.slice(1, 2) == "g") {
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
          } else {
            this.setState({ showDialog: true });
          }
          break;
        }
        case "Basic": {
          var newData = this.state.basicshapes.slice();
          if (reader.result?.slice(1, 2) == "g") {
            newData.push({
              id: Math.floor(Math.random() * 10000).toString(),
              style: { fill: "none" },
              annotations: [
                { content: "", constraints: AnnotationConstraints.Interaction },
              ],
              shape: {
                type: "Basic",
                content: reader.result ? reader.result.toString() : "",
              },
            });
            this.setState({ basicshapes: newData });
          } else {
            this.setState({ showDialog: true });
          }
          break;
        }
        case "Flow": {
          var newData = this.state.flowshapes.slice();
          if (reader.result?.slice(1, 2) == "g") {
            newData.push({
              id: Math.floor(Math.random() * 10000).toString(),
              style: { fill: "none" },
              annotations: [
                { content: "", constraints: AnnotationConstraints.Interaction },
              ],
              shape: {
                type: "Flow",
                content: reader.result ? reader.result.toString() : "",
              },
            });
            this.setState({ flowshapes: newData });
          } else {
            this.setState({ showDialog: true });
          }
          break;
        }
        // case "Connector": {
        //   var newData = this.state.connectorshapes.slice();
        //   if (reader.result?.slice(1, 2) == "g") {
        //     newData.push();
        //     this.setState({ connectorshapes: newData });
        //   } else {
        //     this.setState({ showDialog: true });
        //   }
        //   break;
        // }
      }
    });
  };

  onUploadSuccess = async (args: { [key: string]: Object }) => {
    let file1: { [key: string]: Object } = args.file as {
      [key: string]: Object;
    };
    let file: Blob = file1.rawFile as Blob;
    let reader: FileReader = new FileReader();
    await reader.readAsText(file);
    switch (this.state.uploadChoice) {
      case "SVG": {
        this.addPaletteItem(reader, "SVG");
        break;
      }
      case "Basic": {
        this.addPaletteItem(reader, "Basic");
        break;
      }
      case "Flow": {
        this.addPaletteItem(reader, "Flow");
        break;
      }
      case "Con": {
        this.addPaletteItem(reader, "Connector");
        break;
      }
    }
  };

  componentDidMount() {
    palette.getSymbolInfo = (symbol: Symbol): SymbolInfo => {
      if (symbol.text !== undefined) {
        return { description: { text: symbol.text, overflow: "Wrap" } };
      }
      return { description: { text: symbol.id } };
    };
  }

  render() {
    return (
      <div className="col-lg-4">
        <div style={{ height: "80vh" }} id="palette-space">
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
              ref={(symbolpal) => (palette = symbolpal)}
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
                  id: "connectors",
                  expanded: true,
                  symbols: this.state.connectorshapes,
                  title: "Connectors",
                  iconCss: "e-diagram-icons1 e-diagram-connector",
                },
                {
                  id: "svg",
                  expanded: true,
                  symbols: this.state.svgshapes,
                  title: "SVG Shapes",
                  iconCss: "e-diagram-icons1 e-diagram-svgs",
                },
              ]}
              enableAnimation={true}
              width={"100%"}
              height={"100%"}
              symbolWidth={80}
              symbolHeight={80} //set Node default value
              getNodeDefaults={this.nodeDefaults.bind(this)}
              getSymbolInfo={this.symbolInfo.bind(this)}
              symbolMargin={{ left: 15, right: 15, top: 15, bottom: 15 }}
            />
          </div>
          <div style={{ margin: "5px" }}>
            <DropDownListComponent
              id="ddlelement2"
              dataSource={["SVG", "Connector", "Basic", "Flow"]}
              popupHeight="200px"
              popupWidth="15vh"
              placeholder="Select Item to Upload"
              change={(e: any) => {
                this.setState({ uploadChoice: e.value });
              }}
              value={this.state.uploadChoice}
            />
          </div>
          <UploaderComponent
            asyncSettings={this.path}
            success={this.onUploadSuccess}
          />
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

  public symbolInfo(symbol: SymbolInfo): SymbolInfo {
    symbol.fit = true;
    return symbol;
  }
}

/**
 * State
 */
type TState = {
  svgshapes: NodeModel[];
  flowshapes: NodeModel[];
  basicshapes: NodeModel[];
  connectorshapes: ConnectorModel[];
  showDialog: boolean;
  uploadChoice: string;
};

type TProps = {};

interface Symbol extends NodeModel {
  text?: string;
}
