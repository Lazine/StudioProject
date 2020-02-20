import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';

function DetailsScreen({ route, navigation }) {
  // React.useEffect(
  //   () => navigation.addListener('focus', () => alert('Go Go')),
  //   [navigation],
  // );

  // React.useEffect(
  //   () => navigation.addListener('blur', () => alert('Bye Bye')),
  //   [navigation],
  // );

  useFocusEffect(
    React.useCallback(() => {
        // Do something when the screen is focused
        alert('Go Go')
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        alert('Bye Bye')
      };
    }, [])
  );


  const { itemId } = route.params;
  const { otherParam } = route.params;

  return (
    <View style={styles.body}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Change Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Detail', {
            itemId: Math.floor(Math.random() * 100),
            otherParam: 'anything you want here',
          });
        }}
      />
      {/* <Button title="Go to Home" onPress={() => navigation.push('Todo')} /> */}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default DetailsScreen;
