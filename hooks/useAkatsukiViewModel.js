import React, {useState, useEffect} from 'react';
import useFetch from './useFetch';

const useAkatsukiViewModel = () => {
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
  return {
    searchText,
    setSearchText,
    filteredAkatsuki,
    setFilteredAkatsuki,
    akatsuki,
    loading,
  };
};

export default useAkatsukiViewModel;
