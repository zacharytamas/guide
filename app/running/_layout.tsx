import { SafeAreaView } from "react-native";
import RunningScreen from "./index";
import { StyleSheet } from "react-native";

export default function () {
  return (
    <SafeAreaView style={styles.container}>
      <RunningScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
