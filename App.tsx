import './global.css';
import { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Pressable,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import { useFonts } from 'expo-font';
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
  <SafeAreaView className="bg-primary flex-1">
    <View className="bg-primary h-14 items-center justify-center shadow-md">
      <Text className="text-accent text-[22px] font-bold tracking-[2px] uppercase">
        Phoenix
      </Text>
    </View>

<ScrollView className='bg-white' contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}>
      <View className=" items-center px-4 pt-20">
        <View className="w-full max-w-sm">
          <View className="bg-primary p-3 rounded-md mb-3 self-center">
            <Svg
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f59e42"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round">
              <Circle cx={12} cy={16} r={1} />
              <Rect x={3} y={10} width={18} height={12} rx={2} />
              <Path d="M7 10V7a5 5 0 0 1 10 0v3" />
            </Svg>
          </View>

          <Text className="text-base font-nonito text-center mb-6 text-neutral-800">
            Patient Sign In
          </Text>

          <TextInput
            className="w-full border border-gray-100 rounded-md px-4 py-5 mb-6 text-sm"
            placeholder="Email Address"
            placeholderTextColor="#A0A0A0"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            className="w-full border border-gray-100 rounded-md px-4 py-5 mb-6 text-sm"
            placeholder="Password"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Pressable className="bg-primary w-full rounded-md py-3 mb-4">
            <Text className="text-white text-center text-base font-nunito">
              Sign In
            </Text>
          </Pressable>

          <TouchableOpacity className="mb-2">
            <Text className="text-link text-sm text-center underline">
              Start your new treatment here
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="mb-2">
            <Text className="text-link text-sm text-center underline">
              Forgot your password?
            </Text>
          </TouchableOpacity>

          <Text className="text-xs text-gray-400 mt-2 text-center">
            Copyright © Phoenix Digital Health Inc. 2025
          </Text>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);
}
