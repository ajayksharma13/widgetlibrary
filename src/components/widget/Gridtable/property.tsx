import { Formik, FormikProps } from "formik";
import * as React from "react";
import { Form, Grid, Header, Input, Segment, Table } from "semantic-ui-react";
import { BaseComponent } from "../../base";
import model from "./model";
import TabularModel from "./model";
import "./style.scss";



class TabularProperty extends BaseComponent<TProps, TState> {
  /*
   * default state
   */

  static defaultProps: TProps = {
    model: new TabularModel(),
    onUpdatePanel: () => {},
  };


  constructor(props:any) {
    super(props);
    
    this.state = {
      
      viewselect:"",
     paramselected:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.stateChange = this.stateChange.bind(this);
  }

  handleChange(value:any) {
    this.setState({ viewselect: value });   
    console.log(this.state.viewselect);
  }
  
  stateChange(value:any) {
    this.setState({ paramselected: value });
    console.log(this.state.paramselected);   
  }
  render() {
    const { model, onUpdatePanel } = this.props;
    return (
      <div className="flipcard-card property">
        <div className="property__header">
          <Header as="h4" className="header primary">
            Flipcard {model.gridName} {model.paramselect}
          </Header>
        </div>
        <div className="property__content">
          <Form>
          <Form.Select
              fluid
              placeholder="Select Tablular Type"
              options={[
                {
                  text: "Row Tabular",
                  value: "row",
                },
                {
                  text: "Column Tabular",
                  value: "column",
                }
              ]}
              name="viewselect"
              value={model.gridName}
               onChange={(e,data) => {
                model.assigngridtype(data.value);
                this.handleChange(data.value);
                onUpdatePanel();
                console.log(data.value);

               }}
             /> 
               { model.gridName==='row'  ?
                  <Form.Select
                  fluid
                  placeholder="params display"
                  options={[
                    {
                      text: "Current",
                      value: "current",
                    },
                    {
                    text: "Avg",
                    value: "avg",
                  },
                  {
                    text: "Max",
                    value: "max",
                  },
                
                ]}
                name="parameter"
                value={model.paramselect}
                onChange={(e,data) => {
                  model.assignparamsselect(data.value);
                  this.handleChange(data.value);
                  onUpdatePanel();  
                  console.log(model.paramselect);
                  }}
                  />  : ''    
                }
        
          </Form>

        </div>
      </div>
    );
  }
}

type TProps = {
  model: TabularModel;
  onUpdatePanel: Function;
 
};

type TState = {
  viewselect:string,
 paramselected:any

};

export { TabularProperty as default };