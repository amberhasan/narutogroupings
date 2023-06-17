import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import TeamRow from '../../components/TeamRow';
import CharacterRow from '../../components/CharacterRow';

const TeamProfileScreen = ({route, navigation}) => {
  const {team} = route.params;
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Set the title dynamically
    navigation.setOptions({
      title: `${team.name}`,
    });
  }, []);

  const sortedCharacters = team.characters.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const filteredCharacters = sortedCharacters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
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
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  teamContainer: {
    marginBottom: 10,
  },
  teamBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  teamImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TeamProfileScreen;
