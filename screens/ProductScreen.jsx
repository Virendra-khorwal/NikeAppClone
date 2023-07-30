
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { setSelectedProduct } from '../store/ProductSlice';

const ProductScreen = ({navigation}) => {

  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch()

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable onPress={() => {
          dispatch(setSelectedProduct(item.id))
          navigation.navigate("Product Details")}} style={styles.itemContainer}>
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