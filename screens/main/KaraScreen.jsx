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
import CharacterRow from '../../components/CharacterRow';
import LoadingIndicator from '../../components/LoadingIndicator';
import useFetch from '../../hooks/useFetch';

const KaraScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredKara, setFilteredKara] = useState([]);
  const {data: kara, loading} = useFetch(
    'https://api.narutodb.xyz/kara?limit=32',
    'kara',
  );

  useEffect(() => {
    filterKara();
  }, [kara, searchText]);

  const filterKara = () => {
    const filtered = kara.filter(k =>
      k.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredKara(filtered);
  };

  if (loading) {
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
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList data={filteredKara} renderItem={renderKaraItem} />
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
