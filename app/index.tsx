import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-300 ">
      <Text className="font-bold my-10 font-rubik text-3xl">Welcome to ReState</Text>

      <Link className="" href="/signin">Sign In</Link>
      <Link className="" href="/explore">Explore</Link>
      <Link className="" href="/profile">Profile</Link>
      <Link className="" href="/properties/1">Property</Link>
    </View>
  );
}

