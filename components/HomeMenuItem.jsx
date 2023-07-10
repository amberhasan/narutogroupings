import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const HomeMenuItem = props => {
  const {title, image, onPress, linkScreenName} = props;

  return (
    <TouchableOpacity
      style={styles.rowContainer}
      onPress={() => onPress(linkScreenName)}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 140,
    height: 60,
    marginBottom: 10,
    borderWidth: 1, // Add border width
    borderColor: 'black', // Add border color
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeMenuItem;
