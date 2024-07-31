import { View, Text } from "@/components/Themed";
import { StyleSheet } from "react-native";

export default function RunningScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello from Running.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: {},
});
