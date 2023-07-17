import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HomeMenuItem from '../../components/HomeMenuItem';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <HomeMenuItem
          title={'Characters'}
          image={require('../../assets/images/characters.png')}
          onPress={() => handlePress('CharactersScreen')}
        />
        <HomeMenuItem
          title={'Clans'}
          image={require('../../assets/images/clans.png')}
          onPress={() => handlePress('ClansScreen')}
        />
      </View>
      <View style={styles.row}>
        <HomeMenuItem
          title={'Villages'}
          image={require('../../assets/images/villages.png')}
          onPress={() => handlePress('VillagesScreen')}
        />
        <HomeMenuItem
          title={'Kekkei Genkai'}
          image={require('../../assets/images/kekkei_genkai.png')}
          onPress={() => handlePress('KekkeiGenkaiScreen')}
        />
      </View>
      <View style={styles.row}>
        <HomeMenuItem
          title={'Tailed Beasts'}
          image={require('../../assets/images/tailed_beasts.png')}
          onPress={() => handlePress('TailedBeastsScreen')}
        />
        <HomeMenuItem
          title={'Teams'}
          image={require('../../assets/images/teams.png')}
          onPress={() => handlePress('TeamsScreen')}
        />
      </View>
      <View style={styles.row}>
        <HomeMenuItem
          title={'Kara'}
          image={require('../../assets/images/kara.png')}
          onPress={() => handlePress('KaraScreen')}
        />
        <HomeMenuItem
          title={'Akatsuki'}
          image={require('../../assets/images/akatsuki.png')}
          onPress={() => handlePress('AkatsukiScreen')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFE4C4', // Orange background color
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16, // Adjust the marginBottom as needed
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'YourCustomFont',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
