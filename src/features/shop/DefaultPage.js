import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import './DefaultPage.scss';
import shopModule from './DefaultPage.module.scss';
import styles from './shop-style.module.scss';

export class DefaultPage extends Component {
  static propTypes = {
    shop: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };


  render() {
    console.log(this.props)
    return (
      <div className="shop-default-page">
        Page Content: shop/DefaultPage
        <div className="shop-module">
          shop-module
        </div>
        <div className={shopModule.shopDefaultModule}>
          shopTest
          <div className={shopModule.itemA}>itemA
            <div>
              <div>
                <div className={shopModule.itemF}>itemF</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.shopStyle}>shop-style,test</div>
        <div>
          hello,22212

        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    shop: state.shop
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
