import './global.css';
import { useState } from 'react';
import { View, TextInput, Text, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle, Rect, Path } from 'react-native-svg';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <View>
        <Text>Phoenix</Text>
      </View>

      <View style={{ alignItems: 'center', marginVertical: 24 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
          >
        <Circle cx={12} cy={16} r={1} />
        <Rect x={3} y={10} width={18} height={12} rx={2} />
        <Path d="M7 10V7a5 5 0 0 1 10 0v3" />
          </Svg>
        </View>
          <Text style={{ marginLeft: 8, fontSize: 18, fontWeight: 'bold' }}>Patient Sign In</Text>
      </View>

        <View>
          <View>
            <View>
              <TextInput
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Text>Email Address</Text>
            </View>
          </View>

          <View>
            <View>
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <Text>Password</Text>
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
              </Pressable>
            </View>
          </View>

          <Pressable>
            <Text>Sign In</Text>
          </Pressable>

          <View>
            <Text>Forgot your password?</Text>
            <Text>Start your new treatment here</Text>
          </View>

          <View>
            <Text>
              © 2025 <Text>Phoenix Digital Health Inc.</Text>
            </Text>
          </View>
        </View>
    </View>
  );
}
