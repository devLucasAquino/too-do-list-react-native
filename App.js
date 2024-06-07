import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder='Your course goal!'/>
        <Button title='Add Goal'/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 

});
