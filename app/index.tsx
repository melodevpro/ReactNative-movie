import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-200 ">
      <Text className="font-bold my-10 font-rubik text-3xl text-slate-100">Welcome to ReState</Text>

      <Link className="text-white" href="/signin">Sign In</Link>
      <Link className="text-green-600" href="/explore">Explore</Link>
      <Link className="text-blue-400" href="/profile">Profile</Link>
      <Link className="text-red-500" href="/properties/1">Property</Link>
    </View>
  );
}

