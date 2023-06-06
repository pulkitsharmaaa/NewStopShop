import React from 'react';
import {View, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface CustomTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  icon: any;
  type?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  icon,
  type,
}) => {
  return (
    <View
      style={{
        width: '85%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 13,
      }}>
      <Image source={icon} style={{width: 24, height: 24}} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={type ? true : false}
        style={{marginLeft: 10}}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomTextInput;
