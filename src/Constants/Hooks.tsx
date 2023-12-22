/* eslint-disable react-hooks/rules-of-hooks */
import {useColorScheme} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const isDarkMode = () => {
  const mode: boolean = useColorScheme() === 'dark';
  return mode;
};

export const Wp = (number: number) => {
  return widthPercentageToDP(number);
};

export const Hp = (number: number) => {
  return heightPercentageToDP(number);
};
