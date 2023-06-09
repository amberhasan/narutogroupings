import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Characters from './Characters';
import Clans from './Clans';
import Villages from './Villages';

// Home Screen
const Home = () => {
  const navigation = useNavigation();

  const handlePress = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => handlePress('Characters')}>
        <Image
          source={require('../images/characters.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Characters</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => handlePress('Clans')}>
        <Image source={require('../images/clans.png')} style={styles.image} />
        <Text style={styles.text}>Clans</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => handlePress('Villages')}>
        <Image
          source={require('../images/villages.png')}
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
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 80, // Adjust the width as per your preference
    height: 80, // Adjust the height as per your preference
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
