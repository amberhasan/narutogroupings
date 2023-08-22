//ViewModel

import React, {useState, useEffect} from 'react';
import useFetch from './useFetch';

const useClansViewModel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {data: clans, loading} = useFetch(
    'https://narutodb.xyz/api/clan?limit=57',
    'clans',
  );

  const handleSearch = text => {
    setSearchQuery(text);
  };

  const filteredClans = clans.filter(clan =>
    clan.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return {
    searchQuery,
    handleSearch,
    clans,
    filteredClans,
  };
};

export default useClansViewModel;
