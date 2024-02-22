import React from "react";
import { Text, View, Image } from "react-native";

const HelloWorld = () => {
  return (
    <View>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
          fontStyle: "italic",
          backgroundColor: "blue",
          
        }}
      >
        DATA MINERS
      </Text>
      <Image
        source={{
          uri: "https://t3.ftcdn.net/jpg/01/70/28/92/240_F_170289223_KNx1FpHz8r5ody9XZq5kMOfNDxsZphLz.jpg",
        }}
        style={{
          width: 350,
          height: 300,
          opacity: 0.9,
          
        }}
      />
    </View>
  );
};

export default HelloWorld;