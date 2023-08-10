import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
// import products from "../data/products";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { addToCartItem } from "../store/cartSlice";
import { useState } from "react";
import { useGetProductQuery } from "../store/apiSlice";

const { width } = Dimensions.get("window");

const ProductDetailsScreen = ({ route }) => {
  const id = route.params.id;
  const { data, isLoading, error } = useGetProductQuery(id);

  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart.item);

  // const isAlreadyInCart = cart.findIndex((item) => item.id === product.id) > -1;

  const addToCart = () => {
    dispatch(addToCartItem({ product }));
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error Fetching Products {error.error} </Text>;
  }

  const product = data.data;

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <Pressable onPress={addToCart} style={styles.button}>
        {/* { isAlreadyInCart ? (
          <Text style={{color: 'white'}}> Go to cart</Text>
        ) : (
          <>
            <FontAwesome name="cart-plus" size={24} color="white" />
            <Text style={styles.buttonText}>Add to Cart</Text>
          </>
        )} */}
        <FontAwesome name="cart-plus" size={24} color="white" />
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: width,
    aspectRatio: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 2,
  },
  description: {
    marginVertical: 10,
    lineHeight: 30,
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 100,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    alignSelf: "center",
    bottom: 30,
    padding: 16,
    width: "90%",
    flexDirection: "row",
    gap: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});
