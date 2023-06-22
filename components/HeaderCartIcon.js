import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from './AppNavigator';

// type Props = NativeStackScreenProps<RootStackParamList, 'AddAddress'>;


const HeaderCartIcon = () => {
  const cartItems = useSelector(state => state.cart);
  const navigation = useNavigation();
  return (
    <View style={styles.cartIcon}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <Image
          source={require('../src/images/cart.png')}
          style={[styles.icon, {height: 27}]}
        />
      </TouchableOpacity>
      <View style={styles.quantityBadge}>
        <Text style={{color: '#fff', fontSize: 12}}>
          {cartItems.data.length}
        </Text>
      </View>
    </View>
  );
};

export default HeaderCartIcon;

const styles = StyleSheet.create({
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
    marginTop: 2,
  },
  cartIcon: {
    marginRight: 10,
    marginTop: 3,
  },
  quantityBadge: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: 'orange',
    position: 'absolute',
    right: 0,
    top: -7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
