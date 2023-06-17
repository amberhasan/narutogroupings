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
    backgroundColor: 'white', // White background color for boxes
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 180, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginBottom: 10,
  },
  text: {
    fontSize: 18, // Adjust the font size as needed
    fontWeight: 'bold',
  },
});

export default HomeMenuItem;
