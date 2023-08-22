import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, TextInput} from 'react-native';
import CharacterRow from '../../components/CharacterRow';
import LoadingIndicator from '../../components/LoadingIndicator';
import useKaraViewModel from '../../hooks/useKaraViewModel';

const KaraScreen = ({navigation}) => {
  const viewModel = useKaraViewModel();
  if (viewModel.loading) {
    return <LoadingIndicator />;
  }

  const renderKaraItem = ({item}) => {
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
        placeholder="Search kara..."
        value={viewModel.searchText}
        onChangeText={viewModel.setSearchText}
      />
      <FlatList data={viewModel.filteredKara} renderItem={renderKaraItem} />
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

export default KaraScreen;
