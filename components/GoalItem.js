import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#eee",
    borderColor: "#aaa",
    borderWidth: 1,
    borderStyle: "dotted"
  }
});

export default GoalItem;
