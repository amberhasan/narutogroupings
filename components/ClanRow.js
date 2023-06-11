import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

const ClanRow = props => {
  console.log('Here in ClanRow');
  return (
    <TouchableOpacity style={styles.clanItem} onPress={props.onPress}>
      <Text style={styles.clanName}>{props.clan.name}</Text>
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
  },
  clanImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  clanName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ClanRow;
