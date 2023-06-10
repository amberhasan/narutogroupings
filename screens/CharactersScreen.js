import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import CharacterRow from '../components/CharacterRow';

const CharactersScreen = () => {
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
    return <CharacterRow character={item} onPress={() => {}} />;
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

export default CharactersScreen;
