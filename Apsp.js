import React, { useState } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';

const App = () => {
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');
  const [dropdown3Value, setDropdown3Value] = useState('');
  const [dropdown4Value, setDropdown4Value] = useState('');
  const [textInput1Value, setTextInput1Value] = useState('');
  const [textInput2Value, setTextInput2Value] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginBottom: 20 }}>
        <Text>Dropdown 1:</Text>
        <Picker
          selectedValue={dropdown1Value}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => setDropdown1Value(itemValue)}>
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>Dropdown 2:</Text>
        <Picker
          selectedValue={dropdown2Value}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => setDropdown2Value(itemValue)}>
          <Picker.Item label="Option A" value="optionA" />
          <Picker.Item label="Option B" value="optionB" />
          <Picker.Item label="Option C" value="optionC" />
        </Picker>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>Dropdown 3:</Text>
        <Picker
          selectedValue={dropdown3Value}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => setDropdown3Value(itemValue)}>
          <Picker.Item label="Choice X" value="choiceX" />
          <Picker.Item label="Choice Y" value="choiceY" />
          <Picker.Item label="Choice Z" value="choiceZ" />
        </Picker>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>Dropdown 4:</Text>
        <Picker
          selectedValue={dropdown4Value}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => setDropdown4Value(itemValue)}>
          <Picker.Item label="Item 1" value="item1" />
          <Picker.Item label="Item 2" value="item2" />
          <Picker.Item label="Item 3" value="item3" />
        </Picker>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>Text Input 1:</Text>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => setTextInput1Value(text)}
          value={textInput1Value}
        />
      </View>
      <View>
        <Text>Text Input 2:</Text>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => setTextInput2Value(text)}
          value={textInput2Value}
        />
      </View>
    </View>
  );
};

export default App;
