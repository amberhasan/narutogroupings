import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

const Clans = () => {
  const [clans, setClans] = useState([]);

  useEffect(() => {
    getClans();
  }, []);

  async function getClans() {
    try {
      const response = await fetch('https://api.narutodb.xyz/clan');
      const jsonData = await response.json();

      setClans(jsonData.clans);
    } catch (error) {
      console.log('Error fetching characters:', error);
    }
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={clans}
        keyExtractor={item => item.id.toString()} // Provide a unique identifier for each item
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Clans;
