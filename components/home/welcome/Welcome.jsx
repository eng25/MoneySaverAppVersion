import { useState } from "react";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Susan!</Text>
        <FlatList
          data={[
            { key: "Rent Due in 5 Days" },
            { key: "Hulu Subscription Due Tomorrow" },
            { key: "Disney+ Subscription Due Now" },
          ]}
          renderItem={({ item }) => (
            <Text style={styles2.item}>{item.key}</Text>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
