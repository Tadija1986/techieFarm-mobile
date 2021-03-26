import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/login';
import Signup from '../screens/signup';
import { navigatorStyle } from '../styles/global';

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Techie Farm'
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'Techie Farm'
    }
  }
}

const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: navigatorStyle.header,
    headerTitleAlign: 'center'
  }
});

export default LoginStack;