import React, {useState, useEffect} from 'react';
import useFetch from './useFetch';

const useKaraViewModel = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredKara, setFilteredKara] = useState([]);
  const {data: kara, loading} = useFetch(
    'https://narutodb.xyz/api/kara?limit=32',
    'clans',
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
  return {
    searchText,
    setSearchText,
    filteredKara,
    setFilteredKara,
    kara,
    loading,
  };
};

export default useKaraViewModel;
