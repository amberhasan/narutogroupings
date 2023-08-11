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
import useFetch from '../../hooks/useFetch';

const AkatsukiScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredAkatsuki, setFilteredAkatsuki] = useState([]);
  const {data: akatsuki, loading} = useFetch(
    'https://narutodb.xyz/api/akatsuki?limit=44',
    'akatsuki',
  );

  useEffect(() => {
    filterAkatsuki();
  }, [akatsuki, searchText]);

  const filterAkatsuki = () => {
    const filtered = akatsuki.filter(a =>
      a.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredAkatsuki(filtered);
  };

  if (loading) {
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
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList data={filteredAkatsuki} renderItem={renderAkatsukiItem} />
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
