import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import CharacterRow from '../../components/CharacterRow';

const CharactersScreen = ({navigation}) => {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    filterCharacters();
  }, [characters, searchText]);

  async function getCharacters() {
    try {
      const response = await fetch('https://api.narutodb.xyz/character?page=1');
      const jsonData = await response.json();
      setCharacters(jsonData.characters);
    } catch (error) {
      console.log('Error fetching characters:', error);
    }
  }

  const filterCharacters = () => {
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredCharacters(filtered);
  };

  const renderCharacterItem = ({item}) => {
    const hasContent =
      (item.debut &&
        (item.debut.movie || item.debut.novel || item.debut.appearsIn)) ||
      (item.jutsu && item.jutsu.length > 0) ||
      (item.personal && item.personal.species) ||
      (item.uniqueTraits && item.uniqueTraits.length > 0);

    if (!hasContent) {
      return null;
    }

    return (
      <CharacterRow
        character={item}
        onPress={() => {
          navigation.navigate('CharacterProfileScreen', {character: item});
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search characters..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList data={filteredCharacters} renderItem={renderCharacterItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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
