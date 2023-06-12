import React, {useEffect, useState} from 'react';

const useFetch = (url, category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch(
        'https://api.narutodb.xyz/character?limit=1431',
      );
      const jsonData = await response.json();
      console.log('jsonData ', jsonData);
      console.log('jsonData[category] ', jsonData[category]);

      setData(jsonData[category]); // jsonData.characters
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log('Error fetching characters:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return {data, loading, error};
};

export default useFetch;
