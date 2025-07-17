import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface LinkProps {
  text: string;
}
const Link: FC<LinkProps> = ({ text }) => {
  return (
    <TouchableOpacity className="mb-2" onPress={() => console.log(`${text} Link pressed`)}>
      <Text className="text-link text-center text-sm underline">{text}</Text>
    </TouchableOpacity>
  );
}

export default Link;

