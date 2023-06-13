import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Section from '../../components/Section';
import ListItem from '../../components/ListItem';

const CharacterProfileScreen = ({route}) => {
  const {character} = route.params;
  console.log('character.debut.movie', character.debut.movie);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={
            character.images[0]
              ? {uri: character.images[0]}
              : require('../../assets/images/notavailable.png')
          }
          style={styles.characterImage}
        />

        <View style={styles.characterInfo}>
          <Text style={styles.characterName}>{character.name}</Text>
        </View>
      </View>

      <View>
        <Section title="Debut">
          <View>
            <ListItem text={character.debut.movie} />
            <ListItem text={character.debut.novel} />
            <ListItem text={character.debut.appearsIn} />
          </View>
        </Section>
      </View>

      {character.jutsu && character.jutsu.length > 0 && (
        <Section title="Jutsu">
          {character.jutsu.map((jutsu, index) => (
            <ListItem key={index} text={jutsu} />
          ))}
        </Section>
      )}

      {character.personal && character.personal.species && (
        <Section title="Personal">
          <ListItem text={character.personal.species} />
        </Section>
      )}

      {character.uniqueTraits && character.uniqueTraits.length > 0 && (
        <Section title="Unique Traits">
          {character.uniqueTraits.map((trait, index) => (
            <ListItem key={index} text={trait} />
          ))}
        </Section>
      )}

      {character.family && (
        <Section title="Family">
          {Object.entries(character.family).map(([relation, name], index) => (
            <ListItem key={index} text={`${relation}: ${name}`} />
          ))}
        </Section>
      )}

      {character.natureType && character.natureType.length > 0 && (
        <Section title="Nature Type">
          {character.natureType.map((nature, index) => (
            <ListItem key={index} text={nature} />
          ))}
        </Section>
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
});

export default CharacterProfileScreen;
