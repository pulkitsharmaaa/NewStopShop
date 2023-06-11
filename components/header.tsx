import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './AppNavigator';


const Header = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.cart);
  console.log(cartItems);
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <Image
          source={require('../src/images/backarrow.png')}
          style={[styles.icon, {height: 27}]}
        />
      </TouchableOpacity>
      <Text style={styles.textstyle}>StopShop</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Cart')}}>
        <Image
          source={require('../src/images/cart.png')}
          style={[styles.icon, {height: 27}]}
        />
      </TouchableOpacity>
      <View
        style={{
          width: 15,
          height: 15,
          borderRadius: 10,
          backgroundColor: 'orange',
          position: 'absolute',
          right: 5,
          top: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 12}}>
          {cartItems.data.length}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  btn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 40,
    width: '100%',
    tintColor: 'white',
  },
  textstyle: {
    fontSize: 24,
    fontFamily: 'cursive',
    fontWeight: '900',
  },
});
