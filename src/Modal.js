import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

function Modal({ navigation }) {
  return (
    <View style={styles.body}>
      <Text>I am Modal!!</Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Modal; 