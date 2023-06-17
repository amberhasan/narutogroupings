import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const TailedBeastRow = props => {
  const {name} = props.tailedBeast;
  return (
    <TouchableOpacity style={styles.tailedBeastItem} onPress={props.onPress}>
      <Image
        source={require('../assets/images/tailed_beasts.png')}
        style={styles.tailedBeastImage}
      />
      <View style={styles.tailedBeastInfo}>
        <Text style={styles.tailedBeastName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tailedBeastItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  tailedBeastImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  tailedBeastInfo: {
    flex: 1,
  },
  tailedBeastName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default TailedBeastRow;
