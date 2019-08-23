import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import './DefaultPage.scss';

export class DefaultPage extends Component {
  static propTypes = {
    lottery: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };


  render() {
    console.log(this.props)
    return (
      <div className="lottery-default-page">
        lottery-default-page
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    lottery: state.lottery
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
)(DefaultPage);
