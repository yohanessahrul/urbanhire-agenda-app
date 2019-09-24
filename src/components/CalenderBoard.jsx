import React, { Component } from 'react';
import myData from '../../src/data.json'

export default class CalenderBoard extends Component {
  constructor (props) {
    super (props)
    this.state = {
      showDetailOnDate: null
    }
    this.showDetailDate = this.showDetailDate.bind(this);
    this.deleteShowDate = this.deleteShowDate.bind(this);
  }

  deleteShowDate () {
    this.setState({
      showDetailOnDate: null
    })
  }

  showDetailDate (date) {
    console.log("show date ", date)
    this.setState({
      showDetailOnDate: date
    })
  }

  render() {
    const printCalendar = () => {
      let calendarJSON = myData.data

      const showDetailClass = (currentState, date) => {
        if (currentState === date) {
          console.log("date sama")
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
              {(data.agenda.length > 0)? `${data.agenda.length} Agenda` : `Tidak ada Agenda`}
            </div>
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
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
