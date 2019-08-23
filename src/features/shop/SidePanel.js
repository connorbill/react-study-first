import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import './SidePanel.scss';
import { Icon } from 'antd';

export class SidePanel extends Component {
  static propTypes = {
    shop: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="shop-side-panel">
        <ul>
          <li>
            <Link to="/">
              <div className="middle-left">
                <Icon type="left" />Back
              </div>
            </Link>
          </li>
          <li>
            <Link to="/shop">shop</Link>
          </li>
          <li>
            <Link to="/shop/category">category Demo</Link>
          </li>
          <li>
            <Link to="/shop/book">book Demo</Link>
          </li>
          <li>
            <Link to="/shop/apple"> apple</Link>
          </li>
          <li>
            <Link to="/shop/food"> food</Link>
          </li>
        </ul>
        <div className="memo">
          This is a shop feature
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
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
