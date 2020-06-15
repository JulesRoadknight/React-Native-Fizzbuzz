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
        <Text>Yesyesyes</Text>
        <CheckNumberForm onSend={handleSend} />
        <DisplayResult data={result} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
