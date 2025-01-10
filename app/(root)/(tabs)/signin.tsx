import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Importa la imagen directamente
import onboarding from "@/assets/images/onboarding.png";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        {/* Usa la imagen importada directamente */}
        <Image
          source={onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        
        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>Bienvenido a ReState</Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>Let's Get You Closer to {"\n"} Your Ideal Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;