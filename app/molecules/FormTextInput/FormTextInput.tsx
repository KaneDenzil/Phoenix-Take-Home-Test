import React, { FC } from 'react';
import { TextInput } from 'react-native';

interface FormTextInputProps {
  secureTextEntry: boolean;
  placeholder: string;
  placeholderTextColor: string;
  value: string;
  onChangeText: (text: string) => void;
}
const FormTextInput: FC <FormTextInputProps>= ({secureTextEntry,placeholder, placeholderTextColor, value, onChangeText}) => {
  return (
    <TextInput
      className="mb-6 w-full rounded-md border border-gray-100 px-4 py-5 text-sm"
      placeholder={placeholder}
      placeholderTextColor="#A0A0A0"
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

export default FormTextInput;