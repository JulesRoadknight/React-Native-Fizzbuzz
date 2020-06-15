import React from 'react';
import { View, Text, FlatList } from 'react-native';

const DisplayResult = ({data}) => {
  return(
    <View>
      <FlatList
       data={data}
       keyExtractor={(item) => item}
       renderItem={({item}) => <Message text={item} />}
      />
    </View>
  )
}

const Message = ({text}) => <Text>{text}</Text>;


export default DisplayResult;