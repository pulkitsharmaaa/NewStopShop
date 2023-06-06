import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const Search = () => {
  const products = useSelector((state: RootState) => state.product.data);
  const [search, setSearch] = useState('');
  const [oldData, setOldData] = useState(products);

  const filterData = (txt: string) => {
    let newData = oldData.filter((item: { title: string; }) => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    });
    console.log(newData);
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
        <TouchableOpacity style={styles.searchBtn}>
          <FontAwesome name="search" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  Box: {
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
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
    marginTop: 20,
  },
  InputText: {
    marginRight: 32,
  },
  searchBtn: {
    position: 'absolute',
    right: 15,
    bottom: 13,
  },
});
