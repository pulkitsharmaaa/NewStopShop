import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/splash';
import Login from '../screens/login';
import Signup from '../screens/Signup';
import BottomTabNavigator from '../components/bottomNavigator';
import ProductDetail from '../screens/productDetail';
import Cart from '../screens/cart';
import Checkout from '../screens/checkout';
import Address from '../screens/address';
import AddAddress from '../screens/addAddress';
import HeaderCartIcon from './HeaderCartIcon';


interface Product {
  rating: any;
  category: any;
  price: string;
  description: string;
  image: string;
  id: number;
  title: string;
}

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  Account: undefined;
  Home: undefined;
  Wishlist: undefined;
  BottomNavigator: undefined;
  Details: {data: Product} | undefined;
  Navigator: undefined;
  Header: undefined;
  Search: undefined;
  Cart: undefined;
  Checkout: undefined;
  Address: undefined;
  AddAddress: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={ProductDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{
            headerShown: true,
            headerRight: () => <HeaderCartIcon />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            title: 'Addresses',
          }}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{
            headerShown: true,
            title: 'Add New Address',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'skyblue',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
