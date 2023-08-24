import React, {useState, useEffect} from 'react';
import useFetch from './useFetch';

const useTeamsViewModel = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredTeams, setFilteredTeams] = useState([]);
  const {data: teams, loading} = useFetch(
    'https://narutodb.xyz/api/team?limit=191',
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

  return {
    searchText,
    setSearchText,
    filteredTeams,
    setFilteredTeams,
    teams,
    loading,
  };
};

export default useTeamsViewModel;
