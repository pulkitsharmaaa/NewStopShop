import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/AppNavigator';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { addItemToWishList } from '../redux/slices/WishlistSlice';
import { addItemToCart } from '../redux/slices/CartSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const ProductDetail = ({ route }: Props) => {
  const { data } = route.params as { data: any };
  const dispatch = useDispatch();
  const [buttonColor, setButtonColor] = useState('#fff');

  const handleButtonPressIn = () => {
    setButtonColor('#ff6b6b');
  };

  // const handleButtonPressOut = () => {
  //   setButtonColor('#fff');
  // };

  return (
    <ScrollView style={styles.main}>
      <Header />
      <Text style={styles.ProductName}>{data.title}</Text>
      <Image source={{uri: data.image}} style={styles.imagestyle} />

      <Text style={styles.ProductDesc}>{data.description}</Text>
      <View style={styles.priceView}>
        <Text style={[styles.ProductPrice, {color: 'black'}]}>Price: </Text>
        <Text style={styles.ProductPrice}>{'$' + data.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={1}
        onPress={() => {
          dispatch(addItemToCart(route.params.data));
        }}>
        <Text style={styles.btnText}>Add To Cart</Text>
      </TouchableOpacity>
      <Pressable
        onPressIn={handleButtonPressIn}
        // onPressOut={handleButtonPressOut}
        style={styles.wishlistBtn}
        onPress={() => {
          dispatch(addItemToWishList(route.params.data));
        }}>
        <AntDesign
          name="heart"
          size={24}
          style={[styles.wishlistIcon, {color: buttonColor}]}
        />
      </Pressable>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  imagestyle: {
    height: 240,
    width: '100%',
    resizeMode: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  ProductName: {
    fontSize: 20,
    color: 'black',
    // alignSelf: 'center',
    margin: 10,
    marginTop: 20,
    fontWeight: '600',
  },
  ProductDesc: {
    fontSize: 16,
    margin: 10,
    marginTop: 20,
  },
  ProductPrice: {
    fontSize: 18,
    color: 'green',
    fontWeight: '800',
  },
  priceView: {
    flexDirection: 'row',
    marginLeft: 10,
    // alignSelf:'center'
  },
  btn: {
    height: 40,
    width: "87%",
    alignSelf: 'center',
    backgroundColor: '#F2a944',
    borderRadius: 20,
    marginTop: 25,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  wishlistBtn: {
    backgroundColor: '#dee2e6',
    position: 'absolute',
    right: 20,
    top: 130,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 25,
  },
  wishlistIcon: {
    color: '#ff6b6b',
  },
});
