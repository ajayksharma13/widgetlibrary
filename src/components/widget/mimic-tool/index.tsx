import { BpmnDiagrams, DataBinding, DiagramComponent, Inject, SnapConstraints } from "@syncfusion/ej2-react-diagrams";
import React from "react";
import { BaseComponent } from "../../base";
import MimicToolModel from "./model";
import MimicToolProperty from "./property";
import DiagJason from "./Diagram.json";
import "./style.scss";
import Modal from "semantic-ui-react/dist/commonjs/modules/Modal";
import DiagramTool from "../../diagram-tool";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
let diagramInstance: DiagramComponent;

class MimicTool extends BaseComponent<TProps, TState> {
    static defaultProps: TProps = {
        model: new MimicToolModel(),
    }

    /**
  * default state
  */
    state: TState = {
        isModelOpen: false,
    };
    componentDidMount() {
        diagramInstance.loadDiagram(JSON.stringify(DiagJason));
    }
    closeModal = () => {
        this.setState({ isModelOpen: false });
    }
    render() {
        let { viewbox: { height, width } } = this.props;
        let temp = parseInt(height) - 30;
        return <div className="mimic-widget" style={{ borderTop: "1px solid" }}>
            <div className="mimic-header">
                <Icon name="edit" title="Edit" onClick={() => this.setState({ isModelOpen: true })} />
            </div>
            <Modal
                size="fullscreen"
                open={this.state.isModelOpen}
                onClose={() => this.setState({ isModelOpen: false })}
            >
                <DiagramTool
                    closeModal={this.closeModal}
                />
            </Modal>
            <DiagramComponent
                id="widget-diagram"
                ref={diagram => (diagramInstance = diagram as DiagramComponent)}
                width={`${width}px`}
                height={`${temp}px`}
                snapSettings={{ constraints: SnapConstraints.None }}
            // nodes={getNodes()}
            //Defines the default node and connector properties
            // getNodeDefaults={(obj, diagram) => {
            //     return obj;
            // }}
            >
                <Inject services={[DataBinding, BpmnDiagrams]} />
            </DiagramComponent>
        </div >;
    }

}


/**
 * Prop types
 */
type TProps = {
    model: MimicToolModel;
    viewbox?: any;

};

type TState = {
    isModelOpen: boolean;
};

export { MimicTool as default, MimicToolModel, MimicToolProperty };