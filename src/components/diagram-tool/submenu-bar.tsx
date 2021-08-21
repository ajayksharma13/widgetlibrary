import { DiagramComponent } from '@syncfusion/ej2-react-diagrams';
import { TextBoxComponent, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import React, { Component } from 'react';
import Item from "./sub-menu.json";
import {
    ToolbarComponent,
    ClickEventArgs,
} from "@syncfusion/ej2-react-navigations";
class Submenu extends Component<TProps, TState>{

    state: Readonly<TState> = {
        menuItem: Item,
    };

    componentDidMount() {

    }

    tempFunction = () => {
        const { diagramInstance } = this.props;
        console.log(diagramInstance);
        diagramInstance.undo();
    }
    removeFunction = () => {
        const { diagramInstance } = this.props;
        diagramInstance.remove();
    }
    onClickMenuItem = (args: ClickEventArgs) => {
        const { diagramInstance } = this.props;
        switch (args.item.text) {
            case "Undo": {
                diagramInstance.undo();
                break;
            }
            case "Redo": {
                diagramInstance.redo();
                break;
            }
            case "Remove": {
                diagramInstance.remove();
                break;
            }
            case "Bring Front": {
                diagramInstance.bringToFront();
                break;
            }
            case "Send Back": {
                diagramInstance.sendBackward();
                break;
            }
            case "Align Right": {
                diagramInstance.align('Right');
                //@ts-ignore
                // diagramInstance.selectedItems?.properties?.nodes.map((node) => {
                //     console.log(node.id);
                //     console.log(node);
                // })

                break;
            }
            case "Align Left": {
                diagramInstance.align('Left');
                break;
            }
            case "Align Top": {
                diagramInstance.align('Top');
                break;
            }
            case "Align Bottom": {
                diagramInstance.align('Bottom');
                break;
            }

            default: {
            }
        }
    }



    render() {
        return (
            <ToolbarComponent
                height="3vh"
                id="submenu"
                style={{ width: "100%" }}
                //@ts-ignore
                clicked={this.onClickMenuItem}
                items={this.state.menuItem.items}
            />
        )
    }
}

type TState = {
    menuItem: any;
};

type TProps = {
    diagramInstance: DiagramComponent;
};


export { Submenu as default }

function AlignmentOptions(arg0: string, AlignmentOptions: any) {
    throw new Error('Function not implemented.');
}
