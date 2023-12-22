/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from './src/Screens/Home';
import Scanner from './src/Screens/Scanner';
import Recipes from './src/Screens/Recipes';
import {Home_Nav, Recipe_Nav, Scanner_Nav} from './src/Constants/Navigation';
import {Brown, Gray, White, Orange} from './src/Constants/Colors';
import {Hp} from './src/Constants/Hooks';
import {Camera} from 'react-native-vision-camera';

const IconComponent = (focused: boolean, name: string) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: focused ? Orange : White,
          position: 'absolute',
          height: 20,
          width: 20,
          left: 5,
          top: 5,
          borderRadius: 10,
        }}
      />
      <MaterialIcons size={30} color={focused ? Brown : Gray} name={name} />
    </View>
  );
};
function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();
  useEffect(() => {
    checkPermission();
  }, []);
  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    console.log(newCameraPermission);
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Home_Nav}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: Brown,
          tabBarInactiveTintColor: Gray,
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '900',
            marginBottom: Hp(1),
          },
          tabBarStyle: {
            height: Hp(8),
            backgroundColor: White,
            borderTopWidth: 0,
            shadowColor: White,
          },
        }}>
        <Tab.Screen
          name={Home_Nav}
          component={Home}
          options={{
            tabBarIcon: ({focused}) => IconComponent(focused, 'home'),
          }}
        />
        <Tab.Screen
          name={Scanner_Nav}
          component={Scanner}
          options={{
            tabBarIcon: ({focused}) =>
              IconComponent(focused, 'qr-code-scanner'),
          }}
        />
        <Tab.Screen
          name={Recipe_Nav}
          component={Recipes}
          options={{
            tabBarIcon: ({focused}) => IconComponent(focused, 'library-books'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
