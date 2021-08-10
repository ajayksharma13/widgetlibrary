import { BpmnDiagrams, DataBinding, DiagramComponent, Inject, SnapConstraints } from "@syncfusion/ej2-react-diagrams";
import React from "react";
import { BaseComponent } from "../../base";
import MimicModel from "./model";
import MimicProperty from "./property";
import "./style.scss";
import Modal from "semantic-ui-react/dist/commonjs/modules/Modal";
// import DiagramTool from "../../diagram-tool";
const DiagramTool = React.lazy(() => import("../../diagram-tool"));
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import { Button } from "semantic-ui-react";
import { eDesignerMode } from "../../../utils";
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



class MimicComponent extends BaseComponent<TProps, TState> {
    static defaultProps: TProps = {
        model: new MimicModel(),
        mode: eDesignerMode.RUNNING,
    }

    /**
     * default state
     */
    state: TState = {
        isModalOpen: false,
        hasWork: previousWork.No,
    };


    componentDidMount() {
        const { model, mode } = this.props;
        // if (Object.keys(model.value).length > 0) {
        //   this.setState({ hasWork: previousWork.Yes });
        // }
        if (model.value) {
            this.diagramLoader();
        }
        if (
            model.value &&
            model.dataBinding.length &&
            [eDesignerMode.CONFIGURE_PLAY, eDesignerMode.RUNNING].includes(mode)
        ) {
            this.configureScript();
        }
    }



    configureScript = async () => {
        const { model: { dataBinding } } = this.props;
        const diagramElement = document.getElementById("widget-diagram");
        const ele = document.getElementById(dataBinding[0].nodeId! + "_content_groupElement");
        console.log(ele);

        let element: any[] = [];
        //injecting respective data id 
        dataBinding.map((item) => {
            const { nodeId, jsonData: { controlledType, mutableElementId } } = item as any;
            if (controlledType) {
                const ele = document.getElementById(nodeId + "_content_groupElement");

                ele?.querySelectorAll("#" + mutableElementId)[0]?.setAttribute("data-id", nodeId);
                element.push(
                    {
                        attribute: item.attribute,
                        data: document.querySelectorAll(`[data-id*="${nodeId}"]`)[0],
                    });
            }
            else {
                diagramElement?.querySelectorAll("#" + mutableElementId)?.forEach((node) => {
                    node.setAttribute("class", mutableElementId);
                });
            }
        });


        //temp code to genrate random value repalced by api
        for (let i = 0; i <= 50; i++) {
            element.map((item) => {
                item.data.setAttribute(item.attribute, i.toString());
                console.log(item.attribute);
            });
            console.log(i);
            await timer(1000);
        }
    }

    dataBinder = (obj: any) => {
        const unique = this.props.model.dataBinding.filter((data) => (obj?.nodeId === data.nodeId)).length;
        if (unique == 0) {
            this.props.model.appendBindingElement(obj);
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
        this.props.model.dataBinding.length && this.configureScript();
    }
    /**
     * diagram loader
     * condition the object to load diagram
     */
    diagramLoader = () => {
        const { model, viewbox: { height, width }, } = this.props;
        let obj = JSON.parse(JSON.stringify(model.value)) as any;
        obj.scrollSettings.currentZoom = 1;
        obj.pageSettings.background.source = "";
        obj.pageSettings.width = parseInt(width);
        obj.pageSettings.height = parseInt(height);
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
        let { viewbox: { height, width }, model } = this.props;
        let temp = parseInt(height) - 30;
        if (model.value == null) {
            return (
                <div className="no-work-div">
                    <p onClick={() => this.setState({ isModalOpen: true })}>Click to create a diagram</p>
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
                // created={() => this.props.model.dataBinding.length && this.configureScript()}
                >
                    <Inject services={[DataBinding, BpmnDiagrams]} />
                </DiagramComponent>
            );
        }
    }


    render() {
        const { model } = this.props;
        const { hasWork } = this.state;
        return <div className="mimic-widget widget" >
            <div className="widget__box">
                <div className="widget__header">
                    <div className="sub-header">
                    </div>
                </div>
                <div className="widget__content">
                    {(model.value != null) &&
                        <>
                            <Button circular
                                onClick={() => this.setState({ isModalOpen: true })}
                                className="diagram-edit-icon "
                                title="Edit"
                                icon='edit' />
                            <Button circular
                                // find something else
                                onClick={() => {
                                    window.open("/diagram", '_blank');
                                }}
                                className="diagram-fullscreen-icon"
                                title="Fullscreen"
                                icon='window maximize outline' ></Button>
                        </>
                    }
                    <Modal
                        size="fullscreen"
                        open={this.state.isModalOpen}
                        onClose={() => this.setState({ isModalOpen: false })}
                    >
                        <DiagramTool
                            closeModal={this.closeModal}
                            updateWidget={this.diagramUpdate}
                            dataBinder={this.dataBinder}
                            resetBinding={this.props.model.resetBindingElement}
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
    mode: eDesignerMode;
};

type TState = {
    isModalOpen: boolean;
    hasWork: number;
};

export { MimicComponent as default, MimicModel, MimicProperty };