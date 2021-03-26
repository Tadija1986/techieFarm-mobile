import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {globalStyle} from '../styles/global';

export default function Header({navigation}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={globalStyle.headerContainer}>
      <View style={globalStyle.iconContainer}>
        <Icon
          name="menu"
          size={28}
          style={globalStyle.iconMenu}
          onPress={openMenu}
        />
      </View>
      <View style={globalStyle.header}>
        <Text style={globalStyle.headerText}>Techie Farm</Text>
      </View>
    </View>
  );
}