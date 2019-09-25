import React, { Component } from 'react';
import ContentTemplate from '../components/ContentTemplate';

export default class About extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: true,
    }
    this.reloadComponent = this.reloadComponent.bind(this);
  }

  componentDidMount () {
    
  }

  reloadComponent () {
    this.setState({
      isLoading: true
    })
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000);
  }

  render() {
    return (
      <div className="bg-gray">
        <div className="jumbotron jumbo">
          <h4 className="heading-jumbo">Calendar</h4>
        </div>
        <ContentTemplate/>
      </div>
    )
  }
}
