import React, { Component } from 'react';
// import history from '../history';
import swal from 'sweetalert';

export default class AddAgendaModalForm extends Component {
  constructor (props) {
    super (props)
    this.state = {
      modal: false,
      date: null,
      title: null,
      detail: null,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.modalShowHide = this.tutup.bind(this);
  }

  handleOnChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit (e) {
    e.preventDefault();
    let { title, detail } = this.state;
    let date = Number(this.state.date.split('-')[2]);
    let dataCalendar = JSON.parse(localStorage.getItem('calendar'))

    for (let i=0; i<dataCalendar.length; i++) {
      // eslint-disable-next-line
      if (dataCalendar[i].date == date) {
        let payload = {
          title: title,
          desc: detail
        }
        dataCalendar[i].agenda.push(payload)
      }
    }
    localStorage.setItem('calendar', JSON.stringify(dataCalendar))
    swal("Good job!", "Anda berhasil menambahkan 1 agenda baru!", "success");

    setTimeout(() => {
      window.location.reload()
    }, 2000);

  }

  modalShowHide () {
    this.setState({ modal: !this.state.modal })
  }

  tutup (e) {
    // e.preventDefault();
    this.setState({
      modal: false
    })
  }

  render() {
    let { modal } = this.state;
    let modalFade = () => {
      if (modal === false) {
        return "modal fade"
      } else {
        return "modal fade show"
      }
    }

    let displayClass = () => {
      if (modal === false) {
        return "none !important"
      } else {
        return "block !important"
      }
    }

    let ariaHidden = () => {
      if (modal === false) {
        return "true"
      } else {
        return "false"
      }
    }
    
    return (
      <React.Fragment>
        {/* Modal bootstrap */}
        <div className={modalFade()} id="createAgenda" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={ariaHidden()} style={{ display: displayClass()}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Agenda</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.modalShowHide}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Tanggal</label>
                    <input type="date" name="date" min="2019-09-01" max="2019-09-30" className="form-control" onChange={this.handleOnChange}></input>
                  </div>
                  <div className="form-group">
                    <label>Judul</label>
                    <input type="text" name="title" className="form-control" placeholder="Judul Agenda" onChange={this.handleOnChange}></input>
                  </div>
                  <div className="form-group">
                    <label>Detail Agenda</label>
                    <textarea type="text" name="detail" className="form-control" placeholder="Detail Agenda" onChange={this.handleOnChange}></textarea>
                  </div>
                </form>
                  <button onClick={this.modalShowHide}>Tutup</button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.handleOnSubmit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
