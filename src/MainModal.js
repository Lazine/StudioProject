import * as React from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import { styles } from './styles';

function MainModal({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <Text>Modal Screen Yeah~~~</Text>
      <Button title="OPEN" onPress={() => navigation.navigate('Modal')} />
    </SafeAreaView>
  );
};

export default MainModal;