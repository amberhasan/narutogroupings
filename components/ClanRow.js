import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const ClanRow = props => {
  const {name, symbol, description} = props.clan;
  return (
    <TouchableOpacity style={styles.clanItem} onPress={props.onPress}>
      <Image source={require('../images/clan.png')} style={styles.clanImage} />
      <View style={styles.clanInfo}>
        <Text style={styles.clanName}>{name}</Text>
        <Text style={styles.clanDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clanItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    height: 120,
  },
  clanImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  clanInfo: {
    flex: 1,
  },
  clanName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  clanDescription: {
    fontSize: 14,
  },
});

export default ClanRow;
