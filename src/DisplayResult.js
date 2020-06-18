import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DisplayResult = ({data}) => {
  return(
    <View>
      {/* <FlatList
       data={data}
       keyExtractor={(item) => item}
       renderItem={({item}) => <Message text={item} />}
      /> */}
      <Message
        text={data}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  result: {
    position: "relative",
    fontSize: 50,
    textAlign: "center",
  }
})

const Message = ({text}) => <Text style={styles.result}>{text}</Text>;


export default DisplayResult;