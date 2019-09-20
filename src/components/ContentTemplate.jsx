import React, { Component } from 'react';
import UserDetail from '../components/UserDetail';
import CalenderBoard from './CalenderBoard';
import AgendaBoard from './AgendaBoard';

export default class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      boardLoad: "/agenda"
    }
  }

  componentDidMount () {
    this.setState({
      boardLoad: window.location.pathname
    })
  }

  render() {
    const loadingContent = () => {
      if (this.state.boardLoad === "/agenda") {
        return (<AgendaBoard/>)
      } else {
        return (<CalenderBoard/>)
      }
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br/>
            <div className="cointainer">
              <div className="row">
                <div className="col-md-3">
                  <UserDetail/>
                </div>
                <div className="col-md-9">
                  {loadingContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
