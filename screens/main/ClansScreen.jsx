import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import ClanRow from '../../components/ClanRow';
import LoadingIndicator from '../../components/LoadingIndicator';
import useClansViewModel from '../../hooks/useClansViewModel';

const ClansScreen = ({navigation}) => {
  const viewModel = useClansViewModel();

  if (viewModel.loading) {
    return <LoadingIndicator />;
  }
  const renderClanItem = ({item}) => {
    return (
      <ClanRow
        clan={item}
        onPress={() => navigation.navigate('ClanProfileScreen', {clan})}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search clans"
        value={viewModel.searchQuery}
        onChangeText={viewModel.handleSearch}
      />

      <FlatList data={viewModel.filteredClans} renderItem={renderClanItem} />
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

export default ClansScreen;
