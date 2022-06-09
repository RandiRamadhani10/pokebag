import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Main from './src/main';
const App = () => {
  const [number, setNumber] = useState('');
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  const slowFunction = num => {
    console.log('slow function triger');
    return num;
  };
  const doubleNumber = useMemo(() => {
    slowFunction(number);
    return number * 2;
  }, [number]);
  const getItems = useCallback(
    value => {
      return [value + number, value + number + 3];
    },
    [],
  );
  return (
    <View style={{flex: 1, alignItems: 'center', width: '100%', padding: 20}}>
      <TextInput
        value={number}
        style={{
          height: 50,
          marginTop: 40,
          backgroundColor: 'blue',
          width: '100%',
        }}
        onChangeText={e => {
          setNumber(parseInt(e));
        }}
      />
      <TouchableOpacity
        onPress={() => {
          setDark(!dark);
        }}>
        <Text>Change Theme</Text>
      </TouchableOpacity>
      <View style={themeStyle}>
        <Text>{doubleNumber}</Text>
        <Main getItems={getItems} />
      </View>
    </View>
  );
};

export default App;
