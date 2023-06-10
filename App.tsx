import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharactersScreen from './screens/CharactersScreen';
import ClansScreen from './screens/ClansScreen';
import VillagesScreen from './screens/VillagesScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CharactersScreen" component={CharactersScreen} />
        <Stack.Screen name="ClansScreen" component={ClansScreen} />
        <Stack.Screen name="VillagesScreen" component={VillagesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
