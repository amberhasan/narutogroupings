import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CharactersScreen from './CharactersScreen';
import ClansScreen from './ClansScreen';
import VillagesScreen from './VillagesScreen';

// Home Screen
const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => handlePress('CharactersScreen')}>
        <Image
          source={require('../../images/characters.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Characters</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => handlePress('ClansScreen')}>
        <Image
          source={require('../../images/clans.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Clans</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => handlePress('VillagesScreen')}>
        <Image
          source={require('../../images/villages.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Villages</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 3,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 250, // Adjust the width as per your preference
    height: 120, // Adjust the height as per your preference
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;