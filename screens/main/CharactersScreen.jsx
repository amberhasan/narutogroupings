// View
import React from 'react';
import {View, TextInput, FlatList, StyleSheet} from 'react-native';
import CharacterRow from '../../components/CharacterRow';
import LoadingIndicator from '../../components/LoadingIndicator';
import useCharactersViewModel from '../../hooks/useCharactersViewModel';

const CharactersScreen = ({navigation}) => {
  const viewModel = useCharactersViewModel();

  if (viewModel.loading) {
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
        value={viewModel.searchText}
        onChangeText={viewModel.setSearchText}
      />
      <FlatList
        data={viewModel.filteredCharacters}
        renderItem={renderCharacterItem}
      />
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
});

export default CharactersScreen;
