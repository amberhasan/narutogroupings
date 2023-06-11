import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import VillageRow from '../../components/VillageRow';

const VillagesScreen = ({navigation}) => {
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    getVillages();
  }, []);

  async function getVillages() {
    try {
      const response = await fetch('https://api.narutodb.xyz/village');
      const jsonData = await response.json();
      setVillages(jsonData.villages);
    } catch (error) {
      console.log('Error fetching villages:', error);
    }
  }

  const renderVillageItem = ({item}) => {
    return (
      <VillageRow
        village={item}
        onPress={() => {
          navigation.navigate('VillageProfileScreen', {village: item});
        }}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList data={villages} renderItem={renderVillageItem} />
    </View>
  );
};

export default VillagesScreen;
