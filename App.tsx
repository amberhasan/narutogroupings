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
import ListScreen from './screens/main/ListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="CharactersScreen"
          component={CharactersScreen}
          options={props => ({
            headerTitle: `Characters`,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Button
                    title="Home"
                    onPress={() => {
                      props.navigation.navigate('Home');
                    }}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={props => ({
            headerTitle: `Clans`,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Button
                    title="Home"
                    onPress={() => {
                      props.navigation.navigate('Home');
                    }}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="ClansScreen"
          component={ClansScreen}
          options={props => ({
            headerTitle: `Clans`,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Button
                    title="Home"
                    onPress={() => {
                      props.navigation.navigate('Home');
                    }}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="VillagesScreen"
          component={VillagesScreen}
          options={props => ({
            headerTitle: `Villages`,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Button
                    title="Home"
                    onPress={() => {
                      props.navigation.navigate('Home');
                    }}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="CharacterProfileScreen"
          component={CharacterProfileScreen}
          options={props => ({
            headerTitle: `Character Profile`,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Button
                    title="Home"
                    onPress={() => {
                      props.navigation.navigate('Home');
                    }}
                  />
                </View>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="ClanProfileScreen"
          component={ClanProfileScreen}
          options={({route, navigation}) => ({
            title: `Clan Members`,
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Button
                    title="Home"
                    onPress={() => {
                      navigation.navigate('Home');
                    }}
                  />
                </View>
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="VillageProfileScreen"
          component={VillageProfileScreen}
          options={props => ({
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Button
                    title="Home"
                    onPress={() => {
                      props.navigation.navigate('Home');
                    }}
                  />
                </View>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
