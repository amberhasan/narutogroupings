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
import TailedBeastRow from '../../components/TailedBeastRow';
import LoadingIndicator from '../../components/LoadingIndicator';
import useTailedBeastsViewModel from '../../hooks/useTailedBeastsViewModel';

const TailedBeastsScreen = ({navigation}) => {
  const viewModel = useTailedBeastsViewModel();

  if (viewModel.loading) {
    return <LoadingIndicator />;
  }

  const renderTailedBeastItem = ({item}) => {
    return (
      <TailedBeastRow
        tailedBeast={item}
        onPress={() => {
          navigation.navigate('TailedBeastProfileScreen', {tailedBeast: item});
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search tailed beasts..."
        value={viewModel.searchText}
        onChangeText={viewModel.setSearchText}
      />
      <FlatList
        data={viewModel.filteredTailedBeasts}
        renderItem={renderTailedBeastItem}
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
  tailedBeastItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  tailedBeastInfo: {
    flex: 1,
  },
  tailedBeastName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tailedBeastDetails: {
    fontSize: 14,
    marginBottom: 3,
  },
});

export default TailedBeastsScreen;
