import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {RecipeType} from '../Constants/Types';
import {Hp, Wp} from '../Constants/Hooks';
import {Black, BlackTransperant, Gray, White} from '../Constants/Colors';
import {Large, Poppins} from '../Constants/Styles';

interface props {
  item: RecipeType;
  size: string;
}
const RecipeCard = ({item, size}: props) => {
  return (
    <View style={[styles.Card, {width: size === Large ? Wp(90) : Wp(40)}]}>
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        imageStyle={[
          styles.CardImage,
          {width: size === Large ? Wp(90) : Wp(40)},
        ]}
        style={{padding: Wp(2.5)}}>
        <View style={styles.TopLabel}>
          <Text style={[styles.TxtBig, {color: Black}]}>{item.itemWeight}</Text>
          <Text style={[styles.TxtSml, {color: Black}]}>
            {item.itemWeightText}
          </Text>
        </View>
        <LinearGradient
          colors={['#613a33', '#6e514c', '#7c6d6d']}
          start={{x: 1, y: 1}}
          end={{x: 1, y: 0}}
          style={[
            styles.BottomLabel,
            {width: size === Large ? Wp(85) : Wp(35)},
          ]}>
          <Text style={[styles.TxtSml, {color: White}]}>{item.itemTime}</Text>
          <Text style={[styles.TxtBig, {color: White}]}>
            {item.itemDiscription}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  Card: {
    height: Hp(25),
    backgroundColor: Gray,
    margin: 5,
    borderRadius: Wp(5),
  },
  CardImage: {
    height: Hp(25),
    borderRadius: Wp(5),
  },
  TxtBig: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: Poppins,
  },
  TxtSml: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: Poppins,
  },
  TopLabel: {
    backgroundColor: White,
    flexDirection: 'row',
    borderRadius: Wp(10),
    alignItems: 'center',
    gap: Wp(0.5),
    width: Wp(18),
    height: Hp(3.5),
    justifyContent: 'center',
  },
  BottomLabel: {
    backgroundColor: BlackTransperant,
    width: Wp(35),
    height: Hp(8),
    paddingHorizontal: Wp(2),
    paddingVertical: Hp(1),
    marginTop: Hp(11),
    borderRadius: Wp(5),
  },
});
