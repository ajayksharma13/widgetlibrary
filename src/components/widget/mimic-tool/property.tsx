import { Formik, FormikProps } from "formik";
import * as React from "react";
import { Form, Grid, Header, Input, Segment, Table } from "semantic-ui-react";
import { BaseComponent } from "../../base";
import MimicToolModel from "./model";
import "./style.scss";

/**
 * MimicTool Property
 */
class MimicToolProperty extends BaseComponent<TProps, TState> {
    /*
     * default state
     */
    state: TState = {};

    static defaultProps: TProps = {
        model: new MimicToolModel(),
        onUpdatePanel: () => { },
    };

    render() {
        const { model, onUpdatePanel } = this.props;
        return (
            <div className="MimicTool-card property">
                <div className="property__header">
                    <Header as="h4" className="header primary">
                        MimicTool
                    </Header>
                </div>
            </div>
        );
    }
}

type TProps = {
    model: MimicToolModel;
    onUpdatePanel: Function;
};

type TState = {};

export { MimicToolProperty as default };
