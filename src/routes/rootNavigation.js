import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginStack from '../routes/loginStack';
import HomeStack from '../routes/homeStack';
import AboutStack from '../routes/aboutStack';

const LoginNavigator = createDrawerNavigator(
  {
    Login: {
      screen: LoginStack
    }
  }
)

const MenuNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    About: {
      screen: AboutStack,
    },
  },
);

const screens = {
  Login: {
    screen: LoginNavigator,
    navigationOptions: {
      headerShown: false,
    }
  },
  Menu: {
    screen: MenuNavigator,
    navigationOptions: {
      headerShown: false,
    }
  }
}

const RootNavigator = createStackNavigator(screens);

export default createAppContainer(RootNavigator);
