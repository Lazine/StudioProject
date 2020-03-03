import * as React from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import { styles } from './styles';

function Modal({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <Text>I am Modal!!</Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default Modal; 