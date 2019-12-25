import React from "react";
import { View, StyleSheet, Button } from "react-native";

const ClearButton = props => {
  return (
    <View style={styles.clearButton}>
      <Button color="#ff0000" title="CLEAR" onPress={props.onClearGoals} />
    </View>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    marginTop: 5,
    marginBottom: 20
  }
});

export default ClearButton;
