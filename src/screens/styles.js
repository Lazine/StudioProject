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
    height: 50 * widthRatio,
    paddingVertical: 8 * widthRatio,
    paddingHorizontal: 12 * widthRatio,
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
    width: 30 * widthRatio,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  writeIcon: {
    color: color.darkgray,
    position: 'absolute',
    top: 28.8 * widthRatio,
    left: 34 * widthRatio,
    zIndex: 3 * widthRatio,
  },
  addText: {
    justifyContent: 'center',
    // width: 326,
    minHeight: 36 * widthRatio,
    backgroundColor: color.white,
    paddingLeft: 28 * widthRatio,
    paddingRight: 8 * widthRatio,
    paddingVertical: 6 * widthRatio,
    marginVertical: 20 * widthRatio,
    marginHorizontal: 24 * widthRatio,
    flex: 1,
    borderColor: color.dimgray,
    borderWidth: 1,
    borderRadius: 20 * widthRatio,
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
    width: 260 * widthRatio,
    flex: 1,
    paddingVertical: 6 * widthRatio,
  },
  todoLeftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 20 * widthRatio,
  },
  checkBox: {
    width: 26 * widthRatio,
    height: 26 * widthRatio,
  },
  listText: {
    fontSize: 16,
    lineHeight: 22,
    color: color.gray,
    flex: 1,
    marginLeft: 10 * widthRatio,
    textAlignVertical: 'bottom',
    alignSelf: 'flex-end',
  },
  listTextInvalid: {
    color: color.darkgray,
    textDecorationLine: 'line-through',
  },
  deleteIcon: {
    color: color.darkgray,
    marginLeft: 8 * widthRatio,
  },
  clear:{
    width: 30 * widthRatio,
    height: 36 * widthRatio,
    position: 'absolute',
    right: 30 * widthRatio,
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
    width: 104 * widthRatio,
    position: 'absolute',
    right: 0,
    bottom: -10,
  },
  tab: {
    paddingHorizontal: 10 * widthRatio,
    paddingBottom: 8 * widthRatio,
    marginHorizontal: 2 * widthRatio,
    marginBottom: 14 * widthRatio,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: color.dimgray,
    fontSize: 20,
  },
  tabActiveText: {
    color: color.gray,
  },
  tabBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4 * widthRatio,
    backgroundColor: color.dandelion,
    borderRadius: 5 * widthRatio,
  }


});
