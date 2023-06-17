import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const KaraRow = props => {
  const {name} = props.kara;
  return (
    <TouchableOpacity style={styles.karaItem} onPress={props.onPress}>
      <Image
        source={require('../assets/images/kara.png')}
        style={styles.karaImage}
      />
      <View style={styles.karaInfo}>
        <Text style={styles.karaName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  karaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  karaImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  karaInfo: {
    flex: 1,
  },
  karaName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default KaraRow;
