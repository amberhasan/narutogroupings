import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import VillageRow from '../../components/VillageRow';
import LoadingIndicator from '../../components/LoadingIndicator';
import useFetch from '../../hooks/useFetch';

const VillagesScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const {data: villages, loading} = useFetch(
    'https://narutodb.xyz/api/village?limit=39',
    'villages',
  );
  const navigateToVillageProfile = village => {
    navigation.navigate('VillageProfileScreen', {village});
  };

  const renderVillageItem = ({item}) => {
    return (
      <VillageRow
        village={item}
        onPress={() => navigateToVillageProfile(item)}
      />
    );
  };

  const handleSearch = text => {
    setSearchQuery(text);
  };

  const filteredVillages = villages.filter(
    village =>
      village.characters.length > 0 &&
      village.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search villages"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList data={filteredVillages} renderItem={renderVillageItem} />
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
