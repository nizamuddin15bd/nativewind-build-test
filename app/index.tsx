import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <Link href={"/(tabs)/home"} className="text-orange-400 text-2xl flex items-center justify-center h-full">Go to home</Link>
    </View>
  );
}
