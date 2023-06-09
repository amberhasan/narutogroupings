import React from 'react';
import {TouchableOpacity, Image, View, Text, StyleSheet} from 'react-native';

const VillageRow = props => {
  const {name, image} = props.village;

  return (
    <TouchableOpacity style={styles.villageItem} onPress={props.onPress}>
      <Image
        source={require('../assets/images/village.png')}
        style={styles.villageImage}
      />
      <View style={styles.villageInfo}>
        <Text style={styles.villageName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  villageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  villageImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  villageInfo: {
    flex: 1,
  },
  villageName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default VillageRow;
