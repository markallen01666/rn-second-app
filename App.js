// Study goals React Native app from Max Swarzmuller Udemy course with extra features included by me

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from './components/GoalInput';
import ClearButton from './components/ClearButton';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false); 

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: new Date().getTime().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const cancelAddGoalHandler = () => {
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const clearGoalsHandler = () => {
    setCourseGoals(currentGoals => []);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <ClearButton onClearGoals={clearGoalsHandler} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancelAddGoal={cancelAddGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  }
});
