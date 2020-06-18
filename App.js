import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import CheckNumberForm from './src/CheckNumberForm';
import DisplayResult from './src/DisplayResult';

const App = () => {
  const [result, setResult] = useState('');

  const handleSend = newNumber => {
    setResult(newNumber);
  }

  return (
    <>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Text style={styles.title}>
          Fizzbuzz
        </Text>
        <CheckNumberForm
          onSend={handleSend}
          style={styles.form}
        />
        <DisplayResult
          data={result}
          style={styles.result}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 70,
    textAlign: "center",
    fontSize: 40
  },
  form: {
    marginTop: 50
  },
  result: {
    position: "relative",
  }
});

export default App;
