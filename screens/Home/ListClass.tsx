import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '../../components/Themed';

export default function ListClass() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lớp 10A1</Text>
      <Ionicons name="create" size={24} align="center"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    paddingRight: 40,
    paddingLeft: 40,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor:'#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 100,
    marginBottom:8,
    shadowOffset: {width: 0 , height: 0},
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: '700',
  }
});

