/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {HIDDEN_NAV_BAR_STYLE} from '../../config';
import * as components from '../';

export default class PreLogin extends Component {
  static navigatorStyle = HIDDEN_NAV_BAR_STYLE;

  constructor(props) {
    super(props);

    this.screenId = props.screenId || 'PreLogin';
  }

  render() {
    let {navigator, loading, processing, error} = this.props;
    return (
      <components.Layout
        loading={loading}
        processing={processing}
        errorFlash={error.flash}
        containerStyle={{justifyContent: 'center'}}
      >
        <components.Image
          source={require('zaiqiuchang/res/img/zqc-icon-middle.png')}
          style={{alignSelf: 'center', borderRadius: 15}}
        />
        <components.Button
          text='登录'
          onPress={() => navigator.push({screen: 'zqc.Login', title: '登录'})}
          containerStyle={{marginTop: 100}}
          textStyle={{fontSize: 16}}
        />
        <components.Button
          text='注册'
          onPress={() => navigator.push({screen: 'zqc.RegisterMobile', title: '注册'})}
          containerStyle={{marginTop: 30}}
          textStyle={{fontSize: 16}}
        />
      </components.Layout>
    );
  }
}

const styles = StyleSheet.create({});
