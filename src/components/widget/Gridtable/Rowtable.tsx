import * as React from 'react';
import { Column, ColumnDirective, ColumnsDirective, Grid, GridComponent,Page,Inject ,PageSettingsModel,Resize} from '@syncfusion/ej2-react-grids';
import axios from 'axios';
import './tabular.css'
import { GridRow, LabelDetail, StrictTableRowProps } from 'semantic-ui-react';
import { TabularModel } from '.';
import './tabular.css';
import model from './model';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react';

class Rowgrid extends React.Component<TProps,TState>{

  constructor(props:TProps) {
    super(props);{
      
    }
                    
}
newDataJson:any =[];

public getdata(){
 this. newDataJson = [];
 const {newrender:{DisplaySignificant}}=this.props;
 const {newrender:{params}}=this.props;
 const {renderData}=this.props;

//   for (let i = 0; i < params.length; i++) {
//     for (let j = 0; j < renderData.length; j++) {
//       if (renderData[j].id ==params[i].id) {
//         var dataObject :any = {};
//         dataObject.name = params[i].name;      
//         var values = [];
//         for (let k = 0; k < renderData[j].value.length; k++) {
//           let keyd = renderData[j].value[k].name;
//           let value = renderData[j].value[k].value;
                   
//           var myJson:any = {};
//           myJson[keyd]=value;
       
//           values.push(myJson);
//         }        
//         dataObject.detail = values;
//       }
//     }
//    this. newDataJson.push(dataObject);
//   }
//   return (this.newDataJson) 
// }

var dataObject :any = {};
params.forEach((uid: any)=> {
 renderData.forEach((entry: {name:any,value:any,id:any}) => { 
    if (entry.id ==uid.id) {
     dataObject  = {};
      dataObject.name = uid.name;      
      var values:any = [];
      var renderDatavalue=entry.value;
      renderDatavalue.forEach((elements: any)=> { 
        let keyd = elements.name;
        let value = elements.value;                 
        var myJson:any = {};
        myJson[keyd]=value;    
        values.push(myJson);
      });  
      dataObject.detail = values;
    }
  });
 this. newDataJson.push(dataObject);

});

return (this.newDataJson) 
}



public pageSettings: PageSettingsModel = {pageSizes: true, pageSize: 3}



renderContent=(data:string)=>{
let temp:any=<></>;
  switch(data){
  case 'current':{
    temp= <ColumnDirective field= 'detail.0.Current' headerText="Current"/> ; 
    break;
  }
  case 'avg':{
    temp =<ColumnDirective field='detail.1.Avg' headerText="Avg"/>;
    break;
  }
   case 'max':{
    temp = <ColumnDirective field="detail.2.Max" headerText="Max"/>;
    break;
   }
   default:{
   }
}
return temp;
}
public render() { 
 return(
  <div>
<GridComponent dataSource={this.getdata()} allowPaging={true} pageSettings={this.pageSettings} allowResizing={true} height= {this.props.height} width={this.props.width}> 
<ColumnsDirective>
<ColumnDirective field='name'/>

{/* {this.props.selectparam==='current' ? ( <ColumnDirective field= 'detail.0.Current' headerText="Current"/> ): this.props.selectparam==='avg'?(<ColumnDirective field='detail.1.Avg' headerText="Avg"/>): this.props.selectparam==='max'? (<ColumnDirective field="detail.2.Max" headerText="Max"/>):''} */}

{ this.renderContent(this.props.selectparam)};

</ColumnsDirective>

<Inject services={[Page,Resize]}/>
 </GridComponent>



  </div>
 );

}

}

type TProps={    
 renderData:any
 newrender:any
 selectparam:any
 height:any
 width:any

   } ;

type TState={
 data:any;
   };


export default Rowgrid;




