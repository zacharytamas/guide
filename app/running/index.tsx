import { ActionListItem } from "@/components/running/ActionListItem";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

interface IAction {
  name: string;
  /** An estimate of how long this action will take, in seconds. */
  expectedDuration?: number;
  /** Elapsed time, in seconds. */
  elapsedTime: number;
}

/** The state of the timer. */
type TimerState = "running" | "paused";
type WorkflowState = "idle" | "active";

interface WorkflowRun {
  state: WorkflowState;
  timerState: TimerState;

  /** Actions in the workflow's queue. */
  actions: IAction[];
  /** The index of the action currently being executed. */
  currentActionIndex: number;
}

// Concepts on a workflow:
// - Workflows are a collection of actions that are executed in a sequence.
// - Workflows have an action which is currently being executed (or not if idle or the list completed).
// - Workflows have a timer that tracks how long the current action has been running.
// - Workflows can be paused, which pauses the timer.
// - Workflows can be resumed, which resumes the timer.
// - Actions can have an expected duration, which is the estimated amount of time (in seconds) it will take to complete.
// - Actions can have an elapsed time, which is the amount of time (in seconds) that the action was the current action and the timer was running.
// - It is possible that Actions' elapsed time is greater than the expected duration, which is the likely case when the action is taking longer than expected.

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
