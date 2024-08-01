import { ActionListItem } from "@/components/running/ActionListItem";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

interface IAction {
  name: string;
  /** An estimate of how long this action will take, in seconds. */
  expectedDuration?: number;
  /** Elapsed time, in seconds. */
  elapsedTime: number;
}

export default function RunningScreen() {
  const [actions, setActions] = useState<IAction[]>([
    { name: "action 1", expectedDuration: 10, elapsedTime: 0 },
    { name: "action 2", expectedDuration: 10, elapsedTime: 0 },
    { name: "action 3", expectedDuration: 10, elapsedTime: 0 },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={actions}
        renderItem={({ item }) => (
          <ActionListItem
            name={item.name}
            expectedDuration={item.expectedDuration}
            elapsedTime={item.elapsedTime}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
