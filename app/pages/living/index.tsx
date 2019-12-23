import * as React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { ConnectState } from 'models/connect';
import GlobalStyles, { LivingStyles } from 'styles/index.css';
import { NavigationInjectedProps } from 'react-navigation';

// 图片引入
import bgPage from 'assets/images/bg-page.png';
// const livingImgHorn = require('assets/images/living-img-horn.gif');
import livingImgHorn from 'assets/images/living-img-horn.gif';

export interface LivingProps extends NavigationInjectedProps {
  user: any;
}

class Living extends React.Component<LivingProps> {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={bgPage} style={[GlobalStyles.container, LivingStyles.mainBox]}>
          <Text style={LivingStyles.title}>起床提醒</Text>
          <View style={LivingStyles.timeBox}>
            <Text style={LivingStyles.time}>15:20</Text>
            <Text style={LivingStyles.date}>2019年12月3日 星期二</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.replace('Home')}>
            <Image style={{marginLeft: 200}} source={livingImgHorn}/>
          </TouchableOpacity>
      </ImageBackground>
    )
  }
}

export default connect()(Living);
