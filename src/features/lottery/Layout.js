import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="lottery-layout">
        <div className="lottery-page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
