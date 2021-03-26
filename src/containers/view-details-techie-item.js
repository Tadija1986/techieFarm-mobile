import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const ViewDetailsTechieItem = ({techie}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemView}>
        <Image style={styles.img} source={{uri: techie.profileImageURL}} />
        <View>
          <Text style={styles.itemViewText}>
            {techie.firstName} {techie.lastName}
          </Text>
          <Text style={styles.itemViewText}>{techie.customTitle}</Text>
          <Text style={styles.itemViewText}>{techie.availability}</Text>
          <View style={styles.itemViewSummary}>
            <Text style={styles.itemViewSummaryText}>{techie.summary}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    height: 130,
    backgroundColor: '#f8f8f8',
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemViewText: {
    position: 'relative',
    paddingLeft: 120,
    fontSize: 15,
  },
  img: {
    position: 'absolute',
    top: 10,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  itemViewSummary: {
    marginTop: 60,
    width: 400,
  },
  itemViewSummaryText: {
    fontSize: 15,
  },
});

export default ViewDetailsTechieItem;
