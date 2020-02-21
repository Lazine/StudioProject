import React, { useState } from 'react';
import { View, Text, Button, StatusBar, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EIcon from 'react-native-vector-icons/EvilIcons';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// const Stack = createStackNavigator();

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon name="text" size={30} color="#262626" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Test</Text>
        <TouchableOpacity>
          <Icon name="rocket" size={30} color="#a7a7a7" />
        </TouchableOpacity>
      </View>
  )
}

const DismissKeyboard = ({ children }) => {
  return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )
}

const TodoScreen = ({ navigation }) => {
  const [textValue, setTextValue] = useState('');
  const [activeText, setActiveText] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const onKeyPress = () => {
    const todoList = [];
    [...todoList]
  }


  return (
    <DismissKeyboard>
    <SafeAreaView style={styles.body}>
      <StatusBar/>
      <Header/>

      <TextInput
        style={[styles.addText, activeText ? styles.activeInput : null]}
        placeholder={'add your todos...'}
        placeholderTextColor={'#a7a7a7'}
        // multiline={true}
        clearButtonMode={'while-editing'}
        value={textValue}
        onChangeText={text => setTextValue(text)}
        onSubmitEditing={onKeyPress}
        onFocus={()=> setActiveText(true)}
        onBlur={()=> setActiveText(false)}
      />

      <View style={styles.listItems}>
        <View style={styles.list}>
          {/* 1 */}
          <TouchableOpacity onPress={() => setIsCheck(prevState => !prevState)}>
            { isCheck ? (
              <Image
              source={require('./image/check.png')}
              style={styles.checkBox}/> )
              : (
                <Image
                source={require('./image/uncheck.png')}
                style={styles.checkBox}/> ) 
              }
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.listText, isCheck ? styles.listTextInvalid : null]}>Todo List~~ Nya Nya Studio</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <EIcon name="trash" size={30} style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
        {/* 2 */}
        <View style={styles.list}>
          <TouchableOpacity onPress={() => setIsCheck(prevState => !prevState)}>
            { isCheck ? (
              <Image
              source={require('./image/check.png')}
              style={styles.checkBox}/> )
              : (
                <Image
                source={require('./image/uncheck.png')}
                style={styles.checkBox}/> ) 
              }
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.listText, isCheck ? styles.listTextInvalid : null]}>{textValue}</Text>
          </TouchableOpacity>
        </View>

      </View>


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
    </DismissKeyboard>
  );
};

export default TodoScreen;
