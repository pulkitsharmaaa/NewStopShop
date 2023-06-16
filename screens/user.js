import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/header';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import auth from '@react-native-firebase/auth';
// import { useNavigation } from '@react-navigation/native';


const User = () =>{
  // const navigation = useNavigation();

  // const logoutUser = () =>{
  //   auth()
  //     .signOut()
  //     .then(() => {console.log('User signed out!')
  //   navigation.navigate('Login');});
      
  // }
    return (
      <View style={styles.container}>
        <Header />
        <FontAwesome5
          name="user-cog"
          size={50}
          color={'skyblue'}
          style={styles.icon}
        />
        <Text style={styles.name}>Pulkit</Text>
        <Text style={styles.email}>pulkit.sharma@netsmartz.com</Text>
        <TouchableOpacity style={[styles.btn, {marginTop: 40}]}>
          <Text style={styles.btnText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutBtn}
          activeOpacity={1}>
        <Text style={[styles.btnText,{color:'white'}]}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
}

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {
    alignSelf: 'center',
    marginTop: 50,
  },
  name: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  email: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  btn: {
    width: '90%',
    height: 45,
    borderBottomWidth: 0.3,
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'center',
    marginTop: 15,
    paddingLeft: 20,
  },
  btnText: {
    fontSize: 16,
    color:'black'
  },
  logoutBtn: {
    height: 40,
    width: '40%',
    alignSelf: 'center',
    backgroundColor: 'darkblue',
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    color:'white'
  },
});