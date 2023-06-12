import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ProfileSectionListItem = ({text}) => (
  <Text style={styles.sectionText}>
    <Text style={styles.bulletPoint}>•</Text>{' '}
    <Text style={styles.sectionTextContent}>{text}</Text>
  </Text>
);

const styles = StyleSheet.create({
  sectionText: {
    fontSize: 14,
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 14,
    marginRight: 5,
  },
  sectionTextContent: {
    fontSize: 14,
  },
});

export default ProfileSectionListItem;
