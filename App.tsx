/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, StatusBar, } from 'react-native';
let number = 0;
let count = 0;
const App = () => {
  const [text, setText] = React.useState('');
  React.useEffect(() => {
    initNumber();
  }, []);
  function doGuess() {
    count++;
    const numberValue = parseInt(text);
    if (numberValue === number) {
      Alert.alert(`猜中了,一共猜了${count}`);
      initNumber();
    } else if (numberValue < number) {
      Alert.alert('猜小了');
    } else {
      Alert.alert('猜大了');
    }
  }
  function initNumber() {
    number = Math.round(Math.random() * 100);
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}></TextInput>
        <Button title="猜" onPress={doGuess}></Button>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 30,
    fontSize: 16,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
