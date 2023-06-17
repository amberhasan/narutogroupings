import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import CharacterRow from '../../components/CharacterRow';

const KekkeiGenkaiProfileScreen = ({route, navigation}) => {
  const {kekkei_genkai} = route.params;
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Set the title dynamically
    navigation.setOptions({
      title: `${kekkei_genkai.name} Kekkei Genkai`,
    });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search kekkei genkai"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      <FlatList
        data={kekkei_genkai.characters}
        renderItem={({item}) => (
          <CharacterRow
            character={item}
            onPress={() => {
              navigation.navigate('CharacterProfileScreen', {character: item});
            }}
          />
        )}
        keyExtractor={item => item.id.toString()}
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
});

export default KekkeiGenkaiProfileScreen;
