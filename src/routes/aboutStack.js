import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import About from '../screens/about';
import { navigatorStyle } from '../styles/global';
import Header from '../shared/header';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: navigatorStyle.header,
    headerTitleAlign: 'center'
  }
});

export default AboutStack;