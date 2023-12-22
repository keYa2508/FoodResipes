import {ImageSourcePropType} from 'react-native';

export type RecipeType = {
  id: number;
  image: ImageSourcePropType;
  itemTime: string;
  itemDiscription: string;
  itemWeight: number;
  itemWeightText: string;
};

export type CategoryType = {
  icon: string;
  name: string;
};

export type FabricsType = {
  icon: string;
  type: string;
  value: number;
  valueType: string;
};
