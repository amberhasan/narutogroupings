import React, {useEffect, useState} from 'react';

const useFetch = (url, category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function wait() {
    return new Promise(resolve => setTimeout(resolve, 3000));
  }

  async function fetchData() {
    console.log(`fetching from [${url}]`);
    try {
      setLoading(true);
      await wait();
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData[category]); // jsonData.characters
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log('Error fetching characters:', error);
    }
  }

  return {data, loading, error, fetchData};
};

export default useFetch;
