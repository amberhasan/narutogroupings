import React from 'react';
import {View, Text} from 'react-native';

const CharacterProfileScreen = ({route}) => {
  const {character} = route.params;

  return (
    <View>
      <Text>{character.name}</Text>
      {/* Display other character details */}
    </View>
  );
};

export default CharacterProfileScreen;
