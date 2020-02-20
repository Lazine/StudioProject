import { Dimensions } from 'react-native';

const originWidth = 320;
const originHeight = 568;

export const { width, height } = Dimensions.get('window');

export const widthRatio = (width / originWidth) < 2 ? (width / originWidth) : 1.6;

export const heightRatio = (height / originHeight) < 2 ? (height / originHeight) : 1.6;