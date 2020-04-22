import React, { useState } from 'react';
import { View, Text, Button, StatusBar, SafeAreaView, TextInput,TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import { addTodo, editTodo, deleteTodo, checkTodo, clearTodo } from '../redux/actions/actions';
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
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Icon name="text" size={30} color="#262626" />
      </TouchableOpacity>
      <Text style={styles.headerText}>NyaNyaNyaStudio</Text>
      <TouchableOpacity onPress={() => props.onPress()}>
        {/* <Icon name="rocket" size={30} color="#a7a7a7" /> */}
        <Image 
          source={require('../image/nya.png')} 
          style={styles.nyaIcon} />
      </TouchableOpacity>
    </View>
  );
};

const DismissKeyboard = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

const Todo = (props) => {

  // const { todo, toggleTodo, addTodo } = props;

  _renderItem = ({item}) => {
    // const time = moment(new Date(item.drawDate)).format('A hh:mm');
    return (
      <View style={styles.oneTodo}>
        <View style={styles.todoLeftGroup}>
          <TouchableOpacity onPress={() => props.check(item.id)}>
            {item.isCheck ? (
              <Image
                source={require('../image/check.png')}
                style={styles.checkBox}
              />
            ) : (
              <Image
                source={require('../image/uncheck.png')}
                style={styles.checkBox}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.edit(item.id)}>
            <Text
              style={[
                styles.listText,
                item.isCheck ? styles.listTextInvalid : null,
              ]}>
              {item.value}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => props.delete(item.id)}>
          <EIcon name="trash" size={30} style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    );
    
  };
  _keyExtractor = (item, index) => index.toString();
  return(
    <FlatList
      data={props.data}
      renderItem={this._renderItem}
      keyExtractor={this._keyExtractor}
      // inverted={true}
      // columnWrapperStyle={styles.list}
    />
    )
  }


const TodoScreen = (props) => {
  const [textValue, setTextValue] = useState('');
  const [activeInput, setActiveInput] = useState(false);
  const [todoId, setTodoId] = useState('');

  const choseText = (id) => { 
    return props.todos.find(todo => todo.id === id);
    // console.log(pressObject.value);
  };

  const addNewTodo = (value) => {
    // const textId = props.todos.some(todo => todo.id === choseText(id));
    if(todoId !== '' ){
      // null
      props.editTodo(todoId, value);
    }else{
      props.addTodo(value);
    }
    console.log(todoId);
    this.textInput.clear();
    setTodoId('');
  };
  


  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.body}>
        <StatusBar />
        <Header onPress={(value) => props.clearTodo(value)} />
        <View style={styles.rowCenter}>
          <Icon name="pencil-outline" size={16} style={styles.writeIcon} />
          <TextInput
            style={[styles.addText, activeInput ? styles.activeInput : null]}
            placeholder={'add your todos...'}
            placeholderTextColor={'#b1b1b1'}
            // multiline={true}
            numberOfLines={2}
            returnKeyType="done"
            ref={input => {
              this.textInput = input;
            }}
            // value={textValue}
            defaultValue={textValue}
            // onChangeText={(text) => setTextValue(text)}  // triggered when you type any symbol in the text input
            onSubmitEditing={(value, id) => addNewTodo(value.nativeEvent.text, id)} //triggered when you click the text input submit button
            onFocus={() => setActiveInput(true)}
            onBlur={() => setActiveInput(false)}
          />
          {activeInput ? (
            <TouchableOpacity style={styles.clear} onPress={() => this.textInput.clear()}>
              <FIcon name="x-circle" size={16} style={styles.clearIcon} />
            </TouchableOpacity>
          ) : null}
        </View>
        {/* <View style={styles.rowCenter}>
          <TouchableOpacity>
            <Text>ALL</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>DONE</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>UNDO</Text>
          </TouchableOpacity>
        </View> */}
        {/* <Text>{props.todosk}</Text> */}
        <View style={styles.listItems}>
          <Todo 
            data={props.todos} 
            check={(id) => props.checkTodo(id)}
            delete={(id) => props.deleteTodo(id)}
            edit={(id) => { setTextValue(choseText(id).value), setTodoId(choseText(id).id) }}
            />    
        </View>
        {/* <TouchableOpacity style={styles.bigCat}>
          <Image
            source={require('./image/bigCat_angry.png')}
            style={styles.bigCatImg}
          />
        </TouchableOpacity> */}
      
      </SafeAreaView>
    </DismissKeyboard>
  );
};


function mapStateToProps(state){
  return{
    todosk: state.todoReducer.QQ,
    todos: state.todoReducer.todoList,
  };
}

const mapDispatchToProps = dispatch => ({
    addTodo: (value) => dispatch(addTodo(value)),
    checkTodo: (id) => dispatch(checkTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    editTodo: (id,value) => dispatch(editTodo(id, value)),
    clearTodo: (value) => dispatch(clearTodo(value)),
});

// const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     addTodo,
//   }, dispatch)
// );

const TodolistScreen = connect(mapStateToProps, mapDispatchToProps)(TodoScreen);

//  const TodolistScreen = connect(mapStateToProps, {addTodo})(TodoScreen);

 export default TodolistScreen;