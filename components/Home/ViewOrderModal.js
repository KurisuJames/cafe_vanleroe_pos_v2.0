import { Modal, Pressable, ScrollView, StyleSheet, View } from "react-native";

import CustomerDetails from "./SmallComponents/ViewOrder/CustomerDetails";
import OrderDetails from "./SmallComponents/ViewOrder/OrderDetails";
import Discounts from "./SmallComponents/ViewOrder/Discounts";
import PayNow from "./SmallComponents/ViewOrder/PayNow";

export default function ViewOrderModal({ viewOrderState, setViewOrderState }) {
  return (
    <Modal visible={viewOrderState} transparent={true}>
      <Pressable
        onPress={() => {
          setViewOrderState(false);
        }}
      >
        <ScrollView style={styles.container}>
          <CustomerDetails />

          <View style={styles.borderLine}></View>

          <OrderDetails />

          <Discounts />

          <PayNow />
        </ScrollView>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "35%",
    flexDirection: "column",
    padding: 30,
  },
  borderLine: {
    borderWidth: 1,
    borderColor: "#E4E4E4",
    marginVertical: 20,
  },
});
