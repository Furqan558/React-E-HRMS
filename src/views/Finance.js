
import React, { Component } from 'react';

import { Row,Col } from 'react-bootstrap';
import FinanceData from "./services/FinanceData";
//import Demo from "../components/forms/Demo";
class Test extends Component{
  render(){
    return{}
  }
}
class Finance extends Component {
  constructor(){
    super();
    this.state={
      istrue:false,
      comp:Test,
    }
  }
    render(){
      console.log(this.state.istrue);
      console.log(this.state.comp);
      if (this.state.istrue==true){
        const Tag=this.state.comp;
        return(
          <>
          <div className="content-wrapper">
            <section className="content-header">
            <div className="container-fluid">
            <button style={{backgroundColor:"skyblue",color:"white",border:"skyblue",padding:"10px",paddingRight:"10px",paddingLeft:"10px"}} 
           onClick={()=>{ this.setState(()=>{
                            return {istrue:false};})}}>Back</button>
            </div>
            </section>
          <section className="content">
            <div className="container-fluid">
           
            <Tag/>
            </div>
            </section>

            </div>
          </>
        )
      }
      else{
        return ( 
            <div className="content-wrapper">
                <section className="content-header">
                  <Row>
                    {FinanceData.map((element,index)=>{
                        const Demo=element.TagName;
                        return <Col md="3" xs="12" sm="4"><div >
                          {/* <div className="col-12 col-sm-6 col-md-3"> */}
                          <div style={{cursor: "pointer"}} className="info-box" 
                          onClick={()=>{
                                    this.setState(()=>{
                                      return {istrue:true};
                                    })
                                    this.setState(()=>{
                                      return {comp:Demo};
                                    })
                          }}>
                            
                          <span className="info-box-icon bg-info elevation-1"><i className={element.icon}></i></span>
                          <div className="info-box-content">
                           
                            <span className="info-box-content">
                            {element.text}
                            </span>
                          </div>                          
                        </div>
                                             
                      </div>
                      </Col>                
                    })}
                </Row>
                </section>
            </div>
        )
    }
  }
}
export default Finance;