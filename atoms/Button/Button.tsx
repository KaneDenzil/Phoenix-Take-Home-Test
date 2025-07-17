import React, { FC } from 'react';
import { Pressable, Text } from 'react-native';

interface ButtonProps {
  text: string;
}
const Button: FC<ButtonProps> = ({
    text
}) => {
  return (
    <Pressable className="bg-primary mb-4 w-full rounded-md py-3" onPress={() => console.log(`${text} Button pressed`)}>
      <Text className="font-nunito text-center text-base text-white">{text}</Text>
    </Pressable>
  );
}

export default Button;