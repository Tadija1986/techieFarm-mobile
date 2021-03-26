import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Home from '../screens/home';
import ViewDetails from '../screens/view-details';
import { navigatorStyle } from '../styles/global';
import Header from '../shared/header';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
  ViewDetails: {
    screen: ViewDetails
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: navigatorStyle.header,
    headerTitleAlign: 'center'
  }
});

export default HomeStack;