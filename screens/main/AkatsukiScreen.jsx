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
import AkatsukiRow from '../../components/AkatsukiRow';
import LoadingIndicator from '../../components/LoadingIndicator';
import useAkatsukiViewModel from '../../hooks/useAkatsukiViewModel';

const AkatsukiScreen = ({navigation}) => {
  const viewModel = useAkatsukiViewModel();

  if (viewModel.loading) {
    return <LoadingIndicator />;
  }

  const renderAkatsukiItem = ({item}) => {
    return (
      <AkatsukiRow
        akatsuki={item}
        onPress={() => {
          navigation.navigate('AkatsukiProfileScreen', {
            akatsuki: item,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search akatsuki..."
        value={viewModel.searchText}
        onChangeText={viewModel.setSearchText}
      />
      <FlatList
        data={viewModel.filteredAkatsuki}
        renderItem={renderAkatsukiItem}
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

export default AkatsukiScreen;
