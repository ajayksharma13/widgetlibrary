import { TextBoxComponent, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import React, { Component } from 'react'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

class Submenu extends Component<TProps, TState>{
    render() {
        return (
            <div className="sub-menu">
                <div className="display-none">
                    <UploaderComponent id="backgroundUploader" asyncSettings={this.props.path} success={this.props.onUploadSuccess as any} />
                </div>
                <div className="flex-row">

                    <span className="e-icons e-import" title="background" onClick={this.props.uploadHandler}></span>
                </div>
                <div className="flex-row">
                    <span className="m-r-5">width:</span>
                    <TextBoxComponent placeholder="Set Width" floatLabelType="Never" width="70px"
                        value={this.props.width}
                        onChange={(e: any) => { this.props.setDiagramWidth(e.target.value); }}
                    />
                    <div className="m-10" />
                    <span className="m-r-5">height:</span>
                    <TextBoxComponent placeholder="Set Height" floatLabelType="Never" width="70px"
                        value={this.props.height}
                        onChange={(e: any) => { this.props.setDiagramHeight(e.target.value); }}
                    />
                </div>
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