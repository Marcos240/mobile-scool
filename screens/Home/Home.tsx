import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '../../components/Themed';
import ListClass from './ListClass';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ListClass/>
      <ListClass/>
      <ListClass/>
      <ListClass/>
      <ListClass/>
      <ListClass/>
      <ListClass/>
      <ListClass/>
      <ListClass/>
      <ListClass/>
      <ListClass/>
      <ListClass/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor:'#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});

