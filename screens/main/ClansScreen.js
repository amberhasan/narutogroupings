import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import ClanRow from '../../components/ClanRow';

const ClansScreen = ({navigation}) => {
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
      console.log('Error fetching clans:', error);
    }
  }

  const navigateToClanProfile = clan => {
    navigation.navigate('ClanProfileScreen', {clan});
  };

  const renderClanItem = ({item}) => {
    return <ClanRow clan={item} onPress={() => navigateToClanProfile(item)} />;
  };

  return (
    <View style={{flex: 1}}>
      <FlatList data={clans} renderItem={renderClanItem} />
    </View>
  );
};

export default ClansScreen;
