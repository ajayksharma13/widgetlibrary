import * as React from 'react';
import { ColumnDirective, ColumnsDirective, Filter, FilterSettingsModel, GridComponent,PageSettingsModel,Grid , Resize,RowDataBoundEventArgs, columnSelectionComplete, getDatePredicate} from '@syncfusion/ej2-react-grids'
//import { data } from './datasource';
// import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
//import {getdata} from './datasource';
import { useState,useEffect  } from 'react';
import axios from 'axios';
//import _ from 'lodash';
import './tabular.css';
import {  Inject, Page } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Header } from 'semantic-ui-react';
import { threadId } from 'worker_threads';
import { sign } from 'crypto';

    class Columngrid extends React.Component<Tprops, Tstate> {
        
        
        constructor(props:Tprops) {
            super(props);{
              
            }
                            
        }
      
        newDataJson:any =[];
        public pageSettings: PageSettingsModel = {  pageSizes: true, pageSize: 3}
        public inlineStyle: object = { width: '100px'};
        private gridInstance: Grid | null | undefined;

        public onLoad() {
          if (this.gridInstance) {
            /** height of the each row */
            const rowHeight: number = this.gridInstance.getRowHeight();
            /** Grid height */
            const gridHeight: number = this.gridInstance.height as number;
            /** initial page size */
            const pageSize: number = this.gridInstance.pageSettings.pageSize as number;
            /** new page size is obtained here */
            const pageResize: any = (gridHeight - (pageSize * rowHeight)) / rowHeight;
            this.gridInstance.pageSettings.pageSize = pageSize + Math.round(pageResize);
          }
        }


      public getcolumndata()
      {
       this. newDataJson = [];
       const {newrender:{DisplaySignificant}}=this.props;
       const {newrender:{params}}=this.props;
       const {renderData}=this.props;

    //    for(let a=0;a<DisplaySignificant.length;a++)   {  
    //      var objdetailall :any = [];
    //      var obj:any  = {};
    //           obj.name=DisplaySignificant[a].significances
    //      for (let j = 0; j < renderData.length; j++) {
    //        let key;
    //        for(let m=0;m<params.length;m++){
    //  if(params[m].id==renderData[j].id){
    //    key=params[m].name;
    //  }
    //   }
    //      for (let k = 0; k < renderData[j].value.length; k++) {  
    //          if( DisplaySignificant[a].id==renderData[j].value[k].id){
    //            var objdetail :any= {};
    //            objdetail[key] = renderData[j].value[k].value;  
    //           objdetailall.push(objdetail);
    //           break;
    //          }
    //        }
    //      }
    //     obj.detail=objdetailall;
    //     this.newDataJson.push(obj);
    //      console.log(JSON.stringify(obj));     
    //     }    
    //      console.log(JSON.stringify(this.newDataJson));
    //      return(this.newDataJson);
    //    };

    var objdetailall :any = [];
    var obj:any  = {};
   DisplaySignificant.forEach( (sign: any)=> {   
      objdetailall  = [];
      obj={};
       obj.name=sign.significances
      renderData.forEach((entry:{name:any,value:any,id:any}) => { 
        let key:any;
        params.forEach((uid: any) => {      
     if(uid.id==entry.id){
    key=uid.name;
    console.log(key);
     }//4for
});
for (let k = 0; k < entry.value.length; k++) {  
  if( sign.id==entry.value[k].id){
    var objdetail :any= {};
    objdetail[key] = entry.value[k].value;  
   objdetailall.push(objdetail);
   break;
  }
}
   });//2for
     obj.detail=objdetailall;
     this.newDataJson.push(obj);
      console.log(JSON.stringify(obj));     
    });//1st for loop   
      console.log(JSON.stringify(this.newDataJson));
      return(this.newDataJson);
  };
   
      public render() {
            this.onLoad = this.onLoad.bind(this);      
            return (    
                <div>
                          
              <GridComponent  id="overviewgrid" dataSource={this.getcolumndata()}  allowPaging={true} pageSettings={this.pageSettings} allowResizing={true} frozenRows={0}  ref={grid => this.gridInstance = grid}  load={this.onLoad}  >
<ColumnsDirective>
<ColumnDirective field='name'/>
<ColumnDirective field='detail.0.temperature' headerText='Temperature'/>
<ColumnDirective field='detail.1.AC' headerText='AC'/>
<ColumnDirective field='detail.2.Energy' headerText='Energy'/>

</ColumnsDirective>

   <Inject services={[Page,Resize]}/>
   </GridComponent> 
         </div>
                          
            );
        }
    }
      
    
   type Tprops={
   renderData:any;
   newrender:any;
   
   } ;
   type Tstate={

   
   
   
   };

  
        export default Columngrid ;


function getValue(arg0: string, data: Object | undefined) {
    throw new Error('Function not implemented.');
}






