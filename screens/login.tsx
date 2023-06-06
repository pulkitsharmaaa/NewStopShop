import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  View,
  TextInput,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {RootStackParamList} from '../components/AppNavigator';
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({navigation}: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('BottomNavigator');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  return (
    <ImageBackground
      source={require('../src/images/Gradient-Background-Wallpaper-015.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.viewstyle}>
        <Image
          source={require('../src/images/icons8-login-64.png')}
          style={styles.iconstyle}
        />
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.loginButtonStyle}
            onPress={handleLogin}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
          <View style={styles.signupcontainer}>
            <Text style={styles.buttonTextStyle}>
              Don't have a account?{' '}
                <Text
                  style={styles.clickhere}
                  onPress={() => navigation.navigate('Signup')}>
                  {' '}
                  click here{' '}
                </Text>{' '}
              to SignUp.
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  viewstyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 620,
  },
  iconstyle: {
    marginBottom: 10,
  },
  inputStyle: {
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 1.5,
    height: 45,
    width: 280,
    marginBottom: 10,
    textAlign: 'center',
  },
  loginButtonStyle: {
    height: 35,
    width: 150,
    backgroundColor: '#0080FF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: 'black',
    fontSize: 15,
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  signupcontainer: {
    marginTop: 15,
  },
  signuptext: {
    color: 'black',
  },
  clickhere: {
    color: 'darkblue',
    fontSize: 15,
    alignItems: 'center',
  },
});

export default Login;
