import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';

let validInput = true;

const CheckNumberForm = ({onSend}) => {
  const [number, setNumber] = useState('');

  const handleSubmit = () => {
    validateNumber();
    validInput === true ? onSend(fizzbuzzChecker()) : null;
    setNumber('');
  }


  const validateNumber = () => {
    if (number == number.replace(/[^0-9]/g, '') && number.length > 0) {
      validInput=true;
    } else {
      validInput=false;
    }
  }

  const fizzbuzzChecker = () => {
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
        keyboardType={'number-pad'}
        testID={'numberField'}
        value={number}
        onChangeText={setNumber}
        style={styles.textInput}
      />
      { validInput===false &&
        <Text
          testID={'invalidInput'}
          style={styles.invalid}
        >
          Invalid input, please only type numbers
        </Text>
      }
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
  },
  invalid: {
    fontSize: 15,
    color: 'red'
  }
})

export default CheckNumberForm;