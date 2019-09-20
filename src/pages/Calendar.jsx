import React, { Component } from 'react';
import ContentTemplate from '../components/ContentTemplate';

export default class About extends Component {
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
