import { StyleSheet, Text, View} from 'react-native';
import Ex04 from './src/component/Ex04';

export default function App() {
  return (
    <View style={styles.container}>
      <Ex04/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB	',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
