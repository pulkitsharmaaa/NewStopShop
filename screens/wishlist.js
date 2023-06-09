// import {
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {useDispatch, useSelector} from 'react-redux';
// // import {addItemToCart} from '../redux/actions/cartActions';
// // import {removeItemFromWishlist} from '../redux/actions/wishlistActions';
// // import {RootStackParamList} from '../src';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// type Props = NativeStackScreenProps<RootStackParamList, 'Wishlist'>;
// const WishlistScreen = ({navigation}: Props) => {
//   const dispatch = useDispatch();
//   const wishlist = useSelector(state => state.wishlist.wishlist);
//   const products = useSelector(state => state.products.products);
//   console.log(wishlist);
//   const wishlistProducts = products.filter(product =>
//     wishlist.includes(product.id),
//   );

//   const handleAddToCart = (data: any) => {
//     dispatch(addItemToCart(data));
//   };
//   const handleRemoveFromWishlist = (data: any) => {
//     dispatch(removeItemFromWishlist(data));
//   };

//   const renderWishlistItems = ({item}) => {
//     return (
//       <View style={styles.container}>
//         <Image source={{uri: item.image}} style={styles.productImage} />
//         <TouchableOpacity
//           style={styles.addToWishlistBtn}
//           onPress={() => {
//             handleRemoveFromWishlist(item.id);
//           }}>
//           <Ionicons name="heart" color="red" size={30}></Ionicons>
//         </TouchableOpacity>
//         <View>
//           <Text numberOfLines={2} style={styles.itemName}>
//             {item.title}
//           </Text>
//           <View style={styles.infoContainer}>
//             <Text style={styles.itemPrice}>$ {item.price}</Text>
//             <TouchableOpacity
//               style={styles.removeItemBtn}
//               onPress={() => {
//                 handleAddToCart(item.id);
//               }}>
//               <Ionicons name="cart" color="black" size={24} />
//               <Text style={styles.removeItemText}>Add to cart</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   };
//   return (
//     <View style={styles.mainContainer}>
//       {wishlist.length === 0 ? (
//         <View style={styles.emptyWishlistContainer}>
//           <Image
//             style={styles.emptyWishlistImage}
//             source={require('../assets/wish-list-icon.jpeg')}
//           />
//           <Text style={styles.text1}>Your wishlist is empty!!</Text>
//           <Text style={styles.text2}>
//             Explore more and shortlist some items...
//           </Text>
//           <TouchableOpacity
//             style={styles.exploreBtn}
//             onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.exploreText}>Explore</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <View>
//           <FlatList
//             numColumns={1}
//             data={wishlistProducts}
//             renderItem={renderWishlistItems}
//             keyExtractor={item => item.id.toString()}></FlatList>
//         </View>
//       )}
//     </View>
//   );
// };

// export default WishlistScreen;

// const styles = StyleSheet.create({
//   mainContainer: {flex: 1, backgroundColor: 'white'},
//   emptyWishlistContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     height: 270,
//     width: '95%',
//     borderRadius: 10,
//     elevation: 4,
//     backgroundColor: '#fff',
//     marginLeft: 10,
//     marginBottom: 20,
//   },
//   infoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingLeft: 8,
//     paddingRight: 5,
//     marginTop: 5,
//     alignItems: 'center',
//   },
//   banner: {
//     width: '95%',
//     height: 220,
//     borderRadius: 10,
//     alignSelf: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   productImage: {
//     height: '55%',
//     margin: 5,
//     width: '100%',
//     borderTopLeftRadius: 10,
//     resizeMode: 'contain',
//     borderTopRightRadius: 10,
//   },
//   emptyWishlistImage: {
//     height: 300,
//     width: 300,
//   },
//   itemName: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginLeft: 10,
//     marginTop: 5,
//   },
//   addToWishlistBtn: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//     elevation: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   itemPrice: {
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   removeItemBtn: {
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingLeft: 6,
//     paddingRight: 6,
//     margin: 5,
//     paddingBottom: 6,
//     paddingTop: 6,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   removeItemText: {
//     fontSize: 15,
//     fontWeight: '700',
//   },
//   exploreBtn: {
//     backgroundColor: 'red',
//     height: 50,
//     width: 150,
//     borderRadius: 25,
//     alignContent: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   exploreText: {
//     color: 'white',
//     fontSize: 20,
//   },
//   text1: {
//     fontWeight: 'bold',
//     fontSize: 25,
//     color: 'black',
//     padding: 5,
//   },
//   text2: {
//     fontSize: 18,
//     color: 'black',
//     padding: 5,
//     marginBottom: 20,
//   },
// });


import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';

const Wishlist = ({navigation}) => {
  const items = useSelector(state => state.wishlist);
  const [wishlistItem, setWishlistItem] = useState(items.data);

  useEffect(() => {
    setWishlistItem(items.data);
  }, [items.data]);

  return (
    <View style={styles.main}>
      <FlatList
        data={wishlistItem}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('Details', {data: item})}
              style={styles.productItems}>
              <Image source={{uri: item.image}} style={styles.productImage} />
              <View style={styles.info}>
                <Text style={styles.productName}>
                  {item.title.length > 30
                    ? item.title.substring(0, 25) + '...'
                    : item.title}
                </Text>
                <Text style={styles.productDesc}>
                  {item.description.length > 30
                    ? item.description.substring(0, 40) + '...'
                    : item.description}
                </Text>
                <View style={styles.quantityStyle}>
                  <View>
                    <Text style={styles.productPrice}>{'$' + item.price}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Wishlist;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'green',
  },
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
  productDesc: {
    marginRight: 20,
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