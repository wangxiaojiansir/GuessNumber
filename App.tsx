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
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  StatusBar,
  Image,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
let number = 0;
let count = 0;
const App = () => {
  const [text, setText] = React.useState('');
  React.useEffect(() => {
    initNumber();
  }, []);
  function doGuess() {
    count++;
    // eslint-disable-next-line radix
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
  let pic = {
    uri:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590649183132&di=59e1d2148d826556fdddd2ba963719d2&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853',
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput style={styles.input} value={text} onChangeText={setText} />
        <Button title="猜" onPress={doGuess} />
        <Image source={pic} style={styles.img} />

        <ActivityIndicator animating={true} size="large" color="#0000ff" />
      </SafeAreaView>
      <Button
        onPress={doGuess}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 100,
    resizeMode: 'stretch',
  },
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
