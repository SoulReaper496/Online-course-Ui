import React from 'react';

import {SafeAreaView, View} from 'react-native';
import MainPage from './src/Screens/MainPage';
import DetailsScreen from './src/Screens/DetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Recommend from './src/Components/Recommend';
import Card from './src/Components/Card';
import CourseScreen from './src/Screens/CourseScreen';

import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="home" component={MainPage} />
          <Stack.Screen
            name="detailsscreen"
            component={DetailsScreen}
            options={{headerShown: false}}
            independent={true}
          />
          <Stack.Screen
            name="coursescreen"
            component={CourseScreen}
            options={{headerShown: false}}
            independent={true}
          />
          <Stack.Screen
            name="card"
            component={Card}
            options={{headerShown: false}}
            independent={true}
          />
          <Stack.Screen
            name="recommend"
            component={Recommend}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
