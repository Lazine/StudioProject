import React, { useState } from 'react';
import { View, Text, Button, StatusBar, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard, Image,TouchableOpacity, ScrollView, FlatList,TouchableHighlight } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EIcon from 'react-native-vector-icons/EvilIcons';
import FIcon from 'react-native-vector-icons/Feather';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

// const Stack = createStackNavigator();

const Header = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon name="text" size={30} color="#262626" />
        </TouchableOpacity>
        <Text style={styles.headerText}>NyaNyaNyaStudio</Text>
        <TouchableOpacity onPress={props.onPress}>
          {/* <Icon name="rocket" size={30} color="#a7a7a7" /> */}
          <Image
            source={require('./image/nya.png')}
            style={styles.nyaIcon} />
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
  // const [isCheck, setIsCheck] = useState(false);
  const [textValue, setTextValue] = useState('');  
  const [activeInput, setActiveInput] = useState(false);
  const [todoId, setTodoId] = useState(0);
  const [todos, setTodos] = useState(
    [
    { value: 'hello~',
      isCheck: false,
      id: 1,
    },
    { value: 'cat🐱', 
      isCheck: true,
      id: 2,
    },
  ]);
  

  const addTodo = ( todo, index ) => {

    if( todoId === 0 ){
        setTodos(
          [...todos,
            { value: todo.nativeEvent.text, 
              isCheck: false,
              id: todos === '' ? 0 : todos.slice(-1).pop().id + 1,
            }
          ]
      );
    }else {
      // const todoIndex = todos.findIndex(item => item.id === textValue);
      const newTodo = {...todos[todoId - 1], value: todo.nativeEvent.text};
      setTodos(
        [ 
          ...todos.slice(0, todoId - 1),
          newTodo,
          ...todos.slice(todoId, todos.length),
        ]
      );
      setTodoId(0);
      // console.log(todoId);
    };

    this.textInput.clear();
    // console.log(todos);
  };


  const setIsCheck = ( index ) => {
    const newTodos = [...todos];
    newTodos[index].isCheck = !newTodos[index].isCheck;
    setTodos(newTodos);
  };


  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  const editTodo = ( index, todo )  => {
    const newTodos = [...todos];
    setTextValue(newTodos[index].value);
    setTodoId(newTodos[index].id);
    // console.log(textValue);
  }

  const clearText = () => {
    this.textInput.clear();
    // setTextValue('');
    setTodoId(0);
  }


  _renderItem = ({ item, index }) => {
    // const time = moment(new Date(item.drawDate)).format('A hh:mm');
    return (
      <View style={styles.oneTodo}>
        <View style={styles.todoLeftGroup}>
          <TouchableOpacity onPress={() => setIsCheck(index)}>
            { item.isCheck ? (
              <Image
              source={require('./image/check.png')}
              style={styles.checkBox}/> )
              : (
                <Image
                source={require('./image/uncheck.png')}
                style={styles.checkBox}/> ) 
              }
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> editTodo(index)}>
            <Text style={[styles.listText, item.isCheck ? styles.listTextInvalid : null]}>{todos[index].value}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=> removeTodo(index)}>
          <EIcon name="trash" size={30} style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    );
  };
  _keyExtractor = (item, index) => index.toString();

  return (
    <DismissKeyboard onPress={()=> setTodoId(0)}>
    <SafeAreaView style={styles.body}>
      <StatusBar/>
      <Header onPress={()=> setTodos('')}/>
      <View style={styles.input}>
        <Icon name="pencil-outline" size={16} style={styles.writeIcon}/>
        <TextInput
          style={[styles.addText, activeInput ? styles.activeInput : null]}
          placeholder={'add your todos...'}
          placeholderTextColor={'#b1b1b1'}
          // multiline={true}
          numberOfLines= {2}
          returnKeyType= "done"
          ref={input => { this.textInput = input }}
          // value={textValue}
          defaultValue={textValue}
          // onChangeText={(text) => setTextValue(text)}  // triggered when you type any symbol in the text input
          onSubmitEditing={(text) => addTodo(text)}  //triggered when you click the text input submit button
          onFocus={()=> setActiveInput(true)}
          onBlur={()=> setActiveInput(false)}
        />
        { activeInput ? (
          <TouchableOpacity style={styles.clear} onPress={() => clearText()}>
             <FIcon name="x-circle" size={16} style={styles.clearIcon}/>
          </TouchableOpacity> )
         : null }
      </View>

      <View style={styles.listItems}>
        
        <FlatList
          data={todos}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor} 
          // inverted={true} 
          // columnWrapperStyle={styles.list}
         />
      


        {/* <Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate('Detail', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        /> */}

        {/* <Button
          title="Go to Tabs"
          onPress={() => 
            navigation.navigate('Tabs', { 
              screen: 'TabTwo' 
            })
          }
        /> */}

        {/* <Button
          title="Go to MainModal"
          onPress={() => 
            navigation.navigate('MainModalScreen', { 
              screen: 'MainModal' 
            })
          }
        /> */}

      </View>
    </SafeAreaView>
    </DismissKeyboard>
  );
};

export default TodoScreen;
