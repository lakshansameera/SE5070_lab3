import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native Lab</Text>
      <Text style={styles.text}>You clicked {count} times</Text>
      <Button title="Press Here" onPress={() => setCount(count + 1)} />
      <Text style={[styles.title, { marginTop: 20 }]}>Sameera Lakshan</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a7e3f0",
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});
