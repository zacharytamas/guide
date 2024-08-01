import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";

export interface ActionListItemProps {
  name: string;
}

export const ActionListItem = ({ name }: ActionListItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // NOTE: I'm sure there is a constant somewhere for the standard padding for the platform.
    padding: 10,
    // NOTE: Same here, I'm sure there is a constant for these, possibly even as an object to be spread.
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
