import React, {useEffect, useState} from 'react';

const useFetch = (url, category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData[category]); // jsonData.characters
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return {data, loading, error};
};

export default useFetch;
