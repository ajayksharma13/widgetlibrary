import React from "react";
import { BaseComponent } from "../base";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Input,
  List,
  Segment,
} from "semantic-ui-react";

import Gridtable,{TabularModel,TabularProperty } from "../widget/Gridtable";
import "./style.scss";
import WidgetPanel from "../widget/panel";
import Rowgrid from "../widget/Gridtable/Rowtable";
import GridWidget from "../widget/Gridtable";
import ColumnTabular from "../widget/Gridtable/Columntable";

/**
 * Start Up component
 */
class StartUp extends BaseComponent<TProps, TState> {
  /**
   * default props
   */
  static defaultProps: TProps = {
   tabularRender:"",
tabularData :"",
  };


  /**
   * default state
   */
  state: Readonly<TState> = {
    width: "500",
    height: "300",
    
  };

  componentDidMount() {
    this.onInit();
  }

  /**
   * @description init method of component
   */
  private async onInit() {}

  /**
   * render
   */

  tabularRender = {
    headerTitle: "Tabular Widget",
    params: [
      {
        id: 1,
        name:'temperature',  
        unit :"K"
      },
      {
        id: 2,
       name:"AC",
       unit:"I"
      },
     
      {
        id:3,
       name:"Energy",
       unit:"KJ"
       
      },      
    ],

    refreshTime: 2, //  5 sec
    DisplaySignificant:[
       { 
          id:10,
          significances:"Current"
      },

      {
        id:11,
        significances:"Avg"
      },

       { 
         id:12,
         significances:"Max",
      },

    ],
  };

 

  tabularRequestData = {
    params: [1, 2,3],
  };
 tabularData=  [
	{
		id: 1,
		value: [
			{
				id: 10,			
				name: 'Current',
				value: 10.23
			},
			{
				id: 11,			
				name: 'Avg',
				value: 9.33
			},
			{
				id: 12,			
				name: 'Max',
				value: 15.36
			}
		]
	},
	{
		id: 2,
		value: [
			{
				id: 10,			
				name: 'Current',
				value: 11.23
			},
			{
				id: 11,			
				name: 'Avg',
				value: 10.33
			},
			{
				id: 12,			
				name: 'Max',
				value: 16.36
			}
		]
	},
	{
		id: 3,
		value: [
			{
				id: 10,			
				name: 'Current',
				value: 12.23
			},
			{
				id: 11,			
				name: 'Avg',
				value: 11.33
			},
			{
				id: 12,			
				name: 'Max',
				value: 17.36
			}
		]
	}
]
	
	  
 
  render() {
    const { width = "500", height = "300" } = this.state;
    const tabularModel = TabularModel.instance();
    const headerTitle = this.tabularRender.headerTitle;
    return (
      <Grid columns="2">
        <Grid.Column>
          <Segment basic>
            <Header>Widget Template</Header>
            <Input
              label="Width"
              value={width}
              onChange={(e) => this.setState({ width: e.target.value })}
            ></Input>
            <Input
              label="Height"
              value={height}
              onChange={(e) => this.setState({ height: e.target.value })}
            ></Input>
          </Segment>
          <Segment
            className="p-0"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              margin: "20px",
            }}
          >
            <WidgetPanel title={headerTitle} Property={TabularProperty} model={tabularModel} > 
              {() => (
                // <Flipcard
                //   {...this.flipCardRender}
                //   data={this.flipcardData}
                //   model={flipcardModel}
                // ></Flipcard>
              // <ColumnTabular Width={this.state.width} Height={this.state.height}/> 
                //<Rowgrid/>
              <GridWidget  newdata={this.tabularRender}  model={tabularModel} Height={this.state.height} Width={this.state.width} data={this.tabularData}> </GridWidget>
               
              )}
            </WidgetPanel>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <div
            style={{
              fontSize: "1.2em",
              margin: "20px",
            }}
          >
            <div>
              <strong>Flipcard Render UI JSON</strong>
              <pre>{JSON.stringify(this.tabularRender, null, 4)}</pre>
            </div>

            <div>
              <strong>Flipcard Data Request JSON</strong>
              <pre> {JSON.stringify(this.tabularRequestData, null, 4)}</pre>
            </div>

            <div>
              <strong>Flipcard DATA Response JSON</strong>
              <pre>{JSON.stringify(this.tabularData, null, 4)}</pre>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

/**
 * State
 */
type TState = {
  width: string;
  height: string;

};

/**
 * State
 */
type TProps = {
 tabularRender:any;
 tabularData:any;
};

export { StartUp as default };
