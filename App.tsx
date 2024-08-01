import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import GarageScreen from "./src/screens/GarageScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GarageScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E20",
    alignItems: "center",
    justifyContent: "center",
  },
});
