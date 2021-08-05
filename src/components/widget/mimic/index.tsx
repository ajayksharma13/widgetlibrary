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

/**
 * dummy timmer Function
 */
const timer = (ms: any) => new Promise(res => setTimeout(res, ms));



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

    configureScript = async () => {
        const { model: { dataBinding } } = this.props;
        const diagramElement = document.getElementById("widget-diagram");
        let element: any[] = [];
        //injecting respective data id 
        dataBinding.map((item) => {
            const { jsonData: { controlledType, mutableElementId } } = item as any;
            if (controlledType) {
                diagramElement?.querySelectorAll("#" + mutableElementId)[0]?.setAttribute("data-id", mutableElementId);
                element.push(
                    {
                        attribute: item.attribute,
                        data: document.querySelectorAll(`[data-id*="${mutableElementId}"]`)[0],
                    });
            }
            else {
                diagramElement?.querySelectorAll("#" + mutableElementId)?.forEach((node) => {
                    node.setAttribute("class", mutableElementId);
                });
            }
        });


        //temp code to genrate random value repalced by api
        for (let i = 0; i <= 100; i++) {
            element.map((item) => {
                item.data.setAttribute(item.attribute, i.toString());
                console.log(item.attribute);
            });
            console.log(i);
            await timer(300);
        }
    }

    dataBinder = (obj: any) => {
        // const unique = this.props.model.dataBinding.filter((data) => (obj?.nodeId === data.nodeId)).length;
        // if (unique == 0) {
        this.props.model.appendBindingElement(obj);
        // }
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
        this.props.model.dataBinding.length && this.configureScript();
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
        // this.configureScript();
        let { viewbox: { height, width }, model } = this.props;
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
        return <div className="mimic-widget widget" style={{ borderTop: "1px solid" }}>
            <div className="widget__box">
                <div className="widget__header">
                    <div className="sub-header">
                    </div>
                </div>
                <div className="widget__content">
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
                            dataBinder={this.dataBinder}
                            {...this.props.model}
                        />
                    </Modal>
                    {this.renderContent()}
                </div>
            </div>
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