import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Lessions from './Lessions';
import Review from './Review';

const Tab = createMaterialTopTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Lessions"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: {fontSize: 16},
        tabBarStyle: {backgroundColor: '#ecf7f9'},
      }}
      independent={true}>
      <Tab.Screen
        name="Lessions"
        component={Lessions}
        options={{tabBarLabel: 'Lessons'}}
        independent={true}
      />
      <Tab.Screen
        name="Review"
        component={Review}
        options={{tabBarLabel: 'Reviews'}}
        independent={true}
      />
    </Tab.Navigator>
  );
}
const TabContainer = () => {
  return <MyTabs />;
};

export default TabContainer;
