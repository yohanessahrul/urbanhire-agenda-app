import React, { Component } from 'react';
import myData from '../../src/data.json';
import DetailModalAgenda from './DetailModalAgenda.jsx';

export default class CalenderBoard extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: true,
      isLoadingModal: true,
      showDetailOnDate: null,
      showModalAgendaOnDate: null,
      indexModal: null
    }
    this.showDetailDate = this.showDetailDate.bind(this);
    this.deleteShowDate = this.deleteShowDate.bind(this);
    this.showModalIndex = this.showModalIndex.bind(this);
    this.modalLoader = this.modalLoader.bind(this);
    this.indexModal = this.indexModal.bind(this);
  }

  componentDidMount () {
    if (!localStorage.getItem('calendar')) {

      console.log('Bikin local storage calendar')
      localStorage.setItem('calendar', JSON.stringify(myData.data))
      this.setState({ isLoading: false })
    } else {
      console.log('local Storage calendar sudah ada')
      this.setState({ isLoading: false })
    }
  }

  deleteShowDate () {
    this.setState({
      showDetailOnDate: null
    })
  }

  showDetailDate (date) {
    // console.log("show date ", date)
    this.setState({
      showDetailOnDate: date
    })
  }

  showModalIndex (data) {
    console.log("show modal index =", data)
    this.setState({
      showModalAgendaOnDate: data
    })
    this.modalLoader()
    // return data
  }

  modalLoader () {
    this.setState({
      isLoadingModal: false
    })
  }

  indexModal (i) {
    console.log('setting index')
    this.setState({
      indexModal: i
    })
  }

  render() {
    if (this.state.isLoading) {
      return "Loading Calendar"
    } else {
      const printCalendar = () => {
        let calendarJSON = JSON.parse(localStorage.getItem('calendar'))
  
        const showDetailClass = (currentState, date) => {
          if (currentState === date) {
            return "showDetailDate"
          } else {
            return "hideDetailDate"
          }
        }
  
        const loopCalendar = calendarJSON.map((data, i) => {
          return (
            <div className="grid-item" key={i} onMouseLeave={() => this.deleteShowDate()} onMouseEnter={() => this.showDetailDate(data.date)}>
              <p>{data.date}</p>
              <div className={showDetailClass(this.state.showDetailOnDate, data.date)}>
                {(data.agenda.length > 0) ?
                  <p className="agenda-string">{`${data.agenda.length} Agenda`}</p>
                  :
                  <p className="agenda-string-null">Tidak ada Agenda</p>
                }
                {(data.agenda.length > 0) ?
                  <button className="btn btn-sm btn-primary btn-detail-agenda" data-toggle="modal" data-target=".bd-example-modal-lg" onClick={() => this.indexModal(i)}>Lihat</button>
                  :
                  ""
                }
              </div>
              <DetailModalAgenda detailData={data} indexModal={this.indexModal}/>
            </div>
          )
        })
        
        return loopCalendar;
      }
      return (
        <React.Fragment>
          <div style={{ width: "100%", background: "white", border: "thin solid #e0dddd", padding: "10px", borderRadius: "5px" }}>
            <h4>&nbsp;&nbsp;&nbsp;September 2019</h4>
            <div className="col-md-12">
              <div className="grid-container">
                <div className="grid-item bg-calendar">M</div>
                <div className="grid-item bg-calendar">S</div>
                <div className="grid-item bg-calendar">S</div>  
                <div className="grid-item bg-calendar">R</div>
                <div className="grid-item bg-calendar">K</div>
                <div className="grid-item bg-calendar">J</div>  
                <div className="grid-item bg-calendar">S</div>
                {printCalendar()}
                {/* { (this.state.isLoadingModal) ?
                "" :
                <DetailModalAgenda detailData={this.state.showModalIndex}/>
                } */}
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}
