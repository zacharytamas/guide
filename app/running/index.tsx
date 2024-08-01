import { ActionListItem } from "@/components/running/ActionListItem";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

interface IAction {
  name: string;
}

export default function RunningScreen() {
  const [actions, setActions] = useState<IAction[]>([
    { name: "action 1" },
    { name: "action 2" },
    { name: "action 3" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={actions}
        renderItem={({ item }) => <ActionListItem name={item.name} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
