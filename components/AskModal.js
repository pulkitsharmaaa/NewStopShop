import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AskModal = ({modalVisible, onClickLogin, onClickSignup, onClose}) =>{
  const navigation = useNavigation();
    return (
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalView}>
          <View style={styles.mainView}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => {
                onClose();
              }}>
              <AntDesign name="close" color={'black'} size={24} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                onClickLogin();
                navigation.navigate('Login')
              }}>
              <Text style={styles.textStyle}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                onClickSignup();
                navigation.navigate('Signup');
              }}>
              <Text style={styles.textStyle}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
};

export default AskModal;

const styles = StyleSheet.create({
  modalView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 200,
    width: '90%',
    justifyContent: 'center',
    verticalAlign: 'middle',
    flexDirection: 'column',
    // backgroundColor:'green'
  },
  btn: {
    width: '80%',
    height: 50,
    backgroundColor: '#F2a944',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  closeBtn:{
    alignSelf:'flex-end',
    marginRight:10,
    marginBottom:8,
    // backgroundColor:'orssange',
    width:25
  }
});