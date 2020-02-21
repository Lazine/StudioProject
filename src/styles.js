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
    fontSize: 16 * widthRatio,
    fontWeight: "600",
  },
  addText: {
    justifyContent: 'center',
    width: 316,
    minHeight: 40,
    backgroundColor: color.white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 20,
    borderColor: color.dimgray,
    borderWidth: 2,
    borderRadius: 20,
  },
  activeInput: {
    borderColor: color.darkgray,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
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
