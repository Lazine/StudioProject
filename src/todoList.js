import * as React from 'react';
import { View, Text, Button, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

// const Stack = createStackNavigator();

const TodoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar/>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon name="text" size={30} color="#262626" />
        </TouchableOpacity>
        <Text style={styles.headerText}>TODOLIST</Text>
      </View>


      <Text>Todo List~~ Nya Nya Studio</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Detail', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button
        title="Go to Tabs"
        onPress={() => 
          navigation.navigate('Tabs', { 
            screen: 'TabTwo'   //可以操控要去Tab的哪個頁面
          })
        }
      />
      <Button
        title="Go to MainModal"
        onPress={() => 
          navigation.navigate('MainModalScreen', { 
            screen: 'MainModal'   //可以操控要去Tab的哪個頁面
          })
        }
      />
    </SafeAreaView>
  );
};

export default TodoScreen;
