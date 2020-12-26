import React from "react";
import { StyleSheet, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import { Theme } from "../../theme";

export const HeaderLine = () => {
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <View style={styles.line} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  line: {
    width: 120,
    height: 5,
    backgroundColor: Theme.colors.lightgray,
    borderRadius: 5,
    marginVertical: 12,
    opacity: 0.5,
  },
});
