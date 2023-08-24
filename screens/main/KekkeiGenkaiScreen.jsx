import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, TextInput} from 'react-native';
import KekkeiGenkaiRow from '../../components/KekkeiGenkaiRow';
import LoadingIndicator from '../../components/LoadingIndicator';
import useKekkeiGenkaiViewModel from '../../hooks/useKekkeiGenkaiViewModel';

const KekkeiGenkaiScreen = ({navigation}) => {
  const viewModel = useKekkeiGenkaiViewModel();

  if (viewModel.loading) {
    return <LoadingIndicator />;
  }

  const renderKekkeiGenkaiItem = ({item}) => {
    return (
      <KekkeiGenkaiRow
        kekkei_genkai={item}
        onPress={() => {
          navigation.navigate('KekkeiGenkaiProfileScreen', {
            kekkei_genkai: item,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search kekkei genkai..."
        value={viewModel.searchText}
        onChangeText={viewModel.setSearchText}
      />
      <FlatList
        data={viewModel.filteredKekkeiGenkai}
        renderItem={renderKekkeiGenkaiItem}
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

export default KekkeiGenkaiScreen;
