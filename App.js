import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import Orientation from "react-native-orientation";

export default function App() {
  return (
    <View>
      <Modal style={{ flex: 1 }} visible={true}>
        <View style={styles.container}>
          <View
            style={{
              flex: 0.11,
              backgroundColor: "blue",
              alignItems: "center"
            }}
          >
            <TouchableOpacity onPress={() => alert("hello")}>
              <Text
                style={{
                  fontSize: 13,
                  padding: 6,
                  borderRadius: 5,
                  backgroundColor: "white",
                  color: "black",
                  marginTop: 20,
                  transform: [{ rotate: "-90deg" }]
                }}
              >
                Done
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 0.89,
              alignItems: "center",
              justifyContent: "center",
              transform: [{ rotate: "-90deg" }]
            }}
          >
            <Text>Image Box</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    justifyContent: "center"
  }
});
