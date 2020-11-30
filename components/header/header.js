import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header() {

  return (
    <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
header:{
    height: 70,
    padding: 28,
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