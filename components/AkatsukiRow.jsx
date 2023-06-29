import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const AkatsukiRow = props => {
  console.log('props', props);
  const {name} = props.akatsuki;
  return (
    <TouchableOpacity style={styles.akatsukiItem} onPress={props.onPress}>
      <Image
        source={require('../assets/images/akatsuki.png')}
        style={styles.akatsukiImage}
      />
      <View style={styles.akatsukiInfo}>
        <Text style={styles.akatsukiName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  akatsukiItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  akatsukiImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  akatsukiInfo: {
    flex: 1,
  },
  akatsukiName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default AkatsukiRow;
