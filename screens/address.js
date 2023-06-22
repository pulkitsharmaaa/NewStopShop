import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Address = () => {
  const navigation = useNavigation();
  const addressList = useSelector(state => state.address);
  // console.log(addressList);
  const isFocused = useIsFocused();
  useEffect(() => {
    console.log(addressList);
  }, [isFocused]);
  const defaultAddress = async item => {
    try {
      await AsyncStorage.setItem(
        'MY_ADDRESS',
        item.fullname +
          ', ' +
          item.houseno +
          ', ' +
          item.area +
          ', ' +
          item.town +
          ', ' +
          item.state +
          ', ' +
          item.pincode,
      );
      navigation.goBack();
    } catch (error) {
      console.error('Error while setting default address:', error);
    }
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={addressList.data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.flatListContainer}
              onPress={() => {
                defaultAddress(item);
              }}>
              <Text style={{color: 'black', fontSize: 15, fontWeight: '700'}}>
                {item.fullname}
              </Text>
              <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
                <Text>Address: {item.houseno}, </Text>
                <Text>{item.area}, </Text>
                <Text>{item.town}, </Text>
                <Text>{item.state}</Text>
              </View>
              <Text>{item.pincode}</Text>
            </TouchableOpacity>
          );
        }}
      />

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          navigation.navigate('AddAddress');
        }}>
        <AntDesign name="plus" size={27} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  addBtn: {
    width: 50,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 25,
    position: 'absolute',
    bottom: 50,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    width: '90%',
    height: 'auto',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    marginTop: 15,
    padding: 10,
    elevation: 5,
  },
});
