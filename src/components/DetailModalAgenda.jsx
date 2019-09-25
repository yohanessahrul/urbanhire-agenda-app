import React, { Component } from 'react';

export default class DetailModalAgenda extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: true,
      dataModalDetail: null
    }

  }

  componentDidMount () {
  
  }

  render() {
    let data = this.props.detailData;
    return (
      <React.Fragment>
        {/* Modal bootstrap */}
        <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: "none" }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalDialog">Your Agenda</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h1>x, September 2019</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iste rerum culpa neque perspiciatis distinctio labore enim asperiores odio similique odit aut nostrum ipsam officia expedita unde, ut ratione quibusdam.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
