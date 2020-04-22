/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { widthRatio, width } from '../asset/ratio';
import { color } from '../asset/color';


export const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: color.lightgray,
  },
  header: {
    width: width,
    height: 50,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: color.lightgray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: color.black,
    fontSize: 16,
    fontWeight: "600",
  },
  nyaIcon: {
    width: 30,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  writeIcon: {
    color: color.darkgray,
    position: 'absolute',
    top: 28.8,
    left: 34,
    zIndex: 3,
  },
  addText: {
    justifyContent: 'center',
    // width: 326,
    minHeight: 36,
    backgroundColor: color.white,
    paddingLeft: 28,
    paddingRight: 8,
    paddingVertical: 6,
    marginVertical: 20,
    marginHorizontal: 24,
    flex: 1,
    borderColor: color.dimgray,
    borderWidth: 1,
    borderRadius: 20,
  },
  activeInput: {
    borderColor: color.darkgray,
  },
  // list: {
    
  // },
  oneTodo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 314,
    flex: 1,
    paddingVertical: 6,
  },
  todoLeftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 20,
  },
  checkBox: {
    width: 26,
    height: 26,
  },
  listText: {
    fontSize: 16,
    lineHeight: 22,
    color: color.gray,
    flex: 1,
    marginLeft: 10,
    textAlignVertical: 'bottom',
    alignSelf: 'flex-end',
  },
  listTextInvalid: {
    color: color.darkgray,
    textDecorationLine: 'line-through',
  },
  deleteIcon: {
    color: color.darkgray,
    marginLeft: 8,
  },
  clear:{
    width: 30,
    height: 36,
    position: 'absolute',
    right: 30,
    // top: -10,
    justifyContent: 'center',
    paddingTop: 2,
    // alignContent: 'flex-end',
  },
  clearIcon: {
    color: color.darkgray,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bigCat: {
    width: 104,
    position: 'absolute',
    right: 0,
    bottom: -10,
  },

});
