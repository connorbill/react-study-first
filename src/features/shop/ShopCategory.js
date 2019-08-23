import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import shopModule from './ShopCategory.module.scss';
export class ShopCategory extends Component {
  static propTypes = {
    shop: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="shop-shop-category">
        ShopCategory
        <div className={shopModule.ShopCategory}>
          shopModule.ShopCategory111
        </div>
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
)(ShopCategory);
