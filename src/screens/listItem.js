import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CustomSafeAreaView from '../../component/custom-safe-area-view';
import CustomStatusBar from '../../component/custom-status-bar/custom-status-bar';
import { Header } from '../../component/header/header';
import { NullScreen } from '../../component/null-screen/null-screen';
import { BottomMessageTypeOne, BottomMessageTypeTwo } from '../../component/message/bottom-message';
import { pager } from '../../assets/style/pager';
import styles from './im-screen.style';
import moment from 'moment';
import { toggleWinnderRead } from '../../redux/actions/winnderList';

const listText = [
  {
    title: '你中獎拉你中獎拉',
    time: 'PM 20:20',
    info: '你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉',
  },
  {
    title: '你中獎拉你中獎拉',
    time: 'PM 20:20',
    info: '你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉',
    read: true,
  },
  {
    title: '你中獎拉你中獎拉',
    time: 'PM 20:20',
    info: '你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉你中獎拉',
    read: true,
  },
];

const ImScreen = ({ navigation }) => {
  const myWinnderList = useSelector(state => state.winnderList.myWinnderList);
  const dispatch = useDispatch();

  const toggleWinnderReadHandler = (drawId, isRead) => {
    dispatch(toggleWinnderRead(drawId, isRead));
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  const onDetailPress = item => {
    toggleWinnderReadHandler(item.drawId, true);
    navigation.navigate('ImDetail', { drawId: item.drawId });
  };

  _renderItem = ({ item }) => {
    // const time = moment(new Date(item.drawDate)).format('A hh:mm');
    return (
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
    );
  };
  _keyExtractor = (item, index) => index.toString();

  return (
    <CustomSafeAreaView style={pager.wrapper}>
      <CustomStatusBar />
      <Header title='中獎通知' onBackPress={onBackPress} />

      {myWinnderList.length > 0 ? (
        <FlatList
          data={myWinnderList}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ListFooterComponent={
            <>
              {/* <BottomMessageTypeTwo /> */}
              {/* 超過一頁內容才會出現此「您已經到底了」訊息 */}
              <BottomMessageTypeOne />
            </>
          } />) : (<NullScreen title='目前您沒有中獎通知' />)}

    </CustomSafeAreaView>
  );
}

ImScreen.navigationOptions = {
  header: null,
};

export default ImScreen;