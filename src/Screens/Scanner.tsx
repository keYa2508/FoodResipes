/* eslint-disable react-hooks/exhaustive-deps */
import {
  ActivityIndicator,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {Svg, Defs, Rect, Mask, LinearGradient, Stop} from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {FabricsValues} from '../Constants/RecipeList';
import {FabricsType} from '../Constants/Types';
import {
  Black,
  Blue,
  Brown,
  Gray,
  Violet,
  White,
  Yellow,
} from '../Constants/Colors';
import {Hp, Wp} from '../Constants/Hooks';
import {Poppins} from '../Constants/Styles';

const CameraFrame = () => {
  return (
    <Svg height="100%" width="100%">
      <Defs>
        <LinearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <Stop offset="0%" stopColor="#E800FF" />
          <Stop offset="100%" stopColor="#FFA600" />
        </LinearGradient>
        <Mask id="mask" height="100%" width="100%" x="0" y="0">
          <Rect width="100%" height="100%" fill="#fff" />
          <Rect
            width="250"
            height="250"
            x={Wp(20)}
            y={Hp(10)}
            fill="black"
            rx="25"
            ry="25"
            stroke={'#ffffff'}
            strokeWidth={5}
          />
        </Mask>
      </Defs>

      <Rect
        height="100%"
        width="100%"
        fill="rgba(0,0,0,.7)"
        mask="url(#mask)"
      />
      <Rect
        width="250"
        height="250"
        x={Wp(20)}
        y={Hp(10)}
        fillOpacity={0}
        rx="25"
        ry="25"
        stroke="url(#gradient)"
        strokeWidth={3}
      />
    </Svg>
  );
};

const CameraComponent = () => {
  // const devices = useCameraDevices();
  // const device = devices.back;
  const device = useCameraDevice('back');

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === 'denied') {
      await Linking.openSettings();
    }
  }, []);

  if (device == null) {
    return <ActivityIndicator size={30} color={Blue} />;
  }
  return (
    <View style={styles.CameraComp}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
      <View style={styles.overlay}>
        <CameraFrame />
      </View>
      <TouchableOpacity style={styles.addItem} activeOpacity={0.6}>
        <View>
          <View style={styles.addContent}>
            <MaterialIcons name="image" size={25} color={Violet} />
            <Text style={styles.addText}>Add Photo</Text>
            <View style={styles.plusItem}>
              <Entypo name="plus" size={12} color={Brown} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const BottomComponent = () => {
  return (
    <View style={styles.BtmCard}>
      <View>
        <Text style={styles.BtmCardTxtHead}>Gluten Free Black Forest Cake</Text>
      </View>
      <View style={styles.FabricsCard}>
        {FabricsValues &&
          FabricsValues.map((x: FabricsType, i: number) => (
            <View key={i} style={styles.Fabrics}>
              <View style={styles.TxtRow}>
                <Text style={styles.Icon}>{x.icon}</Text>
                <Text style={styles.TypeTxt}>{x.type}</Text>
              </View>
              <View style={styles.TxtRow}>
                <Text style={styles.ValueTxt}>{x.value}</Text>
                <Text style={styles.valueTypeTxt}>{x.valueType}</Text>
              </View>
            </View>
          ))}
      </View>
      <View style={styles.HighBox}>
        <Text style={styles.HighHead}>Nutrition Highlight</Text>
        <Text style={styles.HighTxt}>
          With 350 calories per 100-gram serving, Black forest Cake contains
          high fat and sugar leaves
        </Text>
      </View>
    </View>
  );
};
const Scanner = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <CameraComponent />
      <BottomComponent />
    </SafeAreaView>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  BtmCard: {
    backgroundColor: White,
    padding: Wp(7.5),
    paddingBottom: 0,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    gap: Hp(3),
    height: Hp(40),
    position: 'absolute',
    bottom: 0,
  },
  BtmCardTxtHead: {
    fontSize: 42,
    fontWeight: '700',
    color: Black,
    fontFamily: Poppins,
  },
  TxtRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Wp(1),
  },
  Icon: {
    fontSize: 24,
    fontFamily: Poppins,
  },
  TypeTxt: {
    fontSize: 16,
    color: Black,
    fontFamily: Poppins,
  },
  ValueTxt: {
    fontSize: 24,
    fontWeight: '900',
    color: Black,
  },
  valueTypeTxt: {
    fontSize: 16,
    color: Gray,
    fontFamily: Poppins,
  },
  Fabrics: {
    gap: Hp(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  FabricsCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Wp(85),
    borderColor: Gray,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  HighHead: {
    fontSize: 20,
    color: Black,
    fontWeight: '700',
    fontFamily: Poppins,
  },
  HighTxt: {
    fontSize: 16,
    color: Gray,
    fontFamily: Poppins,
  },
  HighBox: {
    gap: Hp(1),
  },
  CameraComp: {
    height: Hp(100),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  addItem: {
    position: 'absolute',
    bottom: Hp(50),
    left: Wp(35),
  },
  addContent: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#482000',
    paddingTop: 12,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  addText: {
    fontSize: 16,
    color: White,
    fontFamily: Poppins,
  },
  plusItem: {
    position: 'absolute',
    bottom: 10,
    left: 35,
    width: 15,
    height: 15,
    backgroundColor: Yellow,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
