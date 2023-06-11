import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharactersScreen from './screens/main/CharactersScreen';
import ClansScreen from './screens/main/ClansScreen';
import VillagesScreen from './screens/main/VillagesScreen';
import HomeScreen from './screens/main/HomeScreen';
import CharacterProfileScreen from './screens/profiles/CharacterProfileScreen';
import ClanProfileScreen from './screens/profiles/ClanProfileScreen';
import VillageProfileScreen from './screens/profiles/VillageProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CharactersScreen" component={CharactersScreen} />
        <Stack.Screen name="ClansScreen" component={ClansScreen} />
        <Stack.Screen name="VillagesScreen" component={VillagesScreen} />
        <Stack.Screen
          name="CharacterProfileScreen"
          component={CharacterProfileScreen}
        />
        <Stack.Screen name="ClanProfileScreen" component={ClanProfileScreen} />
        <Stack.Screen
          name="VillageProfileScreen"
          component={VillageProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
