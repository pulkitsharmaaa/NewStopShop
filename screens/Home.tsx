import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/AppNavigator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { addProducts } from '../redux/slices/ProductSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

interface Product {
  price: string;
  description: string;
  image: string;
  id: number;
  title: string;
}

const Home = ({ navigation }: Props)=> {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch()

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = (): void => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
      dispatch(addProducts(JSON));
  };

  return (
    <View style={{flex: 1}}>
      <Header />
      <FlatList
        data={products}
        renderItem={({item}): JSX.Element => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('Details', {data: item})}
            style={styles.productItems}>
            <Image
              source={{uri: item.image}}
              style={styles.productImage}></Image>
            <View style={styles.info}>
              <Text style={styles.productName}>
                {item.title.length > 30
                  ? item.title.substring(0, 25) + '...'
                  : item.title}
              </Text>
              <Text style={styles.productDesc}>
                {item.description.length > 30
                  ? item.description.substring(0, 60) + '...'
                  : item.description}
              </Text>
              <Text style={styles.productPrice}>{'$' + item.price}</Text>
            </View>
            <TouchableOpacity style={styles.addToCart}>
              <AntDesign name="heart" color={'#fff'} size={18} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
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
  productDesc:{
    marginRight:20
  },
  productPrice: {
    color: 'green',
    fontWeight: '700',
    marginTop: 5,
  },
  addToCart: {
    position: 'absolute',
    height: 28,
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
});
