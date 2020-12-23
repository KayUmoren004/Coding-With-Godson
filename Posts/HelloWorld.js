import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Emoji from 'react-native-emoji';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello World</Text>
      <Emoji name="wave" style={{fontSize: 30}} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textStyle: {
    color: "#fff",
    marginRight: 10
  }
});