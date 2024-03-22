import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform } from 'react-native';
import Routes from './src/routes/Routes';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <NavigationContainer>    
      <StatusBar translucent={false} style='light' backgroundColor='#000'/>
      <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
