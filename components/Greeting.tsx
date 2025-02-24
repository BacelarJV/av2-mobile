import React, { useState } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

const Greeting: React.FC = () => {
  const [isGreeted, setIsGreeted] = useState(false);

  const toggleGreeting = () => {
    setIsGreeted(!isGreeted);
  };

  return (
    <View style={styles.container}>
      <Button title="Toggle Greeting" onPress={toggleGreeting} />
      <Text style={styles.text}>{isGreeted ? "Hello, User!" : "Goodbye!"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default Greeting;
