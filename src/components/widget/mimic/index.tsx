import { BpmnDiagrams, DataBinding, DiagramComponent, DiagramConstraints, Inject, SnapConstraints } from "@syncfusion/ej2-react-diagrams";
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
import { Link } from "react-router-dom";
let widgetDiagramInstance: DiagramComponent;
/**
 * enum has previous work
 */
enum previousWork {
    No = 0,
    Yes = 1,
}


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
            // this.configureScript();
        }
    }




    dataBinder = (obj: any) => {
        const unique = this.props.model.dataBinding.filter((data) => (obj?.nodeId === data.nodeId)).length;
        if (unique == 0) {
            this.props.model.appendBindingElement(obj);
        }
        else {
            this.props.model.dataBinding.map((item, index) => {
                if (item.nodeId == obj.nodeId) {
                    this.props.model.dataBinding.splice(index, 1, obj);
                }
            });
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
        this.props.model.dataBinding.length && this.props.model.diagramRunner();
    }
    /**
     * diagram loader
     * condition the object to load diagram
     */
    diagramLoader = () => {
        const { model } = this.props;
        let obj = JSON.parse(JSON.stringify(model.value)) as any;
        obj.scrollSettings.currentZoom = 1;
        obj.constraints = 452;
        obj.pageSettings.background.source = "";
        obj.snapSettings.horizontalGridlines.lineIntervals = [];
        obj.snapSettings.verticalGridlines.lineIntervals = [];
        obj.rulerSettings.showRulers = false;
        widgetDiagramInstance.loadDiagram(JSON.stringify(obj));
        console.log(JSON.stringify(obj));

        this.diagramSetterFunction();
        this.localStorageMethod(JSON.stringify(obj));
    }

    /**
     * method to close the modal 
     */
    closeModal = () => {
        this.setState({ isModalOpen: false });
    }

    /**
     * for local storage
     */
    //:todo we need  to change this ...remember that
    localStorageMethod = (stringObj: any) => {
        if (typeof (Storage) !== "undefined") {
            // Store
            localStorage.setItem("diagramData", stringObj);
            localStorage.setItem("title", this.props.model.title);
        } else {
            console.log("Sorry! No Web Storage support..");
        }
    }

    diagramSetterFunction = () => {
        widgetDiagramInstance.fitToPage({ mode: "Page" });
        widgetDiagramInstance.dataBind();
    }
    /**
     * condinally render elemenet
     */
    renderContent = () => {
        let { model } = this.props;
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
                    width={"100%"}
                    height={"100%"}
                    snapSettings={{ constraints: SnapConstraints.None }}
                    constraints={DiagramConstraints.Default & ~DiagramConstraints.PageEditable}
                // created={() => this.props.model.dataBinding.length && this.configureScript()}
                >
                    <Inject services={[DataBinding, BpmnDiagrams]} />
                </DiagramComponent>
            );
        }
    }


    render() {
        const { model } = this.props;
        return <div className="mimic-widget widget" >
            <div className="widget__box">
                <div className="widget__content">
                    {(model.value != null) &&
                        <>
                            <Button circular
                                onClick={() => this.setState({ isModalOpen: true })}
                                className="diagram-edit-icon"
                                title="Edit"
                                icon='edit' />
                            <Button circular
                                find something else
                                onClick={() => {
                                    window.open("/diagram", '_blank');
                                }}
                                className="diagram-fullscreen-icon"
                                title="Fullscreen"
                                icon="window maximize outline"
                            />
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
    mode: eDesignerMode;
};

type TState = {
    isModalOpen: boolean;
    hasWork: number;
};

export { MimicComponent as default, MimicModel, MimicProperty };