import React,{useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;


const Splash = ({navigation}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 2500);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../src/images/Splash.jpg')}
        style={{width: '100%', height: 620}}></Image>
    </View>
  );
};

export default Splash;


