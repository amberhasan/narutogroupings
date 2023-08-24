import React, {useEffect, useState} from 'react';
import useFetch from './useFetch';

const useVillagesViewModel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {data: villages, loading} = useFetch(
    'https://narutodb.xyz/api/village?limit=39',
    'villages',
  );

  const handleSearch = text => {
    setSearchQuery(text);
  };

  const filteredVillages = villages.filter(
    village =>
      village.characters.length > 0 &&
      village.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return {
    searchQuery,
    setSearchQuery,
    villages,
    loading,
    filteredVillages,
    handleSearch,
  };
};

export default useVillagesViewModel;
