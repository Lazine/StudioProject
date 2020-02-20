import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

function MainModal({ navigation }) {
  return (
    <View style={styles.body}>
      <Text>Modal Screen Yeah~~~</Text>
      <Button title="OPEN" onPress={() => navigation.navigate('Modal')} />
    </View>
  );
};

export default MainModal;