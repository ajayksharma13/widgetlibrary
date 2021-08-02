import { BpmnDiagrams, DataBinding, DiagramComponent, Inject, SnapConstraints } from "@syncfusion/ej2-react-diagrams";
import React from "react";
import { BaseComponent } from "../../base";
import MimicModel from "./model";
import MimicProperty from "./property";
import "./style.scss";
import Modal from "semantic-ui-react/dist/commonjs/modules/Modal";
import DiagramTool from "../../diagram-tool";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
let widgetDiagramInstance: DiagramComponent;

/**
 * enum has previous work
 */
enum previousWork {
    No = 0,
    Yes = 1,
}

class MimicTool extends BaseComponent<TProps, TState> {
    static defaultProps: TProps = {
        model: new MimicModel(),
    }

    /**
  * default state
  */
    state: TState = {
        isModalOpen: false,
        hasWork: previousWork.No,
    };
    componentDidMount() {
        const { model } = this.props;
        if (Object.keys(model.value).length > 0) {
            this.setState({ hasWork: previousWork.Yes });
        }
    }

    /**
     * call back function to update render state
     */
    diagramUpdate = (data: any) => {
        this.props.model.updatediagramObject?.(JSON.parse(data));
        this.setState({
            hasWork: previousWork.Yes,
        });
        this.diagramLoader();
    }
    /**
     * diagram loader
     * condition the object to load diagram
     */
    diagramLoader = () => {
        const { model } = this.props;
        let obj = JSON.parse(JSON.stringify(model.value)) as any;
        obj.scrollSettings.currentZoom = 0.3;
        obj.snapSettings.horizontalGridlines.lineIntervals = [];
        obj.snapSettings.verticalGridlines.lineIntervals = [];
        obj.rulerSettings.showRulers = false;
        widgetDiagramInstance.loadDiagram(JSON.stringify(obj));
    }

    /**
     * method to close the modal 
     */
    closeModal = () => {
        this.setState({ isModalOpen: false });
    }

    /**
     * condinally render elemenet
     */
    renderContent = () => {
        let { viewbox: { height, width } } = this.props;
        let temp = parseInt(height) - 30;
        const { hasWork } = this.state;
        console.log(hasWork);

        if (hasWork == previousWork.No) {
            return (
                <div className="no-work-div">
                    <p onClick={() => this.setState({ isModalOpen: true })}>Click edit to create a diagram</p>
                </div>
            );
        }
        else {
            return (
                <DiagramComponent
                    id="widget-diagram"
                    ref={diagram => (widgetDiagramInstance = diagram as DiagramComponent)}
                    width={`${width}px`}
                    height={`${temp}px`}
                    snapSettings={{ constraints: SnapConstraints.None }}
                >
                    <Inject services={[DataBinding, BpmnDiagrams]} />
                </DiagramComponent>
            );
        }
    }


    render() {
        const { hasWork } = this.state;
        return <div className="mimic-widget" style={{ borderTop: "1px solid" }}>
            {(hasWork != previousWork.No) &&
                <Icon name="edit"
                    title="Edit"
                    onClick={() => this.setState({ isModalOpen: true })}
                    className="diagram-edit-icon primary"
                    circular
                    inverted
                />}
            <Modal
                size="fullscreen"
                open={this.state.isModalOpen}
                onClose={() => this.setState({ isModalOpen: false })}
            >
                <DiagramTool
                    closeModal={this.closeModal}
                    updateWidget={this.diagramUpdate}
                    {...this.props.model}
                />
            </Modal>
            {this.renderContent()}
        </div >;
    }

}


/**
 * Prop types
 */
type TProps = {
    model: MimicModel;
    viewbox?: any;
};

type TState = {
    isModalOpen: boolean;
    hasWork: number;
};

export { MimicTool as default, MimicModel, MimicProperty };