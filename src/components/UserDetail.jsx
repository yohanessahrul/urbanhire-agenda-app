import React, { Component } from 'react';
import AddAgendaModalForm from './AddAgendaModalForm';


export default class UserDetail extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

  componentDidMount () {
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ width: "100%", background: "white", border: "thin solid #e0dddd", padding: "25px", borderRadius: "5px",  }}>
          <div className="image-profile-wrapper">
            <img src="" alt="avatar"/>
          </div>
          <h3>Yosaru</h3>
          <p>Keep moving we will find a way</p>
          <br/>
          <h5>3 Agenda Terdekat</h5>
          <ul>
            <li>
              <h6>Deadline UI/UX</h6>
              <p>3 September 2019</p>
            </li>
            <li>
              <h6>Beli Aqua Galon</h6>
              <p>5 September 2019</p>
            </li>
            <li>
              <h6>Bayar Kost</h6>
              <p>15 September 2019</p>
            </li>
          </ul>
          <button className="btn btn-primary" data-toggle="modal" data-target="#createAgenda">
            Tambah Agenda
          </button>
          <AddAgendaModalForm reload={this.props.reload}/>
        </div>
        <br/>
      </React.Fragment>
    )
  }
}
