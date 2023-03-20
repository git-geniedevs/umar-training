import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginButton from './screen/LoginButton';
import WellcomeScreen from './screen/WellcomeScreen';
import Card from './screen/Card';
import Details from './screen/Details';
export default function App() {
  return (
    <View>
      {/* <WellcomeScreen/> */}
      {/* <Card/> */}
      {/* <LoginButton/> */}
      <Details/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
    justifyContent: 'center',
  },
});
