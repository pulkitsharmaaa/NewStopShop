import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Header from '../components/header';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../redux/slices/CartSlice';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Checkout = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const items = useSelector(state => state.cart);
  const [cartItem, setCartItem] = useState([]);
  const [btnSelector, setBtnSelector] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState('Please Select Address')
  const dispatch = useDispatch();
  useEffect(() => {
    setCartItem(items.data);
  }, [items]);
  const getTotal = () => {
    let total = 0;
    cartItem.map(item => {
      total = total + item.price * item.qty;
    });
    return total;
  };
  useEffect(()=>{
      getSelectedAddress();
  },[isFocused])
  const getSelectedAddress = async ()=>{
    setSelectedAddress(await AsyncStorage.getItem('MY_ADDRESS'));
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header />
      <View>
        <Text style={styles.addedItem}>Added Items</Text>

        {/* <ScrollView style={styles.addedItemView}> */}
        <FlatList
          data={cartItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('Details', {data: item})}
                style={styles.productItems}>
                <Image source={{uri: item.image}} style={styles.productImage} />
                <View style={styles.info}>
                  <Text style={styles.productName}>
                    {item.title.length > 30
                      ? item.title.substring(0, 25) + '...'
                      : item.title}
                  </Text>
                  <Text style={styles.productDesc}>
                    {item.description.length > 30
                      ? item.description.substring(0, 40) + '...'
                      : item.description}
                  </Text>
                  <View style={styles.quantityStyle}>
                    <View>
                      <Text style={styles.productPrice}>
                        {'$' + item.price * item.qty}
                      </Text>
                    </View>
                    <View style={styles.qtyBtnAlign}>
                      <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                          if (item.qty > 1) {
                            dispatch(reduceItemFromCart(item));
                          } else {
                            dispatch(removeItemFromCart(index));
                          }
                        }}>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: '700',
                            marginTop: -3,
                          }}>
                          -
                        </Text>
                      </TouchableOpacity>
                      <Text style={styles.btnText}>{item.qty}</Text>
                      <TouchableOpacity
                        style={styles.btn}
                        onPress={() => dispatch(addItemToCart(item))}>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: '700',
                            marginTop: -3,
                          }}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() => dispatch(removeItemFromCart(index))}>
                  <AntDesign name="delete" size={20} color={'red'} />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
        {/* </ScrollView> */}
        <View style={styles.totaView}>
          <Text style={styles.addedItem}>Total </Text>
          <Text style={styles.addedItem}>{'$' + getTotal().toFixed(2)}</Text>
        </View>
      </View>
      <Text
        style={[
          styles.addedItem,
          {marginTop: 10, alignSelf: 'flex-start', marginLeft: 18},
        ]}>
        Select Payment Mode
      </Text>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => setBtnSelector(0)}>
        <Image
          source={
            btnSelector == 0
              ? require('../src/images/radio_2.png')
              : require('../src/images/radio_1.png')
          }
          style={[
            styles.radio_1,
            {tintColor: btnSelector == 0 ? 'orange' : 'black'},
          ]}
        />
        <Text style={styles.paymentText}>Credit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => setBtnSelector(1)}>
        <Image
          source={
            btnSelector == 1
              ? require('../src/images/radio_2.png')
              : require('../src/images/radio_1.png')
          }
          style={[
            styles.radio_1,
            {tintColor: btnSelector == 1 ? 'orange' : 'black'},
          ]}
        />
        <Text style={styles.paymentText}>Debit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => setBtnSelector(2)}>
        <Image
          source={
            btnSelector == 2
              ? require('../src/images/radio_2.png')
              : require('../src/images/radio_1.png')
          }
          style={[
            styles.radio_1,
            {tintColor: btnSelector == 2 ? 'orange' : 'black'},
          ]}
        />
        <Text style={styles.paymentText}>UPI</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.paymentMethod}
        onPress={() => setBtnSelector(3)}>
        <Image
          source={
            btnSelector == 3
              ? require('../src/images/radio_2.png')
              : require('../src/images/radio_1.png')
          }
          style={[
            styles.radio_1,
            {tintColor: btnSelector == 3 ? 'orange' : 'black'},
          ]}
        />
        <Text style={styles.paymentText}>Cash On Delivery</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 18,
        }}>
        <Text
          style={[
            styles.addedItem,
            {alignSelf: 'flex-start', marginLeft: 18, marginTop: 18},
          ]}>
          Address
        </Text>
        <Text
          style={[
            styles.addedItem,
            {
              fontSize: 14,
              marginTop: 18,
              color: 'blue',
              textDecorationLine: 'underline',
            },
          ]}
          onPress={() => {
            navigation.navigate('Address');
          }}>
          Edit Address
        </Text>
      </View>
      <Text
        style={[
          styles.addedItem,
          {
            alignSelf: 'flex-start',
            marginLeft: 18,
            marginTop: 10,
            fontSize: 16,
            flexWrap: 'wrap',
            paddingRight:10,
            textAlign:'left'
          },
        ]}>
        {selectedAddress.length > 70
          ? selectedAddress.substring(0, 70) + '...'
          : selectedAddress}
      </Text>
      <TouchableOpacity style={styles.payBtn}>
        <Text style={styles.payBtnText}>Pay & Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  productItems: {
    width: Dimensions.get('window').width,
    height: 107,
    backgroundColor: 'white',
    marginTop: 10,
    flexDirection: 'row',
    padding: 13,
    alignItems: 'center',
  },
  productImage: {
    height: 80,
    width: 80,
  },
  info: {
    flexDirection: 'column',
    marginLeft: 20,
    width: '80%',
  },
  productName: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
  productDesc: {
    marginRight: 20,
    marginTop: 5,
  },
  productPrice: {
    color: 'green',
    fontWeight: '700',
    marginTop: 5,
  },
  addToCart: {
    position: 'absolute',
    // height: 28,
    width: 28,
    borderRadius: 20,
    bottom: 12,
    right: 12,
    backgroundColor: '#C8CECB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: 'black',
  },
  quantityStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    padding: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  btnText: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
  },
  qtyBtnAlign: {
    flexDirection: 'row',
    position: 'absolute',
    width: '50%',
    // backgroundColor: 'red',
    alignItems: 'center',
    right: 0,
  },
  deleteBtn: {
    position: 'absolute',
    top: 10,
    right: 5,
  },
  addedItem: {
    fontSize: 17,
    color: 'black',
    marginTop: 5,
    marginBottom: 0,
    alignSelf: 'center',
  },
  addedItemView: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 150,
  },
  totaView: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderTopWidth: 0.5,
    paddingTop: 4,
  },
  paymentMethod: {
    width: '90%',
    paddingLeft: 30,
    marginTop: 10,
    flexDirection: 'row',
  },
  radio_1: {
    height: 22,
    width: 22,
  },
  paymentText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  payBtn: {
    height: 40,
    width: '87%',
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  payBtnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
});

