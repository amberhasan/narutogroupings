import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const CharacterRow = props => {
  const {name, images, gender, rank, ninjaRegistration} = props.character;
  return (
    <TouchableOpacity style={styles.characterItem} onPress={props.onPress}>
      <Image
        source={
          images[0]
            ? {uri: images[0]}
            : require('../assets/images/notavailable.png')
        }
        style={styles.characterImage}
      />
      <View style={styles.characterInfo}>
        <Text style={styles.characterName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  characterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  characterImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  characterInfo: {
    flex: 1,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default CharacterRow;
