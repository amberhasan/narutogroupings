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

const VillageProfileScreen = ({route, navigation}) => {
  // Extract the village data from the route parameter
  const {village} = route.params;
  const [searchQuery, setSearchQuery] = useState('');

  const handleCharacterPress = character => {
    navigation.navigate('CharacterProfileScreen', {character});
  };

  const sortedCharacters = village.characters.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  // Filter characters based on the search query
  const filteredCharacters = sortedCharacters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.villageName}>{village.name}</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search characters"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      <FlatList
        data={filteredCharacters}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.characterContainer}
            onPress={() => handleCharacterPress(item)}>
            <Image
              source={{uri: item.images[0]}}
              style={styles.characterImage}
            />
            <Text style={styles.characterName}>{item.name}</Text>
          </TouchableOpacity>
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
  villageName: {
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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

export default VillageProfileScreen;
