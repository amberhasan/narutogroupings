import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useFetch from '../../hooks/useFetch';
import HomeMenuItem from '../../components/HomeMenuItem';
import LoadingIndicator from '../../components/LoadingIndicator';

// Home Screen
const HomeScreen = () => {
  const navigation = useNavigation();
  const {
    data: characters,
    loading: loadingCharacters,
    fetchData: fetchCharacters,
  } = useFetch('https://api.narutodb.xyz/character?limit=1431', 'characters');

  const {
    data: clans,
    loading: loadingClans,
    fetchData: fetchClans,
  } = useFetch('https://api.narutodb.xyz/clan?limit=57', 'clans');

  const {
    data: villages,
    loading: loadingVillages,
    fetchData: fetchVillages,
  } = useFetch('https://api.narutodb.xyz/village?limit=39', 'villages');

  const handlePress = async screenName => {
    // fetch the data for next screen
    let data = {};
    if (screenName === 'CharactersScreen') {
      await fetchCharacters();
      data = characters;
    } else if (screenName === 'ClansScreen') {
      await fetchClans();
      data = clans;
    } else if (screenName === 'VillagesScreen') {
      await fetchVillages();
      data = villages;
    }
    // passing the data from one to screen another screen
    // setTimeout(() => {
    //   console.log('navigate function', characters.length);
    // }, 3000);
  };

  useEffect(() => {
    navigation.navigate('ListScreen', {data: characters});
  }, [characters]);

  useEffect(() => {
    navigation.navigate('ListScreen', {data: clans});
  }, [clans]);

  useEffect(() => {
    navigation.navigate('ListScreen', {data: villages});
  }, [villages]);

  console.log('characters------', characters.length);

  return (
    <View style={styles.container}>
      {loadingCharacters || loadingClans || loadingVillages ? (
        <View style={{position: 'absolute', zIndex: 100}}>
          <LoadingIndicator />
        </View>
      ) : null}

      <HomeMenuItem
        title={'Characters'}
        image={require('../../assets/images/characters.png')}
        onPress={handlePress}
        linkScreenName={'CharactersScreen'}
      />
      <HomeMenuItem
        title={'Clans'}
        image={require('../../assets/images/clans.png')}
        onPress={handlePress}
        linkScreenName={'ClansScreen'}
      />
      <HomeMenuItem
        title={'Villages'}
        image={require('../../assets/images/villages.png')}
        onPress={handlePress}
        linkScreenName={'VillagesScreen'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE4C4', // Orange background color
  },
  title: {
    fontFamily: 'YourCustomFont',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
