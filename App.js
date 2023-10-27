import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './HomePage';
import Apelsin from './Apelsin';
import Cider from './Cider';
import { NavigationContainer } from '@react-navigation/native';
import Banan from './Banan';


export default function App() {

  const stack = createNativeStackNavigator()
  
  return (
    <NavigationContainer>
      <stack.Navigator>

      <stack.Screen name="Start sida" component={HomePage} />
      <stack.Screen name="Apelsin" component={Apelsin} />
      <stack.Screen name="Cider" component={Cider} />
      <stack.Screen name="Banan" component={Banan} />
      

      </stack.Navigator>
    </NavigationContainer>
  );
  }