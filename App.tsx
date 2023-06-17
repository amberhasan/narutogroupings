import React from 'react';
import {View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharactersScreen from './screens/main/CharactersScreen';
import ClansScreen from './screens/main/ClansScreen';
import VillagesScreen from './screens/main/VillagesScreen';
import HomeScreen from './screens/main/HomeScreen';
import CharacterProfileScreen from './screens/profiles/CharacterProfileScreen';
import ClanProfileScreen from './screens/profiles/ClanProfileScreen';
import VillageProfileScreen from './screens/profiles/VillageProfileScreen';
import KekkeiGenkaiProfileScreen from './screens/profiles/KekkeiGenkaiProfileScreen';
import TeamsProfileScreen from './screens/profiles/TeamsProfileScreen';
import TailedBeastsProfileScreen from './screens/profiles/TailedBeastsProfileScreen';
import AkatsukiProfileScreen from './screens/profiles/AkatsukiProfileScreen';
import KaraProfileScreen from './screens/profiles/KaraProfileScreen';

import KekkeiGenkaiScreen from './screens/main/KekkeiGenkaiScreen';
import TeamsScreen from './screens/main/TeamsScreen';
import TailedBeastsScreen from './screens/main/TailedBeastsScreen';
import AkatsukiScreen from './screens/main/AkatsukiScreen';
import KaraScreen from './screens/main/KaraScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="CharactersScreen"
          component={CharactersScreen}
          options={{headerTitle: 'Characters'}}
        />
        <Stack.Screen
          name="ClansScreen"
          component={ClansScreen}
          options={{headerTitle: 'Clans'}}
        />
        <Stack.Screen
          name="VillagesScreen"
          component={VillagesScreen}
          options={{headerTitle: 'Villages'}}
        />
        <Stack.Screen
          name="CharacterProfileScreen"
          component={CharacterProfileScreen}
          options={{headerTitle: 'Character Profile'}}
        />
        <Stack.Screen
          name="ClanProfileScreen"
          component={ClanProfileScreen}
          options={{headerTitle: 'Clan Members'}}
        />
        <Stack.Screen
          name="VillageProfileScreen"
          component={VillageProfileScreen}
          options={{headerTitle: 'Village Profile'}}
        />
        <Stack.Screen
          name="KekkeiGenkaiScreen"
          component={KekkeiGenkaiScreen}
          options={{headerTitle: 'Kekkei Genkai'}}
        />
        <Stack.Screen
          name="TeamsScreen"
          component={TeamsScreen}
          options={{headerTitle: 'Teams'}}
        />
        <Stack.Screen
          name="TailedBeastsScreen"
          component={TailedBeastsScreen}
          options={{headerTitle: 'Tailed Beasts'}}
        />
        <Stack.Screen
          name="AkatsukiScreen"
          component={AkatsukiScreen}
          options={{headerTitle: 'Akatsuki'}}
        />
        <Stack.Screen
          name="KaraScreen"
          component={KaraScreen}
          options={{headerTitle: 'Kara'}}
        />
        <Stack.Screen
          name="KekkeiGenkaiProfileScreen"
          component={KekkeiGenkaiProfileScreen}
          options={{headerTitle: 'Kekkei Genkai Profile'}}
        />
        <Stack.Screen
          name="TeamsProfileScreen"
          component={TeamsProfileScreen}
          options={{headerTitle: 'Teams Profile'}}
        />
        <Stack.Screen
          name="TailedBeastsProfileScreen"
          component={TailedBeastsProfileScreen}
          options={{headerTitle: 'Tailed Beasts Profile'}}
        />
        <Stack.Screen
          name="AkatsukiProfileScreen"
          component={AkatsukiProfileScreen}
          options={{headerTitle: 'Akatsuki Profile'}}
        />
        <Stack.Screen
          name="KaraProfileScreen"
          component={KaraProfileScreen}
          options={{headerTitle: 'Kara Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
