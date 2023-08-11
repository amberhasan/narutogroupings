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
import useFetch from '../../hooks/useFetch';

const ClansScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const {data: clans, loading} = useFetch(
    'https://narutodb.xyz/api/clan?limit=57',
    'clans',
  );

  const navigateToClanProfile = clan => {
    navigation.navigate('ClanProfileScreen', {clan});
  };

  const renderClanItem = ({item}) => {
    return <ClanRow clan={item} onPress={() => navigateToClanProfile(item)} />;
  };

  const handleSearch = text => {
    setSearchQuery(text);
  };

  const filteredClans = clans.filter(clan =>
    clan.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search clans"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList data={filteredClans} renderItem={renderClanItem} />
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
