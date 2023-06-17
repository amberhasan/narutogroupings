import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import KaraRow from '../../components/CharacterRow';

const KaraProfileScreen = ({route, navigation}) => {
  const {kara} = route.params;
  const [searchQuery, setSearchQuery] = useState('');

  const sortedKara = kara.characters.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const filteredKara = sortedKara.filter(kara =>
    kara.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    // Set the title dynamically
    navigation.setOptions({
      title: `${kara.name} Clan`,
    });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search kara"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      <FlatList
        data={filteredKara}
        renderItem={({item}) => (
          <CharacterRow
            character={item}
            onPress={() => {
              navigation.navigate('CharacterProfileScreen', {kara: item});
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  clanName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default KaraProfileScreen;
