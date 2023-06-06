import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const Header = () => {

  const navigation = useNavigation()
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.goBack()}>
        <Image
          source={require('../src/images/backarrow.png')}
          style={[styles.icon, {height: 27}]}></Image>
        
      </TouchableOpacity>
      <Text style={styles.textstyle}>StopShop</Text>
      <TouchableOpacity style={styles.btn}>
        <Image
          source={require('../src/images/cart.png')}
          style={[styles.icon, {height: 27}]}></Image>
      </TouchableOpacity>
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
