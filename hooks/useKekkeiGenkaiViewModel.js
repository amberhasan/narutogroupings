import React, {useState, useEffect} from 'react';
import useFetch from './useFetch';

const useKekkeiGenkaiViewModel = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredKekkeiGenkai, setFilteredKekkeiGenkai] = useState([]);
  const {data: kekkei_genkai, loading} = useFetch(
    'https://narutodb.xyz/api/kekkei-genkai?limit=39',
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
  return {
    searchText,
    setSearchText,
    filterKekkeiGenkai,
    setFilteredKekkeiGenkai,
    kekkei_genkai,
    loading,
  };
};

export default useKekkeiGenkaiViewModel;
