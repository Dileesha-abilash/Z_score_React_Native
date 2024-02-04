import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Modal, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { SelectList } from 'react-native-dropdown-select-list'


const App = () => {
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");
  const [district, setDistrict] = useState("");
  const [zzz, setZed] = useState("");
  const [basi, setBasi] = useState(0.2);

  const [isLoading, setlsLoading] = useState(false);
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  const [modal4Visible, setModal4Visible] = useState(false);

  const data = [
    { key: '1', value: 'COMBINED MATHEMATICS' },
    { key: '2', value: 'BUDDHISM' },
    { key: '3', value: 'HINDUISM' },
  ];

  const locationsData = [
    { key: '1', value: 'COLOMBO' },
    { key: '2', value: 'GAMPAHA' },
    { key: '3', value: 'KALUTARA' },
  ];

  const req = () => {
    setlsLoading(true);

    fetch(`https://z-score-api-1.onrender.com/?s1=${selected1}&s2=${selected2}&s3=${selected3}&distric=${district}&z=${zzz}&bais=${basi}`)
      .then(res => res.json())
      .then(
        (result) => {
          setlsLoading(false);
          setResponse(result);
          console.log(result);
        },
        (error) => {
          setlsLoading(false);
          setError(error);
          console.log(error);
        }
      );
  };

  useEffect(() => {
    console.log("Component has rendered or dependencies have changed.");

    if (response) {
      console.log("Response has changed:", response);
    }

    if (error) {
      console.log("An error occurred:", error);
    }
  }, [response, error]);

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ backgroundColor: 'red', flex: 15 }}>
        <View style={tw`border-2 flex-1 rounded-xl m-2 bg-black`}>
          <Text style={tw`text-white relative top-2`}>All the data</Text>
          <Text style={tw`text-white relative top-3`}>2022(2023)</Text>
          <Text style={tw`text-white text-2xl text-teal-300 font-black relative top-3`}>University book</Text>
        </View>
      </View>

      <View style={{ backgroundColor: 'green', flex: 24, flexDirection: 'row' }}>
        <View style={tw`border-2 flex-1 rounded-xl m-2 `}>
          <Text>sda</Text>
          <Button title='Open Modal 1' onPress={() => setModal1Visible(true)} />
        </View>
        <View style={tw`border-2 flex-1 rounded-xl m-2 `}>
          <Text>sda</Text>
          <Button title='Open Modal 2' onPress={() => setModal2Visible(true)} />
        </View>
      </View>

      <View style={{ backgroundColor: 'blue', flex: 24, flexDirection: 'row' }}>
        <View style={tw`border-2 flex-1 rounded-xl m-2 bg-black`}>
          <Text>sda</Text>
        </View>
        <View style={tw`border-2 flex-1 rounded-xl m-2 `}>
          <Text>sda</Text>
        </View>
      </View>

      <View style={{ backgroundColor: 'red', flex: 12 }}>
        <Text>sda</Text>
      </View>

      <View style={{ backgroundColor: 'green', flex: 7 }}>
        <Text>sda</Text>
      </View>

      {/* Modal 1 */}
      <Modal visible={modal1Visible}   animationType="slide" transparent={false}  onRequestClose={() => setModal1Visible(false)}>
       <View style={{ backgroundColor: 'black', flex:1}}> 
        <View style={tw`flex-1 justify-center items-center m-8 border-2 rounded-xl bg-white`}>
          <Text>Modal 1 Content</Text>
          <SelectList 
        setSelected={(val) => setSelected1(val)} 
        data={data} 
        save="value"
        style={{ color: 'white' }}
        
    />
          <TouchableOpacity onPress={() => setModal1Visible(false)}>
            <Text>Close Modal 1</Text>
          </TouchableOpacity>
        </View>
        </View>


        
      </Modal>

      {/* Modal 2 */}
      <Modal visible={modal2Visible}   animationType="slide" transparent={false}  onRequestClose={() => setModal1Visible(false)}>
       <View style={{ backgroundColor: 'black', flex:1}}> 
        <View style={tw`flex-1 justify-center items-center m-8 border-2 rounded-xl bg-white`}>
          <Text>Modal 2 Content</Text>
          <SelectList 
        setSelected={(val) => setSelected2(val)} 
        data={data} 
        save="value"
        style={{ color: 'white' }}
        
    />
          <TouchableOpacity onPress={() => setModal2Visible(false)}>
            <Text>Close Modal 2</Text>
          </TouchableOpacity>
        </View>
        </View>


        
      </Modal>

      <Modal visible={modal3Visible}   animationType="slide" transparent={false}  onRequestClose={() => setModal1Visible(false)}>
       <View style={{ backgroundColor: 'black', flex:1}}> 
        <View style={tw`flex-1 justify-center items-center m-8 border-2 rounded-xl bg-white`}>
          <Text>Modal 3 Content</Text>
          <SelectList 
        setSelected={(val) => setSelected3(val)} 
        data={data} 
        save="value"
        style={{ color: 'white' }}
        
    />
          <TouchableOpacity onPress={() => setModal3Visible(false)}>
            <Text>Close Modal 3</Text>
          </TouchableOpacity>
        </View>
        </View>


        
      </Modal>
      

      <Modal visible={modal4Visible}   animationType="slide" transparent={false}  onRequestClose={() => setModal1Visible(false)}>
       <View style={{ backgroundColor: 'black', flex:1}}> 
        <View style={tw`flex-1 justify-center items-center m-8 border-2 rounded-xl bg-white`}>
          <Text>Modal 4 Content</Text>
          <SelectList 
        setSelected={(val) => setDistrict(val)} 
        data={district} 
        save="value"
        style={{ color: 'white' }}
        
    />
          <TouchableOpacity onPress={() => setModal1Visible(false)}>
            <Text>Close Modal 4</Text>
          </TouchableOpacity>
        </View>
        </View>


        
      </Modal>


      </View>);
};

export default App;
