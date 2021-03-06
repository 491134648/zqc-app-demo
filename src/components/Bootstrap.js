/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, InteractionManager} from 'react-native';

import {COLOR, HIDDEN_NAV_BAR_STYLE} from '../config';
import * as navigation from '../navigation';
import * as components from './';

export default class Bootstrap extends Component {
  static navigatorStyle = HIDDEN_NAV_BAR_STYLE;

  constructor(props) {
    super(props);

    this.screenId = props.screenId || 'Bootstrap';
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      let {isReset=false, navigator, reset, bootstrap} = this.props;
      if (isReset) {
        reset();
      }
      bootstrap(navigator);
    });
  }

  render() {
    let {loading, processing, error} = this.props;
    return (
      <components.Layout
        loading={loading}
        processing={processing}
        errorFlash={error.flash}
      >
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <components.Image
            source={require('zaiqiuchang/res/img/zqc-icon-middle.png')}
            style={{borderRadius: 30}}
          />
          <Text style={styles.title}>在球场</Text>
        </View>
      </components.Layout>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    fontSize: 32,
    color: COLOR.textEmpha,
  },
});
