import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Characters from './screens/Characters';
import Clans from './screens/Clans';
import Villages from './screens/Villages';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Characters" component={Characters} />
        <Stack.Screen name="Clans" component={Clans} />
        <Stack.Screen name="Villages" component={Villages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
