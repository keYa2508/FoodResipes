import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Black, Gray, LightPink, White} from '../Constants/Colors';
import {Hp, Wp} from '../Constants/Hooks';
import {CategoryList, RecipeList} from '../Constants/Datas';
import {CategoryType, RecipeType} from '../Constants/Types';
import RecipeCard from '../Components/RecipeCard';
import {Large, Poppins, Small} from '../Constants/Styles';
import {FlatList} from 'react-native';

const Recipes = () => {
  const renderItem = (item: RecipeType) => {
    return <RecipeCard item={item} size={Small} />;
  };
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.SearchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          placeholder="Search healthy recipe..."
          placeholderTextColor={Gray}
          style={styles.searchTxt}
        />
      </View>
      {CategoryList && (
        <View style={styles.CategoryCard}>
          <Text style={styles.HeadTxt}>Category</Text>
          <View style={styles.CatList}>
            {CategoryList.map((x: CategoryType, i: number) => {
              return (
                <TouchableOpacity key={i} style={styles.CatLabel}>
                  <Text style={styles.CatIcon}>{x.icon}</Text>
                  <Text style={styles.CatName}>{x.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
      <View style={{paddingVertical: Hp(2)}}>
        <RecipeCard item={RecipeList[1]} size={Large} />
      </View>
      <View style={{paddingVertical: Hp(2)}}>
        <FlatList
          data={RecipeList}
          renderItem={({item}) => renderItem(item)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: Hp(1.5),
    backgroundColor: LightPink,
    borderRadius: 10,
    flexDirection: 'column',
  },
  SearchBox: {
    backgroundColor: White,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Wp(3),
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 30,
  },
  searchIcon: {
    fontSize: 24,
  },
  searchTxt: {
    fontSize: 16,
    color: Black,
    width: Wp(90),
    fontFamily: Poppins,
  },
  HeadTxt: {
    fontSize: 26,
    color: Black,
    fontWeight: '600',
    fontFamily: Poppins,
  },
  CategoryCard: {
    gap: Hp(2),
    paddingVertical: Hp(2),
  },
  CatLabel: {
    flexDirection: 'row',
    backgroundColor: White,
    alignItems: 'center',
    gap: Wp(1),
    paddingHorizontal: Wp(2),
    paddingVertical: Wp(2),
    borderRadius: 30,
  },
  CatList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Wp(2),
  },
  CatIcon: {
    fontSize: 20,
    color: Black,
  },
  CatName: {
    fontSize: 14,
    color: Black,
  },
});
