import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CharacterRow from '../../components/CharacterRow';

const ClanProfileScreen = ({route, navigation}) => {
  const {clan} = route.params;
  const [searchQuery, setSearchQuery] = useState('');

  const handleCharacterPress = character => {
    navigation.navigate('CharacterProfileScreen', {character});
  };

  const sortedCharacters = clan.characters.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const filteredCharacters = sortedCharacters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.clanName}>{clan.name}</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search characters"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      <FlatList
        data={filteredCharacters}
        renderItem={({item}) => (
          <CharacterRow
            character={item}
            onPress={() => {
              navigation.navigate('CharacterProfileScreen', {character: item});
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  clanName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  characterContainer: {
    marginBottom: 10,
  },
  characterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  characterImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ClanProfileScreen;
