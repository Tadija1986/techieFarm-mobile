import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

const TechieItem = ({techie, navigation}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemView}>
        <Image style={styles.img} source={{uri: techie.profileImageURL}} />
        <View>
          <Text style={styles.itemViewText}>
            {techie.firstName} {techie.lastName}
          </Text>
          <Text style={styles.itemViewText}>{techie.customTitle}</Text>
        </View>
        <Button
          color="#12d3cf"
          title="View details"
          onPress={() => navigation.navigate('ViewDetails', {id: techie.id})}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 5,
    borderColor: 'gray',
  },
  itemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemViewText: {
    fontSize: 15,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default TechieItem;
