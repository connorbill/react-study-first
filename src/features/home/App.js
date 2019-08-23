import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: '',
  };

  render() {
    return (
      <div className="home-app">
        <div className="page-container">
          <div className="home-nav">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/examples">examples</Link>
              </li>
              <li>
                <Link to="/shop">shop</Link>
              </li>
            </ul>
          </div>
          <div className="home-content">{this.props.children}</div>

        </div>
      </div>
    );
  }
}
