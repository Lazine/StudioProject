import React, { useState } from 'react';
import { View, Text, Button, StatusBar, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard, Image,TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EIcon from 'react-native-vector-icons/EvilIcons';
import { styles } from './styles';
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




// const todoList = [];

const TodoScreen = ({ navigation }) => {
  const [textValue, setTextValue] = useState('');
  const [activeText, setActiveText] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [todos, setTodos] = useState([
    { value: 'hello~',
      isCheck: false,
    },
    { value: 'cat🐱', 
      isCheck: true,
    },
  ]);


  const addTodo = (todo) => {
    setTodos([...todos,{value: todo.nativeEvent.text, isCheck: false}]);
    console.log(todos);
  };

  // const setIsCheck = index => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCheck = true;
  //   setTodos(newTodos);
  // };

  _renderItem = ({ todo, index }) => {
    // const time = moment(new Date(item.drawDate)).format('A hh:mm');
    return (
      <View style={styles.list}>
        <TouchableOpacity onPress={() => setIsCheck(true)}>
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
          <Text style={[styles.listText, isCheck ? styles.listTextInvalid : null]}>{todos[index].value}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setTodos('')}>
          <EIcon name="trash" size={30} style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    );
  };
  _keyExtractor = (todo, index) => index.toString();

  return (
    <DismissKeyboard>
    <SafeAreaView style={styles.body}>
      <StatusBar/>
      <Header/>
      <View style={styles.input}>
        <Icon name="pencil-outline" size={16} style={styles.writeIcon}/>
        <TextInput
          style={[styles.addText, activeText ? styles.activeInput : null]}
          placeholder={'add your todos...'}
          placeholderTextColor={'#b1b1b1'}
          // multiline={true}
          numberOfLines={2}
          clearButtonMode={'while-editing'}
          value={textValue}
          onChangeText={text => setTextValue(text)}
          onSubmitEditing={addTodo}
          onFocus={()=> setActiveText(true)}
          onBlur={()=> setActiveText(false)}
        />
      </View>

      <ScrollView style={styles.listItems}>
        {/* 1 */}
        <View style={styles.list}>
          <TouchableOpacity onPress={()=> setIsCheck(true)}>
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
          <TouchableOpacity onPress={()=> setTodos('')}>
            <EIcon 
              name="trash" 
              size={30} 
              style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>

        {/* {items.map( (item, key) => (
          //2
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
                <Text style={[styles.listText, isCheck ? styles.listTextInvalid : null]}>{item.value}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <EIcon name="trash" size={30} style={styles.deleteIcon} />
              </TouchableOpacity>
            </View>
        ))} */}
        
        <FlatList
          data={todos}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor} />
      


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
              screen: 'MainModal' 
            })
          }
        />

      </ScrollView>
    </SafeAreaView>
    </DismissKeyboard>
  );
};

export default TodoScreen;
