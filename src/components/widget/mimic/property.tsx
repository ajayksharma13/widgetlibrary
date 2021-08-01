import { Formik, FormikProps } from "formik";
import * as React from "react";
import { Form, Grid, Header, Input, Segment, Table } from "semantic-ui-react";
import { BaseComponent } from "../../base";
import MimicModel from "./model";
import "./style.scss";

/**
 * MimicTool Property
 */
class MimicProperty extends BaseComponent<TProps, TState> {
    /*
     * default state
     */
    state: TState = {};

    static defaultProps: TProps = {
        model: new MimicModel(),
        onUpdatePanel: () => { },
    };

    render() {
        const { model, onUpdatePanel } = this.props;
        return (
            <div className="MimicTool-card property">
                <div className="property__header">
                    <Header as="h4" className="header primary">
                        Mimic
                    </Header>
                </div>
            </div>
        );
    }
}

type TProps = {
    model: MimicModel;
    onUpdatePanel: Function;
};

type TState = {};

export { MimicProperty as default };
