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
import KekkeiGenkaiRow from '../../components/KekkeiGenkaiRow';
import LoadingIndicator from '../../components/LoadingIndicator';
import useFetch from '../../hooks/useFetch';

const KekkeiGenkaiScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredKekkeiGenkai, setFilteredKekkeiGenkai] = useState([]);
  const {data: kekkei_genkai, loading} = useFetch(
    'https://api.narutodb.xyz/kekkei-genkai?limit=39',
    'kekkeigenkai',
  );

  useEffect(() => {
    if (kekkei_genkai) {
      filterKekkeiGenkai();
    }
  }, [kekkei_genkai, searchText]);

  const filterKekkeiGenkai = () => {
    const filtered = kekkei_genkai.filter(kekkei_genkai =>
      kekkei_genkai.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredKekkeiGenkai(filtered);
  };

  if (loading) {
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
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredKekkeiGenkai}
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
