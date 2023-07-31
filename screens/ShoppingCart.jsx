import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import CartListItem from "../components/CartListItem";
import { selectSubCartTotal, selectDeliveryFee, selectTotal  } from "../store/cartSlice";


const ShoppingCartTotals = ({subTotal, deliveryFee, total}) => (
  <View style={styles.totalContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>${subTotal}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delievery</Text>
      <Text style={styles.text}>${deliveryFee}</Text>
    </View>
    <View style={styles.row}>
      <Text style={[styles.text, { fontWeight: "600" }]}>Total</Text>
      <Text style={[styles.text, { fontWeight: "600" }]}>${total}</Text>
    </View>
  </View>
);

const ShoppingCart = () => {

  const cart = useSelector(state => state.cart.item)  
  const cartSubTotal = useSelector(selectSubCartTotal)
  const deliveryFee = useSelector(selectDeliveryFee)
  const total = useSelector(selectTotal)
  

  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={() => <ShoppingCartTotals subTotal={cartSubTotal} deliveryFee={deliveryFee} total={total} />}
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
