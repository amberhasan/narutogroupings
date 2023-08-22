import React, {useEffect, useState} from 'react';
import {View, FlatList, TextInput, StyleSheet} from 'react-native';
import VillageRow from '../../components/VillageRow';
import LoadingIndicator from '../../components/LoadingIndicator';
import useVillagesViewModel from '../../hooks/useVillagesViewModel';

const VillagesScreen = ({navigation}) => {
  const viewModel = useVillagesViewModel();

  const renderVillageItem = ({item}) => {
    return (
      <VillageRow
        village={item}
        onPress={() => navigateToVillageProfile(item)}
      />
    );
  };

  if (viewModel.loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search villages"
        value={viewModel.searchQuery}
        onChangeText={viewModel.handleSearch}
      />

      <FlatList
        data={viewModel.filteredVillages}
        renderItem={renderVillageItem}
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
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default VillagesScreen;
