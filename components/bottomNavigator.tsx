import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Wishlist from '../screens/wishlist';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Account from '../screens/account';
import { RootStackParamList } from '../components/AppNavigator';
import Search from '../screens/search';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <AntDesign name="heart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-circle"  
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="search" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="settings" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
