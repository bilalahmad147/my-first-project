import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header() {

  return (
    <View style={styles.header}>
        <Text style={styles.title}>Todos App Using Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
header:{
    height: 80,
    padding: 38,
    backgroundColor: "coral",
},
title: {
    color: '#fff',
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
}
});

export default Header;