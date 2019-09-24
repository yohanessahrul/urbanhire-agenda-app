import React, { Component } from 'react';
import ContentTemplate from '../components/ContentTemplate';

export default class Contact extends Component {
  render() {
    return (
      <div className="bg-gray">
        <div className="jumbotron jumbo">
          <h4 className="heading-jumbo">Agenda</h4>
        </div>
        <ContentTemplate/>
      </div>
    )
  }
}
