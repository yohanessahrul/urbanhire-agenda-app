import React, { Component } from 'react';
import UserDetail from '../components/UserDetail';
import CalenderBoard from './CalenderBoard';
import AgendaBoard from './AgendaBoard';

export default class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      boardLoad: "/agenda"
    }
  }

  componentDidMount () {
    this.setState({
      boardLoad: window.location.pathname
    })
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 500);
  }

  render() {
    if (!this.state.isLoading) {
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
                    <UserDetail reload={this.props.reload}/>
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
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="loader-wrap">
                <p>Sedang memuat..</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
