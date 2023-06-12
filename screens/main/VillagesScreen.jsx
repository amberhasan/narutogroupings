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

const VillagesScreen = ({navigation}) => {
  const [villages, setVillages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getVillages();
  }, []);

  async function getVillages() {
    setLoading(true);
    try {
      const response = await fetch('https://api.narutodb.xyz/village?limit=39');
      const jsonData = await response.json();
      setVillages(jsonData.villages);
    } catch (error) {
      console.log('Error fetching villages:', error);
    }
    setLoading(false);
  }

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
