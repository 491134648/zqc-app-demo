/**
 * 在球场
 * zaiqiuchang.com
 */

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as components from '../../components';
import * as actions from '../../actions';

function mapStateToProps(state) {
  let {loading, processing, error, object, account} = state;
  return {
    loading,
    processing,
    error,
    object,
    account,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submit: actions.registerProfileSubmit,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(components.RegisterProfile);
