import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import { store } from "./store";
import {StripeProvider} from '@stripe/stripe-react-native';

const STRIPE_KEY =
  "pk_test_51KZRCrSFO4aeYLOnkLWvenZYEkk8Fa9H299JOjPsajdWB1b4Mr83ULRJP81Dp2LZ8U2aX5RNCFIjY9l4DeEgCqeG00qYCMJjLs";

export default function App() {
  return (
    <Provider store={store}>
      <StripeProvider publishableKey={STRIPE_KEY}>
        <View style={styles.container}>
          <Navigation />
          <StatusBar style="auto" />
        </View>
      </StripeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
