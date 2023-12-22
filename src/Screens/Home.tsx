/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LineChart} from 'react-native-chart-kit';
import {ProfilePic, RecipeList, TopImage} from '../Constants/RecipeList';
import {Hp, Wp} from '../Constants/Hooks';
import {Black, Gray, White} from '../Constants/Colors';
import {RecipeType} from '../Constants/Types';
import RecipeCard from '../Components/RecipeCard';
import {Poppins, Small} from '../Constants/Styles';

const HeaderComponent = () => {
  return (
    <View style={styles.HeaderComp}>
      <View style={styles.HeaderFirst}>
        <View style={styles.ImgBox}>
          <Image style={styles.logo} source={ProfilePic} />
          <Text style={styles.NameTxt}>Hi, Orely Studio</Text>
        </View>
        <Text style={styles.HeadText}>Track your diet journey</Text>
      </View>
      <View>
        <Image source={TopImage} style={styles.TopImage} />
      </View>
    </View>
  );
};
const SecondComponent = () => {
  const labels: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const data: number[] = [0, 200, 600, 400, 800, 500, 700];
  return (
    <View style={{gap: Hp(3), alignItems: 'flex-start'}}>
      <View style={{flexDirection: 'row', gap: Wp(10)}}>
        <Text style={styles.SecTxt}>17-23 November 2023</Text>
        <Text style={styles.SecTxt}>12,345 Kcal</Text>
      </View>
      <View>
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: data,
              },
            ],
          }}
          width={Wp(110)}
          height={Hp(28)}
          chartConfig={{
            backgroundColor: White,
            backgroundGradientFrom: White,
            backgroundGradientTo: White,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(252, 70, 107, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            fillShadowGradientFrom: 'rgba(252,70,107,1)',
            fillShadowGradientTo: 'rgba(63,94,251,1)',
            style: {
              borderRadius: 20,
            },
            propsForDots: {
              r: 4,
              strokeWidth: 2,
              stroke: '#fc466b',
            },
            propsForBackgroundLines: {
              strokeWidth: 0.1,
              stroke: Gray,
            },
          }}
          getDotColor={(dataPoint, dataPointIndex) => {
            if (dataPointIndex === 0) {
              return 'transparent';
            }
            return 'white';
          }}
          bezier
          withVerticalLines={false}
          style={{
            borderRadius: 20,
            marginLeft: -Wp(8),
          }}
          segments={4}
        />
      </View>
    </View>
  );
};
const ThirdComponent = () => {
  const renderItem = (item: RecipeType) => {
    return <RecipeCard item={item} size={Small} />;
  };
  return (
    <View style={styles.ThirdComp}>
      <Text style={styles.ThirdTxt}>Recomendations</Text>
      <FlatList
        data={RecipeList}
        renderItem={({item}) => renderItem(item)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const Home = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <HeaderComponent />
      <SecondComponent />
      <ThirdComponent />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: Hp(1.5),
    backgroundColor: White,
    paddingRight: 0,
  },
  ImgBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Wp(2),
  },
  logo: {
    height: Hp(6),
    width: Hp(6),
    borderRadius: Hp(3),
  },
  NameTxt: {
    color: Black,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: Poppins,
  },
  HeadText: {
    color: Black,
    fontSize: 48,
    fontWeight: '900',
    lineHeight: Hp(7),
    fontFamily: Poppins,
  },
  HeaderComp: {
    flexDirection: 'row',
  },
  HeaderFirst: {
    gap: Hp(2),
    width: Wp(65),
  },
  TopImage: {
    width: Wp(50),
    height: Wp(50),
  },
  SecTxt: {
    fontSize: 18,
    fontWeight: '500',
    color: Black,
    fontFamily: Poppins,
  },
  ThirdTxt: {
    color: Black,
    fontSize: 24,
    fontWeight: '700',
    fontFamily: Poppins,
  },
  ThirdComp: {
    gap: Hp(2),
    paddingVertical: Hp(2),
  },
});
