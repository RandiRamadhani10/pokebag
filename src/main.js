import React, {useCallback, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
const Main = ({getItems}) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    console.log('child renderer');
    setItem(getItems(2));
  }, [getItems]);
  return (
    <View style={{backgroundColor: 'red', width: '100%'}}>
      {item.map((data, index) => {
        return (
          <Text key={index} style={{fontSize: 20, color: 'black'}}>
            Child component {data}
          </Text>
        );
      })}
    </View>
  );
};

export default Main;
