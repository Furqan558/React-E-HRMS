import React, { Component } from 'react';
class Demo2 extends Component{
    render(){
        return(
            <>
      <div classname="row">
        <div classname="col-md-6">
          <div classname="card card-primary">
            <div classname="card-header">
              <h3 classname="card-title">Quick Example</h3>
            </div>
            <form role="form">
              <div classname="card-body">
                <div classname="form-group">
                  <label htmlfor="exampleInputEmail1">Email address</label>
                  <input type="email" classname="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <div classname="form-group">
                  <label htmlfor="exampleInputPassword1">Password</label>
                  <input type="password" classname="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div classname="form-group">
                  <label htmlfor="exampleInputFile">File input</label>
                  <div classname="input-group">
                    <div classname="custom-file">
                      <input type="file" classname="custom-file-input" id="exampleInputFile" />
                      <label classname="custom-file-label" htmlfor="exampleInputFile">Choose file</label>
                    </div>
                    <div classname="input-group-append">
                      <span classname="input-group-text" id>Upload</span>
                    </div>
                  </div>
                </div>
                <div classname="form-check">
                  <input type="checkbox" classname="form-check-input" id="exampleCheck1" />
                  <label classname="form-check-label" htmlfor="exampleCheck1">Check me out</label>
                </div>
              </div>
              <div classname="card-footer">
                <button type="submit" classname="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>



            </>
        )
    }
}
export default Demo2;