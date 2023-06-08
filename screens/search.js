import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {Image} from 'react-native';
import {Text} from 'react-native';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Search = ({navigation}) => {
  const products = useSelector(state => state);
  const [search, setSearch] = useState('');
  const [oldData] = useState(products.product.data);
  const [searchedList, setSearchedList] = useState(oldData);
  // console.log(JSON.stringify(products.product.data));

const filterData = txt => {
  // console.log('products:', products);
  // console.log('products.product:', products.product);
  // console.log('products.product.data:', products.product.data);

  let newData = products.product.data.filter(item => {
    return item.title.toLowerCase().includes(txt.toLowerCase());
  });
  // console.log('newData:', newData);

  setSearchedList(newData);
};



  return (
    <View style={styles.Box}>
      <View style={styles.InputView}>
        <TextInput
          value={search}
          onChangeText={txt => {
            setSearch(txt);
            filterData(txt);
          }}
          placeholder="Fashion, Mobile, Laptop....."
          style={styles.InputText}
        />
        {search !== '' && (
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => {
              setSearch('');
            }}>
            <FontAwesome name="close" size={25} />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        style={{marginTop: 20, width: Dimensions.get('window').width}}
        data={searchedList}
        renderItem={({item}) => {
          return (
            <View>
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
                      ? item.description.substring(0, 60) + '...'
                      : item.description}
                  </Text>
                  <Text style={styles.productPrice}>{'$' + item.price}</Text>
                </View>
                <TouchableOpacity style={styles.addToCart}>
                  <AntDesign name="heart" color={'#fff'} size={18} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  Box: {
    // height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    // flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  InputView: {
    backgroundColor: 'white',
    height: 45,
    fontSize: 15,
    width: '90%',
    padding: 0,
    paddingLeft: 17,
    paddingRight: 6,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    // top:-120
  },
  InputText: {
    marginRight: 32,
  },
  searchBtn: {
    position: 'absolute',
    right: 15,
    bottom: 9,
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







// import React from 'react';
// import {View, Text} from 'react-native'
// import { useSelector } from 'react-redux';

// const Search = () =>{
//   const products = useSelector(state => state);
//   console.log(JSON.stringify(products));
// return(
//   <View>
//     <Text>Search</Text>
//   </View>
// )
// }
// export default Search