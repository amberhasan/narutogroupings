import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const HomeMenuItem = props => {
  const {title, image, onPress} = props;

  return (
    <TouchableOpacity style={styles.rowContainer} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    height: 150,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 100,
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
