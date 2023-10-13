import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courceGoals, setCourceGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoaldHandler = () => {
    console.log(enteredGoalText);
    setCourceGoals((prevState) => [...prevState, enteredGoalText]);
    setEnteredGoalText("");
  };

  const deleteGoalHandler = () => {
    setCourceGoals([]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Your cource goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoaldHandler} />
      </View>
      <View style={styles.goalsCOntainer}>
        {courceGoals.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
        {courceGoals.length > 0 && (
          <Button title="Delete all goals" onPress={deleteGoalHandler} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: { flex: 1, paddingTop: 50, paddingHorizontal: 16 },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsCOntainer: {
    flex: 5,
  },
});
