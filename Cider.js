import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Cider({navigation}) {

  const stack = createNativeStackNavigator();

  return (
    <View style={styles .container}>

    <Text style={styles.cider}>Cider</Text>


</View>

);
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#00ff00',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0

    },
cider: {
   fontSize: 50

},
});