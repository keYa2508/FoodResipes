import {CategoryType, FabricsType, RecipeType} from './Types';

export const RecipeList: RecipeType[] = [
  {
    id: 1,
    image: require('../Assets/Images/idli-recipe-1.webp'),
    // 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/idli-recipe-1.jpg',
    itemTime: 'BreckFast',
    itemDiscription: 'Cabbage Weight Loss Suop',
    itemWeight: 200,
    itemWeightText: 'Kcal',
  },
  {
    id: 2,
    image: require('../Assets/Images/burger+photography.jpg'),
    // 'https://images.squarespace-cdn.com/content/v1/60d4c5f1b364934cf68bf57f/1631122796525-QH1A180BU57QFF1IHG99/burger+photography.jpg',
    itemTime: 'Lunch',
    itemDiscription: 'Avocada Toast with Poched Eggs',
    itemWeight: 300,
    itemWeightText: 'Kcal',
  },
  {
    id: 3,
    image: require('../Assets/Images/pexels-photo-376464.jpeg'),
    // 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
    icon: '🍔',
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
