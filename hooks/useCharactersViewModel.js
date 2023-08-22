//CharacterViewModel
import {useState, useEffect} from 'react';
import useFetch from './useFetch';

const useCharactersViewModel = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const {data: characters, loading} = useFetch(
    'https://narutodb.xyz/api/character?limit=1431',
    'characters',
  );

  useEffect(() => {
    filterCharacters();
  }, [characters, searchText]);

  const filterCharacters = () => {
    console.log('characters', characters);
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredCharacters(filtered);
  };

  return {
    searchText,
    setSearchText,
    filteredCharacters,
    loading,
    filterCharacters,
  };
};

export default useCharactersViewModel;
