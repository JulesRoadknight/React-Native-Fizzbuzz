import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const CheckNumberForm = ({onSend}) => {
  const [number, setNumber] = useState('');

  const handleSubmit = () => {
    onSend(number);
    setNumber('');
  }

  return(
    <View>
      <TextInput
        style={styles.inputField}
        testID={'numberField'}
        value={number}
        onChangeText={setNumber}
      />
      <Button onPress={handleSubmit} testID={'submitNumber'} title={'Check'} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputField: {
    marginTop: 50
  }
})

export default CheckNumberForm;