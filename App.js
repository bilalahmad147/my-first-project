import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [name, setName] = useState('Bilal')

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button style={styles.btn1} onPress={() => { setName('Zubair') }} title='change Name'></Button>
      <Button style={styles.btn1} onPress={() => { setName('Jawad') }} title='change Name'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1: {
    backgroundColor: 'red',
  },
});
