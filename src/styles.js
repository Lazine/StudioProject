/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { widthRatio, width } from './asset/ratio';
import { color } from './asset/color';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: 400,
    height: 40,
    backgroundColor: '#ddf',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: color.gray,
    fontSize: 16 * widthRatio,
  }
});
