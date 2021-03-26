import React from 'react';
import {View, StyleSheet} from 'react-native';
import GetFeaturedTechies from '../containers/featured-techies';

export default function Home({navigation}) {
  return (
    <View style={styles.header}>
      <View style={styles.content}>
        <GetFeaturedTechies navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 15,
    backgroundColor: '#d0d8e1',
  },
  content: {
    flex: 1,
  },
});