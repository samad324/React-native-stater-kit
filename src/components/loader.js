import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../constants";

export default class loader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
