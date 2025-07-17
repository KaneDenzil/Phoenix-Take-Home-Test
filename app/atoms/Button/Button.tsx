import React, { FC } from 'react';
import { Pressable, Text } from 'react-native';

interface ButtonProps {
  className: string;
  text: string;
  onPress?: () => void;
}
const Button: FC<ButtonProps> = ({ className, text, onPress }) => {
  return (
    <Pressable
      className={className}
      onPress={onPress ? onPress : () => console.log(`${text} Button pressed`)}>
      <Text className="font-nunito text-center text-base text-white">{text}</Text>
    </Pressable>
  );
};

export default Button;
