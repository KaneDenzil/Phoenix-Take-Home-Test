import '../global.css';
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from './atoms';
import { router } from 'expo-router';

const Intro: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center p-8 w-full max-w-md mx-auto">
      <Text className="text-2xl font-bold mb-3">Phoenix Interview Presentation</Text>
      <View className="flex flex-col justify-between w-full space-y-4">
        <Button className="bg-primary w-full rounded-md mb-3" text="Login Screen" onPress={()=> router.push("/screens/Login")}/>
        <Button className="bg-primary w-full rounded-md" text="Push Notification Test Screen" onPress={()=> router.push("/screens/PushNotificationTest")} />
      </View>
    </View>
  );
};

export default Intro;
