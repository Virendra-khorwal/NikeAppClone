import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCartTotals = () => (
  <View style={styles.totalContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>$320.0</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delievery</Text>
      <Text style={styles.text}>$10.0</Text>
    </View>
    <View style={styles.row}>
      <Text style={[styles.text, { fontWeight: "600" }]}>Total</Text>
      <Text style={[styles.text, { fontWeight: "600" }]}>$320.0</Text>
    </View>
  </View>
);

const ShoppingCart = () => {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={() => <ShoppingCartTotals />}
      />
      <Pressable onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "#e3e3e3",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    color: "#8e8e8e",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 100,
    alignItems: "center",
    position: "absolute",
    alignSelf: "center",
    bottom: 40,
    padding: 16,
    width: "90%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});
