/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { widthRatio, width } from './asset/ratio';
import { color } from './asset/color';


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
  input: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  writeIcon: {
    color: color.darkgray,
    position: 'absolute',
    top: 30,
    left: 8,
    zIndex: 3,
  },
  addText: {
    justifyContent: 'center',
    width: 316,
    minHeight: 36,
    backgroundColor: color.white,
    paddingLeft: 28,
    paddingRight: 8,
    paddingVertical: 6,
    marginVertical: 20,
    borderColor: color.dimgray,
    borderWidth: 1,
    borderRadius: 20,
  },
  activeInput: {
    borderColor: color.darkgray,
  },
  listItems: {
    // flex: 1,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 6,
    paddingVertical: 4,
  },
  checkBox: {
    marginRight: 10,
  },
  listText: {
    fontSize: 16,
    color: color.gray,
  },
  listTextInvalid: {
    color: color.darkgray,
    textDecorationLine: 'line-through',
  },
  deleteIcon: {
    color: color.darkgray,
    marginLeft: 30,
  }
});
