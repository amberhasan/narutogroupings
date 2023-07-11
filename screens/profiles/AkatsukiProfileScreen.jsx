import React, {memo} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Section from '../../components/Section';
import ListItem from '../../components/ListItem';

const MemoizedListItem = memo(({text}) => {
  return <Text>{text}</Text>;
});

const AkatsukiProfileScreen = ({route}) => {
  const {akatsuki} = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={
            akatsuki.images && akatsuki.images[0]
              ? {uri: akatsuki.images[0]}
              : require('../../assets/images/notavailable.png')
          }
          style={styles.akatsukiImage}
        />

        <View style={styles.akatsukiInfo}>
          <Text style={styles.akatsukiName}>{akatsuki.name}</Text>
        </View>
      </View>

      <View>
        <Section title="Debut">
          <View>
            <MemoizedListItem text={akatsuki.debut?.movie || ''} />
            <MemoizedListItem text={akatsuki.debut?.novel || ''} />
            <MemoizedListItem text={akatsuki.debut?.manga || ''} />
            <MemoizedListItem text={akatsuki.debut?.anime || ''} />
            <MemoizedListItem text={akatsuki.debut?.game || ''} />
            <MemoizedListItem text={akatsuki.debut?.appearsIn || ''} />
          </View>
        </Section>
      </View>

      {akatsuki.jutsu && akatsuki.jutsu.length > 0 && (
        <Section title="Jutsu">
          {akatsuki.jutsu.map((jutsu, index) => (
            <MemoizedListItem key={index} text={jutsu} />
          ))}
        </Section>
      )}

      {akatsuki.family && Object.keys(akatsuki.family).length > 0 && (
        <Section title="Family">
          {Object.entries(akatsuki.family).map(([relation, name], index) => (
            <MemoizedListItem key={index} text={`${relation}: ${name}`} />
          ))}
        </Section>
      )}

      {akatsuki.natureType && akatsuki.natureType.length > 0 && (
        <Section title="Nature Type">
          {akatsuki.natureType.map((nature, index) => (
            <MemoizedListItem key={index} text={nature} />
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
  akatsukiImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  akatsukiInfo: {
    flex: 1,
  },
  akatsukiName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AkatsukiProfileScreen;
