import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ClassComponent from './src/class-component';
import FunctionComponent from './src/function-component';

export default function App() {
  return (
    <View >
      <ClassComponent/>
      <FunctionComponent/>
    </View>
  );
}


