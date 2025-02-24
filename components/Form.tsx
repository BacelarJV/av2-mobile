import React, { useState } from "react";
import { TextInput, Button, StyleSheet, View, Text } from "react-native";

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Type something"
      />
      <Button title="Submit" onPress={handleSubmit} />
      {submittedValue ? <Text>Submitted: {submittedValue}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default Form;
