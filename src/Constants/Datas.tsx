import {CategoryType, FabricsType, RecipeType} from './Types';

export const RecipeList: RecipeType[] = [
  {
    id: 1,
    image: require('../Assets/Images/4-cabbage-soup.jpg'),
    itemTime: 'BreckFast',
    itemDiscription: 'Cabbage Weight Loss Suop',
    itemWeight: 200,
    itemWeightText: 'Kcal',
  },
  {
    id: 2,
    image: require('../Assets/Images/intro-1663771590.jpg'),
    itemTime: 'Lunch',
    itemDiscription: 'Avocada Toast with Poched Eggs',
    itemWeight: 300,
    itemWeightText: 'Kcal',
  },
  {
    id: 3,
    image: require('../Assets/Images/super-food-salmon-salad-hero.jpg'),
    itemTime: 'Dinner',
    itemDiscription: 'Griled Slamon with salad',
    itemWeight: 360,
    itemWeightText: 'Kcal',
  },
];

export const CategoryList: CategoryType[] = [
  {
    icon: '🥛',
    name: 'Dairy Alternatives',
  },
  {
    icon: '🥑',
    name: 'High Fiber FoAlternativesods',
  },
  {
    icon: '🥩',
    name: 'High-Protines',
  },
  {
    icon: '🍉',
    name: 'Fruit Salad',
  },
  {
    icon: '🐟',
    name: 'Fish',
  },
];

export const FabricsValues: FabricsType[] = [
  {
    icon: '🔥',
    type: 'Calories',
    value: 350,
    valueType: 'kcal',
  },
  {
    icon: '🥬',
    type: 'Carbs',
    value: 42.2,
    valueType: 'g',
  },
  {
    icon: '🍯',
    type: 'Fat',
    value: 19.3,
    valueType: 'g',
  },
  {
    icon: '🐟',
    type: 'Protein',
    value: 3.5,
    valueType: 'g',
  },
];

export const ProfilePic = require('../Assets/Images/unnamed.webp');

export const TopImage = require('../Assets/Images/TopImage.png');
