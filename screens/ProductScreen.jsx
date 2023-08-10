
import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { setSelectedProduct } from '../store/ProductSlice';
import { useGetProductsQuery } from '../store/apiSlice';

const ProductScreen = ({navigation}) => {

  const dispatch = useDispatch()

  const {data, isLoading, error} = useGetProductsQuery()

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    // console.log(error)
    return <Text>Error Fetching Products {error.error} </Text>
  }

  const products = data.data


  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable onPress={() => {
          // dispatch(setSelectedProduct(item.id))
          navigation.navigate("Product Details", {id: item._id})}} style={styles.itemContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
}

export default ProductScreen

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});