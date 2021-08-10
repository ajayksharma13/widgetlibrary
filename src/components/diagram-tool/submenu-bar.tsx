import { TextBoxComponent, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import React, { Component } from 'react'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

class Submenu extends Component<TProps, TState>{

    state: Readonly<TState> = {
    };

    render() {
        return (
            <div className="sub-menu">

            </div>
        )
    }
}

type TState = {

};

type TProps = {
    path: object;
    onUploadSuccess: Function;
    uploadHandler: () => void;
    setDiagrambg: Function;
    setDiagramHeight: Function;
    setDiagramWidth: Function;
    height: string;
    width: string;
};


export { Submenu as default }