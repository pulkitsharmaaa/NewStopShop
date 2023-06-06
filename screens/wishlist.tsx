import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store'; // Assuming you have a separate file called "store.ts" where the RootState type is defined

const Wishlist = () => {
  const products = useSelector((state: RootState) => state.product.data);
  console.log(JSON.stringify(products));

  return (
    <View>
      <Text>Wishlist</Text>
    </View>
  );
};

export default Wishlist;
