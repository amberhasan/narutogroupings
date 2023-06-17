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
import TeamRow from '../../components/TeamRow';
import LoadingIndicator from '../../components/LoadingIndicator';
import useFetch from '../../hooks/useFetch';

const TeamsScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredTeams, setFilteredTeams] = useState([]);
  const {data: teams, loading} = useFetch(
    'https://api.narutodb.xyz/team?limit=191',
    'teams',
  );

  useEffect(() => {
    filterTeams();
  }, [teams, searchText]);

  const filterTeams = () => {
    const filtered = teams.filter(team =>
      team.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredTeams(filtered);
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  const renderTeamItem = ({item}) => {
    return (
      <TeamRow
        team={item}
        onPress={() => {
          navigation.navigate('TeamProfileScreen', {team: item});
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search teams..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList data={filteredTeams} renderItem={renderTeamItem} />
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
  characterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  characterInfo: {
    flex: 1,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  characterDetails: {
    fontSize: 14,
    marginBottom: 3,
  },
});

export default TeamsScreen;
