import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import ButtonComponent from "./components/Button";
import FormComponent from "./components/Form";
import Greeting from "./components/Greeting";
import useCounter from "./hooks/useCounter";

const App = () => {
  const { count, increment, decrement } = useCounter();
  const [greetingVisible, setGreetingVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testando Componentes</Text>

      <View style={styles.testBox}>
        <Text style={styles.sectionTitle}>Teste do Botão</Text>
        <ButtonComponent title="Apertar" onPress={() => alert("Sucesso!")} />
      </View>

      <View style={styles.testBox}>
        <Text style={styles.sectionTitle}>Teste do Formulário</Text>
        <FormComponent />
      </View>

      <View style={styles.testBox}>
        <Text style={styles.sectionTitle}>Teste da Saudação</Text>
        <Greeting />
      </View>

      <View style={styles.testBox}>
        <Text style={styles.sectionTitle}>Teste do useCounter</Text>
        <Text style={styles.text}>Counter: {count}</Text>
        <Button title="+1" onPress={increment} />
        <Button title="-1" onPress={decrement} />
      </View>

      <View style={styles.testBox}>
        <Text style={styles.sectionTitle}>Renderização Condicional</Text>
        <Button
          title="Toggle Greeting"
          onPress={() => setGreetingVisible(!greetingVisible)}
        />
        {greetingVisible && <Text style={styles.text}>Olá, usuário!</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
    color: "#555",
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    color: "#333",
  },
  testBox: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
});

export default App;
