import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";

const formatTimeToString = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
};

export interface ActionListItemProps {
  name: string;
  expectedDuration?: number;
  elapsedTime: number;
}

export const ActionListItem = ({
  name,
  expectedDuration,
  elapsedTime,
}: ActionListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}></View>
      <View style={styles.actionDetailsContainer}>
        <Text style={{ fontWeight: "bold" }}>{name}</Text>
        <Text>Some details</Text>
      </View>
      <View>
        <Text>{formatTimeToString(elapsedTime)}</Text>
        <Text>{formatTimeToString(expectedDuration ?? 0)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    // NOTE: I'm sure there is a constant somewhere for the standard padding for the platform.
    padding: 10,
    // NOTE: Same here, I'm sure there is a constant for these, possibly even as an object to be spread.
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    // borderRadius: "100%",
  },
  actionDetailsContainer: {
    flex: 1,
    flexDirection: "column",
  },
});
