import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const TeamRow = props => {
  const {name} = props.team;
  return (
    <TouchableOpacity style={styles.teamItem} onPress={props.onPress}>
      <Image
        source={require('../assets/images/teams.png')}
        style={styles.teamImage}
      />
      <View style={styles.teamInfo}>
        <Text style={styles.teamName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  teamItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  teamImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  teamInfo: {
    flex: 1,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default TeamRow;
