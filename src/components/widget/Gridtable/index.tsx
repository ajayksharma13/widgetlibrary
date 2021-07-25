import React from "react";
import { Grid, Header, Table } from "semantic-ui-react";
import { BaseComponent } from "../../base";
import TabularModel from "./model";
import TabularProperty from "./property"
import "./style.scss";
import Rowgrid from "./Rowtable"
import Columngrid from "./Columntable";

  class GridWidget extends BaseComponent<TProps,any> {
    constructor(props:TProps){
      super(props); {
      this.props.model.gridName='column'
     }
  }


    state: TState = {
      // currentParamIndex: -1,
    };
  
    static defaultProps: TProps = {
      model: new TabularModel(),
      Height: "",
      Width: "" ,
    data:{},
    newdata:{},
    
    };
  
 
    componentDidMount() {
    }
  
 
    componentWillUnmount() {
    }
  
    render() {
    
      const { model } = this.props;
  
      console.log(model.gridName);
       console.log(model.paramselect);
      
      return (
        <div>
          <div>
            {  model.gridName=== 'row'  ? <Rowgrid height={(parseInt(this.props.Height)-150).toString()} width={this.props.Width}  selectparam={model.paramselect} renderData= {this.props.data} newrender={this.props.newdata} /> :
              model.gridName === 'column' ? <Columngrid renderData={this.props.data} newrender={this.props.newdata} />:''
              }
              </div>
        
        </div>
      );
    }
  }
  
  type TProps = {

    model: TabularModel;
   Height:string;
   Width:string
 data:any
 newdata:any
 
  };
  
  type TState = {
  };
  
  export {GridWidget as default, TabularModel, TabularProperty };
  
