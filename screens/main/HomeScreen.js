import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HomeMenuItem from '../../components/HomeMenuItem';

// Home Screen
const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <HomeMenuItem
        title={'Characters'}
        image={require('../../images/characters.png')}
        onPress={handlePress}
        linkScreenName={'CharactersScreen'}
      />
      <HomeMenuItem
        title={'Clans'}
        image={require('../../images/clans.png')}
        onPress={handlePress}
        linkScreenName={'ClansScreen'}
      />
      <HomeMenuItem
        title={'Villages'}
        image={require('../../images/villages.png')}
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
});

export default HomeScreen;
