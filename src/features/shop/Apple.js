import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';


export class Apple extends Component {
  static propTypes = {
    shop: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };



  render() {
    return (
      <div className="shop-book-page">
        shop-apple
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
)(Apple);
