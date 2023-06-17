import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Section from '../../components/Section';
import ListItem from '../../components/ListItem';

const TailedBeastProfileScreen = ({route}) => {
  const {tailedBeast} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={
            tailedBeast.images && tailedBeast.images[0]
              ? {uri: tailedBeast.images[0]}
              : require('../../assets/images/notavailable.png')
          }
          style={styles.tailedBeastImage}
        />

        <View style={styles.tailedBeastInfo}>
          <Text style={styles.tailedBeastName}>{tailedBeast.name}</Text>
        </View>
      </View>

      <View>
        <Section title="Debut">
          <View>
            <ListItem text={tailedBeast.debut?.movie} />
            <ListItem text={tailedBeast.debut?.novel} />
            <ListItem text={tailedBeast.debut?.appearsIn} />
          </View>
        </Section>
      </View>

      {tailedBeast.jutsu && tailedBeast.jutsu.length > 0 && (
        <Section title="Jutsu">
          {tailedBeast.jutsu.map((jutsu, index) => (
            <ListItem key={index} text={jutsu} />
          ))}
        </Section>
      )}

      {tailedBeast.personal?.species && (
        <Section title="Personal">
          <ListItem text={tailedBeast.personal.species} />
        </Section>
      )}

      {tailedBeast.uniqueTraits && tailedBeast.uniqueTraits.length > 0 && (
        <Section title="Unique Traits">
          {tailedBeast.uniqueTraits.map((trait, index) => (
            <ListItem key={index} text={trait} />
          ))}
        </Section>
      )}

      {tailedBeast.family && (
        <Section title="Family">
          {Object.entries(tailedBeast.family).map(([relation, name], index) => (
            <ListItem key={index} text={`${relation}: ${name}`} />
          ))}
        </Section>
      )}

      {tailedBeast.natureType && tailedBeast.natureType.length > 0 && (
        <Section title="Nature Type">
          {tailedBeast.natureType.map((nature, index) => (
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
  tailedBeastImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  tailedBeastInfo: {
    flex: 1,
  },
  tailedBeastName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TailedBeastProfileScreen;
