import React from "react";
import { Text, View } from "react-native";

const GreetUser = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          backgroundColor: "black",
          fontWeight: "900",
          fontSize: 12,
        }}
      >
        Hello, {props.name}!
      </Text>
    </View>
  );
};

const Username = () => {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "black",
        opacity: 0.9,
        paddingTop: 20,
        paddingBottom: 20,
        gap: 32,
        borderWidth: 2,
        borderColor: "white",
        width: 800,
      }}
    >
      <GreetUser name="Kyle" />
      <GreetUser name="Jhon Dave" />
      <GreetUser name="Chayzelle" />
    </View>
  );
};

export default Username;