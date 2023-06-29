import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import HomeMenuItem from '../../components/HomeMenuItem';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <HomeMenuItem
          title={'Characters'}
          image={require('../../assets/images/characters.png')}
          onPress={() => handlePress('CharactersScreen')}
          containerStyle={styles.menuItem}
          imageStyle={styles.menuItemImage}
        />
        <HomeMenuItem
          title={'Clans'}
          image={require('../../assets/images/clans.png')}
          onPress={() => handlePress('ClansScreen')}
          containerStyle={styles.menuItem}
          imageStyle={styles.menuItemImage}
        />
      </View>
      <View style={styles.row}>
        <HomeMenuItem
          title={'Villages'}
          image={require('../../assets/images/villages.png')}
          onPress={() => handlePress('VillagesScreen')}
          containerStyle={styles.menuItem}
          imageStyle={styles.menuItemImage}
        />
        <HomeMenuItem
          title={'Kekkei Genkai'}
          image={require('../../assets/images/kekkei_genkai.png')}
          onPress={() => handlePress('KekkeiGenkaiScreen')}
          containerStyle={styles.menuItem}
          imageStyle={styles.menuItemImage}
        />
      </View>
      <View style={styles.row}>
        <HomeMenuItem
          title={'Tailed Beasts'}
          image={require('../../assets/images/tailed_beasts.png')}
          onPress={() => handlePress('TailedBeastsScreen')}
          containerStyle={styles.menuItem}
          imageStyle={styles.menuItemImage}
        />
        <HomeMenuItem
          title={'Teams'}
          image={require('../../assets/images/teams.png')}
          onPress={() => handlePress('TeamsScreen')}
          containerStyle={styles.menuItem}
          imageStyle={styles.menuItemImage}
        />
      </View>
      <View style={styles.row}>
        <HomeMenuItem
          title={'Kara'}
          image={require('../../assets/images/kara.png')}
          onPress={() => handlePress('KaraScreen')}
          containerStyle={styles.menuItem}
          imageStyle={styles.menuItemImage}
        />
        <HomeMenuItem
          title={'Akatsuki'}
          image={require('../../assets/images/akatsuki.png')}
          onPress={() => handlePress('AkatsukiScreen')}
          containerStyle={styles.menuItem}
          imageStyle={styles.menuItemImage}
        />
      </View>
    </View>
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
  menuItem: {
    flex: 0.5, // Set flex to 0.5 to make two items appear on each row
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemImage: {
    width: Dimensions.get('window').width / 2 - 40, // Adjust the width calculation to leave some space between items
    height: Dimensions.get('window').width / 2 - 40, // Adjust the height calculation to maintain aspect ratio
    marginBottom: 10,
  },
  title: {
    fontFamily: 'YourCustomFont',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
