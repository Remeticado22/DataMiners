import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './Component/Helloworld';
import Username from './Component/Username';
import Counter from './Component/Counter';

export default function App() {
  return (
    <View style={styles.container}>
     <HelloWorld />
     <Username />
     <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
