import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import './Book.scss';


export class Book extends Component {
  static propTypes = {
    shop: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };



  render() {
    const element = <h1>Hello, world!</h1>;
    return (
      <div className="shop-book-page">
        shop-book-page
        <div className="book">there are many books.</div>
        {element}

      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    shop: state.shop,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
