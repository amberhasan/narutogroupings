import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  async function getCharacters() {
    try {
      const response = await fetch('https://api.narutodb.xyz/character?page=1');
      const jsonData = await response.json();
      setCharacters(jsonData.characters);
    } catch (error) {
      console.log('Error fetching characters:', error);
    }
  }

  const renderCharacterItem = ({item}) => {
    const {name, images, gender, rank, ninjaRegistration} = item;
    console.log('image', images[0]);

    return (
      <TouchableOpacity style={styles.characterItem}>
        <Image source={{uri: images[0]}} style={styles.characterImage} />
        <View style={styles.characterInfo}>
          <Text style={styles.characterName}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={characters} renderItem={renderCharacterItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
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
  characterDetails: {
    fontSize: 14,
    marginBottom: 3,
  },
});

export default Characters;
