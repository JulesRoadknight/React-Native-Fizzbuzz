import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';

const CheckNumberForm = ({onSend}) => {
  const [number, setNumber] = useState('');

  const handleSubmit = () => {
    onSend(fizzbuzzChecker(number));
    setNumber('');
  }

  const fizzbuzzChecker = (number) => {
    if (number % 15 == 0) {
      return 'Fizzbuzz'
    } else if (number % 3 == 0) {
      return 'Fizz'
    } else if(number % 5 == 0) {
      return 'Buzz'
    } else {
      return number
    }
  }

  return(
    <View style={styles.form}>
      <Text style={{fontSize: 20}}>
        Enter a number to check:
      </Text>
      <TextInput
        testID={'numberField'}
        value={number}
        onChangeText={setNumber}
        style={styles.textInput}
      />
      <Button
        onPress={handleSubmit}
        testID={'submitNumber'}
        title={'Check'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 40,
  },
  textInput: {
    fontSize: 20,
    backgroundColor: "#f0f0f0"
  }
})

export default CheckNumberForm;