import React, {useState, useEffect} from 'react';
import useFetch from './useFetch';

const useTailedBeastsViewModel = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredTailedBeasts, setFilteredTailedBeasts] = useState([]);
  const {data: tailedBeasts, loading} = useFetch(
    'https://narutodb.xyz/api/tailed-beast?limit=10',
    'tailedBeasts',
  );

  useEffect(() => {
    filterTailedBeasts();
  }, [tailedBeasts, searchText]);

  const filterTailedBeasts = () => {
    const filtered = tailedBeasts.filter(tailedBeast =>
      tailedBeast.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredTailedBeasts(filtered);
  };

  return {
    searchText,
    setSearchText,
    filterTailedBeasts,
    setFilteredTailedBeasts,
    tailedBeasts,
    loading,
  };
};

export default useTailedBeastsViewModel;
