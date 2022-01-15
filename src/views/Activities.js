import React, { Component } from 'react';
import { Row,Col } from 'react-bootstrap';
import ActivitiesData from "./services/ActivitiesData";


export default class Activities extends Component {
    render(){
        return ( 
            <div className="content-wrapper">
                <section className="content-header">
                  <Row>
                    {ActivitiesData.map((element,index)=>{
                        return <Col md="3" xs="12" sm="4"><div >
                        <div style={{cursor: "pointer"}} className="info-box" onClick={()=>{
                          console.log("hello from card")
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