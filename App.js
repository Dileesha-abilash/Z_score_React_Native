import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Modal, TouchableOpacity,TextInput } from 'react-native';
import tw from 'twrnc';
import { SelectList } from 'react-native-dropdown-select-list'


const App = () => {
  const [selected1, setSelected1] = useState("Subject 1");
  const [selected2, setSelected2] = useState("Subject 1");
  const [selected3, setSelected3] = useState("Subject 1");
  const [district, setDistrict] = useState("district");
  const [zzz, setZed] = useState("enter ");
  const [basi, setBasi] = useState(0.2);

  const [isLoading, setlsLoading] = useState(false);
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  const [modal4Visible, setModal4Visible] = useState(false);

  const [modalz, setModalz] = useState(false);
  const [modalbais, setModalbais] = useState(false);




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
  console.log(selected1,selected2,selected3,basi,district,zzz);
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{  flex: 3 }}></View>
      
      <View style={{  flex: 10 }}>
        <View style={tw`border-2 flex-1 rounded-xl m-2 bg-black`}>
          <Text style={tw`text-white relative `}>All the data</Text>
          <Text style={tw`text-white relative `}>2022(2023)</Text>
          <Text style={tw`text-white text-2xl text-teal-300 font-black justify-end`}>University book</Text>
        </View>
      </View>

      <View style={{ flex: 15, flexDirection: 'row' }}>
  <View style={tw`border-2 flex-1 rounded-xl m-2 bg-black justify-center items-center`}>
    
    <TouchableOpacity onPress={() => setModal1Visible(true)}>
      
      <Text style={tw`text-white font-bold uppercase center text-xl	`}>{selected1}</Text>
      <Text style={tw`text-white font-medium uppercase center text-sm left-3 `}>subject 1</Text>
      
      </TouchableOpacity> 
    {/* <Button title='Open Modal 1' onPress={() => setModal1Visible(true)} /> */}
  </View>
  <View style={tw`border-2 flex-1 rounded-xl m-2 bg-black justify-center items-center`}>
    
    <TouchableOpacity onPress={() => setModal2Visible(true)}>
      
      <Text style={tw`text-white font-bold uppercase center text-xl	`}>{selected2}</Text>
      <Text style={tw`text-white font-medium uppercase center text-sm left-3`}>subject 2</Text>
      
      </TouchableOpacity> 
    {/* <Button title='Open Modal 1' onPress={() => setModal1Visible(true)} /> */}
  </View>
</View>

      <View style={{  flex: 15, flexDirection: 'row' }}>
      <View style={tw`border-2 flex-1 rounded-xl m-2 bg-black justify-center items-center`}>
    
    <TouchableOpacity onPress={() => setModal3Visible(true)}>
      
      <Text style={tw`text-white font-bold uppercase center text-xl	`}>{selected3}</Text>
      <Text style={tw`text-white font-medium uppercase center text-sm left-3`}>subject 3</Text>
      
      </TouchableOpacity> 
    {/* <Button title='Open Modal 1' onPress={() => setModal1Visible(true)} /> */}
  </View>
  <View style={tw`border-2 flex-1 rounded-xl m-2 bg-black justify-center items-center`}>
    
    <TouchableOpacity onPress={() => setModal4Visible(true)}>
      
      <Text style={tw`text-white font-bold uppercase center text-xl	`}>{district}</Text>
      <Text style={tw`text-white font-medium uppercase center text-sm left-3`}>distric</Text>
      
      </TouchableOpacity> 
    {/* <Button title='Open Modal 1' onPress={() => setModal1Visible(true)} /> */}
  </View>
      </View>

      <View style={{ flex: 7,flexDirection:'row' }}>
        <View style={tw`border-2 flex-1 rounded-xl m-2 bg-black justify-center items-center `} >
          <TouchableOpacity onPress={() => setModalz(true)}>
      
      <Text style={tw`text-white font-bold uppercase center text-xl	`}>{zzz}</Text>
      <Text style={tw`text-white font-medium uppercase center text-sm `}> Z-score</Text>
      
      </TouchableOpacity> 
    </View>
    
    
    
    <View style={tw`border-2 flex-1 rounded-xl m-2 bg-black justify-center items-center `} >
          <TouchableOpacity onPress={() => setModalbais(true)}>
      
      <Text style={tw`text-white font-bold uppercase center text-xl	`}>{basi}</Text>
      <Text style={tw`text-white font-medium uppercase center text-sm `}> bais(optional)</Text>
      
      </TouchableOpacity> 
    </View>
      </View>
      <View style={{  backgroundColor:'black',flex: 7 }} >
      <TouchableOpacity onPress={req}>
        <Text style={tw`text-white text-2xl uppercase font-black text-center top-4 `}>submit</Text>
      </TouchableOpacity >
      </View>
      <View style={{  flex: 7 }}>
        <Text>sda{response}</Text>
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
      <Modal visible={modal2Visible}   animationType="slide" transparent={false}  onRequestClose={() => setModal2Visible(false)}>
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
{/* Modal3  */}
 
 <Modal visible={modal3Visible}   animationType="slide" transparent={false}  onRequestClose={() => setModal3Visible(false)}>
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
{/* Modal 4 -distrct */}

      
<Modal visible={modal4Visible}   animationType="slide" transparent={false}  onRequestClose={() => setModal4Visible(false)}>
       <View style={{ backgroundColor: 'black', flex:1}}> 
        <View style={tw`flex-1 justify-center items-center m-8 border-2 rounded-xl bg-white`}>
          <Text>Modal 4 Contentbabb</Text>
          <SelectList 
        setSelected={(val) => setDistrict(val)} 
        data={locationsData} 
        save="value"
        style={{ color: 'white' }}
        
    />
          <TouchableOpacity onPress={() => setModal4Visible(false)}>
            <Text>Close Modal 4</Text>
          </TouchableOpacity>
        </View>
        </View>


        
      </Modal>


 {/* Modal 5 */}
 <Modal visible={modalz}   animationType="slide" transparent={false}  onRequestClose={() => setModalz(false)}>
       <View style={{ backgroundColor: 'black', flex:1}}> 
        <View style={tw`flex-1 justify-center items-center m-8 border-2 rounded-xl bg-white`}>
          <Text>Modal 4 Content</Text>
          
          <TextInput placeholder='   z-score'
    style={{ borderWidth: 2, width: 90, color: 'white', borderColor: 'white' }}
    value={zzz}
    onChangeText={setZed}
    keyboardType='phone-pad' />
   
          <TouchableOpacity onPress={() => setModalz(false)}>
            <Text>Close Modal 4</Text>
          </TouchableOpacity>
        </View>
        </View>

        


        
      </Modal>
{/* Modal 6 */}
<Modal visible={modalbais}   animationType="slide" transparent={false}  onRequestClose={() => setModalbais(false)}>
       <View style={{ backgroundColor: 'black', flex:1}}> 
        <View style={tw`flex-1 justify-center items-center m-8 border-2 rounded-xl bg-white`}>
          <Text>Modal 4 Contedddnt</Text>
          
          <TextInput placeholder='   bais'
    style={{ borderWidth: 2, width: 90, color: 'white', borderColor: 'white' }}
    value={basi}
    onChangeText={setBasi}
    keyboardType='phone-pad' />
   
          <TouchableOpacity onPress={() => setModalbais(false)}>
            <Text>Close Modal 4</Text>
          </TouchableOpacity>
        </View>
        </View>

        


        
      </Modal>
      




      </View>);
};

export default App;
