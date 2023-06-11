import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const CharacterProfileScreen = ({route}) => {
  const {character} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: character.images[0]}}
          style={styles.characterImage}
        />
        <View style={styles.characterInfo}>
          <Text style={styles.characterName}>{character.name}</Text>
        </View>
      </View>
      {character.debut && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Debut</Text>
          {character.debut.movie && (
            <Text style={styles.sectionText}>
              <Text style={styles.bulletPoint}>•</Text>{' '}
              <Text style={styles.sectionTextContent}>
                {character.debut.movie}
              </Text>
            </Text>
          )}
          {character.debut.novel && (
            <Text style={styles.sectionText}>
              <Text style={styles.bulletPoint}>•</Text>{' '}
              <Text style={styles.sectionTextContent}>
                {character.debut.novel}
              </Text>
            </Text>
          )}
          {character.debut.appearsIn && (
            <Text style={styles.sectionText}>
              <Text style={styles.bulletPoint}>•</Text>{' '}
              <Text style={styles.sectionTextContent}>
                {character.debut.appearsIn}
              </Text>
            </Text>
          )}
        </View>
      )}
      {character.jutsu && character.jutsu.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Jutsu</Text>
          {character.jutsu.map((jutsu, index) => (
            <Text key={index} style={styles.sectionText}>
              <Text style={styles.bulletPoint}>•</Text>{' '}
              <Text style={styles.sectionTextContent}>{jutsu}</Text>
            </Text>
          ))}
        </View>
      )}
      {character.personal && character.personal.species && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.bulletPoint}>•</Text>{' '}
            <Text style={styles.sectionTextContent}>
              {character.personal.species}
            </Text>
          </Text>
        </View>
      )}
      {character.uniqueTraits && character.uniqueTraits.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Unique Traits</Text>
          {character.uniqueTraits.map((trait, index) => (
            <Text key={index} style={styles.sectionText}>
              <Text style={styles.bulletPoint}>•</Text>{' '}
              <Text style={styles.sectionTextContent}>{trait}</Text>
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  characterImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  characterInfo: {
    flex: 1,
  },
  characterName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
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

export default CharacterProfileScreen;
