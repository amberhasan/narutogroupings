import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const KekkeiGenkaiRow = props => {
  const {name} = props.kekkei_genkai;
  return (
    <TouchableOpacity style={styles.kekkeiGenkaiItem} onPress={props.onPress}>
      <Image
        source={require('../assets/images/kekkei_genkai.png')}
        style={styles.kekkeiGenkaiImage}
      />
      <View style={styles.kekkeiGenkaiInfo}>
        <Text style={styles.kekkeiGenkaiName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  kekkeiGenkaiItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  kekkeiGenkaiImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  kekkeiGenkaiInfo: {
    flex: 1,
  },
  kekkeiGenkaiName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default KekkeiGenkaiRow;
