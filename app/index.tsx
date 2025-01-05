import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-black ">
      <Text className="text-orange-300">app/index.tsx</Text>

      <Link className="text-white" href="/signin">Sign In</Link>
      <Link className="text-green-600" href="/explore">Explore</Link>
      <Link className="text-blue-400" href="/profile">Profile</Link>
      <Link className="text-red-500" href="/properties/1">Property</Link>
    </View>
  );
}

