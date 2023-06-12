import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileSection = ({title, content}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {content}
  </View>
);

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProfileSection;
