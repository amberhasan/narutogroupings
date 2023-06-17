import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  TextInput,
} from 'react-native';
import CharacterRow from '../../components/CharacterRow';
import LoadingIndicator from '../../components/LoadingIndicator';
import useFetch from '../../hooks/useFetch';

const AkatsukiScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const {data: characters, loading} = useFetch(
    'https://api.narutodb.xyz/character?limit=1431',
    'characters',
  );

  useEffect(() => {
    filterCharacters();
  }, [characters, searchText]);

  const filterCharacters = () => {
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredCharacters(filtered);
  };

  if (loading) {
    return <LoadingIndicator />;
  }

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

export default AkatsukiScreen;
