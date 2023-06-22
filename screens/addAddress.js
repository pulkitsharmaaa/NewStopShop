import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addAddress} from '../redux/slices/AddressSlice';
import {useNavigation} from '@react-navigation/native';

const AddAddress = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [fullname, setFullname] = useState('');
  const [houseno, sethouseno] = useState('');
  const [area, setarea] = useState('');
  const [town, setTown] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');

  return (
    <ScrollView style={styles.main}>
      <TextInput
        style={[styles.input, {marginTop: 30}]}
        placeholder="Full Name"
        value={fullname}
        onChangeText={txt => setFullname(txt)}></TextInput>
      <TextInput
        style={[styles.input]}
        placeholder="Flat, House no, Building, company..."
        value={houseno}
        onChangeText={txt => sethouseno(txt)}></TextInput>
      <TextInput
        style={[styles.input]}
        placeholder="Area, Street, Sector, Village"
        value={area}
        onChangeText={txt => setarea(txt)}></TextInput>
      <TextInput
        style={[styles.input]}
        placeholder="Town/City"
        value={town}
        onChangeText={txt => setTown(txt)}></TextInput>
      <TextInput
        style={[styles.input]}
        placeholder="State"
        value={state}
        onChangeText={txt => setState(txt)}></TextInput>
      <TextInput
        style={[styles.input]}
        placeholder="Pincode"
        keyboardType="number-pad"
        value={pincode}
        onChangeText={txt => setPincode(txt)}></TextInput>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={1}
        onPress={() => {
          dispatch(addAddress({fullname, houseno, area, town, state, pincode})),
            navigation.goBack();
        }}>
        <Text style={styles.btnText}>Save Address</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddAddress;

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
  input: {
    width: '90%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.3,
    alignSelf: 'center',
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  btn: {
    height: 40,
    width: '87%',
    alignSelf: 'center',
    backgroundColor: '#F2a944',
    borderRadius: 20,
    marginTop: 25,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
});
