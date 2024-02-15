import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Modal, TouchableOpacity,TextInput ,FlatList,ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import tw from 'twrnc';
import { SelectList } from 'react-native-dropdown-select-list'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
var response2 = "hacker"
const Stack = createStackNavigator();

const Done = ()=>{


  
return(

<View >
  <Text style={tw`text-2xl`}>
    DONE
  </Text>
  </View>)
}

function App() {
  
  return (
    <NavigationContainer>
  <Stack.Navigator>  
    <Stack.Screen name="Home" component={Main} />  
    <Stack.Screen name="Pass" component={Pass}/>
  
    {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
  </Stack.Navigator>
</NavigationContainer>

  );
}

export default App;

const Main = () => {
  
  const navigation = useNavigation();
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
    { key: '4', value: 'CHRISTIANITY' },
    { key: '5', value: 'ISLAM' },
    { key: '6', value: 'BUDDHIST CIVILIZATION' },
    { key: '7', value: 'HINDU CIVILIZATION' },
    { key: '8', value: 'ISLAMIC CIVILIZATION' },
    { key: '9', value: 'CHRISTIAN CIVILIZATION' },
    { key: '10', value: 'BIOLOGY' },
    { key: '11', value: 'ECONOMICS' },
    { key: '12', value: 'ART' },
    { key: '13', value: 'DANCING (INDIGENOUS)' },
    { key: '14', value: 'DANCING (BHARATHA)' },
    { key: '15', value: 'ORIENTAL MUSIC' },
    { key: '16', value: 'CARNATIC MUSIC' },
    { key: '17', value: 'WESTERN MUSIC' },
    { key: '18', value: 'LOGIC & SCIENTIFIC METHOD' },
    { key: '19', value: 'ENGINEERING TECHNOLOGY' },
    { key: '20', value: 'BIO SYSTEMS TECHNOLOGY' },
    { key: '21', value: 'BUSINESS STUDIES' },
    { key: '22', value: 'AGRICULTURAL SCIENCE' },
    { key: '23', value: 'GERMAN' },
    { key: '24', value: 'PHYSICS' },
    { key: '25', value: 'PALI' },
    { key: '26', value: 'SINHALA' },
    { key: '27', value: 'TAMIL' },
    { key: '28', value: 'CIVIL TECHNOLOGY' },
    { key: '29', value: 'MECHANICAL TECHNOLOGY' },
    { key: '30', value: 'ELECTRICAL, ELECTRONIC AND INFORMATION TECHNOLOGY' },
    { key: '31', value: 'FOOD TECHNOLOGY' },
    { key: '32', value: 'AGRO TECHNOLOGY' },
    { key: '33', value: 'BIO RESOURCE TECHNOLOGY' },
    { key: '34', value: 'BUSINESS STATISTICS' },
    { key: '35', value: 'SANSKRIT' },
    { key: '36', value: 'CHEMISTRY' },
    { key: '37', value: 'SCIENCE FOR TECHNOLOGY' },
    { key: '38', value: 'DRAMA & THEATRE (SINAHALA)' },
    { key: '39', value: 'DRAMA & THEATRE (TAMIL)' },
    { key: '40', value: 'DRAMA & THEATRE (ENGLISH)' },
    { key: '41', value: 'POLITICAL SCIENCE' },
    { key: '42', value: 'FRENCH' },
    { key: '43', value: 'ENGLISH' },
    { key: '44', value: 'HOME ECONOMICS' },
    { key: '45', value: 'ACCOUNTING' },
    { key: '46', value: 'HISTORY OF INDIA' },
    { key: '47', value: 'HISTORY OF EUROPE' },
    { key: '48', value: 'HISTORY OF MODERN WORLD' },
    { key: '49', value: 'ARABIC' },
    { key: '50', value: 'MALAY' },
    { key: '51', value: 'CHINESE' },
    { key: '52', value: 'INFORMATION & COMMUNICATION TECHNOLOGY' },
    { key: '53', value: 'HISTORY OF SRI LANKA' },
    { key: '54', value: 'HINDI' },
    { key: '55', value: 'KOREAN' },
    { key: '56', value: 'MATHEMATICS' },
    { key: '57', value: 'HIGHER MATHEMATICS' },
    { key: '58', value: 'RUSSIAN' },
    { key: '59', value: 'GREEK AND ROMAN CIVILIZATION' },
    { key: '60', value: 'JAPANESE' },
    { key: '61', value: 'GEOGRAPHY' },
    { key: '62', value: 'COMMUNICATION & MEDIA STUDIES' }
];

const locationsData = [
  { key: '1', value: 'COLOMBO' },
  { key: '2', value: 'GAMPAHA' },
  { key: '3', value: 'KALUTARA' },
  { key: '4', value: 'MATALE' },
  { key: '5', value: 'KANDY' },
  { key: '6', value: 'NUWARA ELIYA' },
  { key: '7', value: 'GALLE' },
  { key: '8', value: 'MATARA' },
  { key: '9', value: 'HAMBANTOTA' },
  { key: '10', value: 'JAFFNA' },
  { key: '11', value: 'KILINOCHCHI' },
  { key: '12', value: 'MANNAR' },
  { key: '13', value: 'MULLAITIVU' },
  { key: '14', value: 'VAVUNIYA' },
  { key: '15', value: 'TRINCOMALEE' },
  { key: '16', value: 'BATTICALOA' },
  { key: '17', value: 'AMPARA' },
  { key: '18', value: 'PUTTALAM' },
  { key: '19', value: 'KURUNEGALA' },
  { key: '20', value: 'ANURADHAPURA' },
  { key: '21', value: 'POLONNARUWA' },
  { key: '22', value: 'BADULLA' },
  { key: '23', value: 'MONARAGALA' },
  { key: '24', value: 'KEGALLE' },
  { key: '25', value: 'RATNAPURA' },
];


  const req = (navigation) => {
    setlsLoading(true);
    fetch(`https://z-score-api-1.onrender.com/?s1=${selected1}&s2=${selected2}&s3=${selected3}&distric=${district}&z=${zzz}&bais=${basi}`)
      .then(res => res.json())
      .then(
        (result) => {
          setResponse(result);
          console.log(response2)
          response2 = result
          console.log(response2)
          setlsLoading(false);

          navigation.navigate('Pass');

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
    // console.log(navigation)

    if (response) {
      console.log("Response has changed:", response);
    }

    if (error) {
      console.log("An error occurred:", error);
    }
  }, [response, error]);
  console.log(selected1,selected2,selected3,basi,district,zzz);
  
  if (isLoading==true){
    return(
    <ActivityIndicator size="large">
    </ActivityIndicator>)
  }
  
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
      <TouchableOpacity onPress={() => req(navigation)}>
        <Text style={tw`text-white text-2xl uppercase font-black text-center top-4 `}>submit</Text>
      </TouchableOpacity >
      </View>
      <View style={{  flex: 7 }}>
        <Text>sda</Text>
      </View>
      {/* Modal 1 */}
      <Modal visible={modal1Visible}   animationType="slide" transparent={false}  onRequestClose={() => setModal1Visible(false)}>
       <View style={{ backgroundColor: 'black', flex:1}}> 
        <View style={tw`flex-1 justify-center items-center m-8 border-2 rounded-xl bg-white text-white`}>
          <Text>Modal 1 Content</Text>
          <SelectList 
        setSelected={(val) => setSelected1(val)} 
        data={data} 
        save="value"
        style={tw`text-white`}
        
    />
          <TouchableOpacity onPress={() => setModal1Visible(false)}>
            <View style={tw`bg-emerald-400 top-10 p-5 rounded-3xl`}>
        
            <Done />
            </View>
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
          <View style={tw`bg-emerald-400 top-10 p-5 rounded-3xl`}>
        
        <Done />
        </View>
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
          <View style={tw`bg-emerald-400 top-10 p-5 rounded-3xl`}>
        
        <Done />
        </View>
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
          <View style={tw`bg-emerald-400 top-10 p-5 rounded-3xl`}>
        
        <Done />
        </View>
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
    style={{ borderWidth: 2, width: 90, color: 'black', borderColor: 'white',	backgroundColor:"#faffff" ,padding:10}}
    value={zzz}
    onChangeText={setZed}
    keyboardType='phone-pad' />
   
          <TouchableOpacity onPress={() => setModalz(false)}>
          <View style={tw`bg-emerald-400 top-10 p-5 rounded-3xl`}>
        
        <Done />
        </View>
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
          <View style={tw`bg-emerald-400 top-10 p-5 rounded-3xl`}>
        
        <Done />
        </View>
          </TouchableOpacity>
        </View>
        </View>

        


        
      </Modal>
      




      </View>);
};

const Pass = () => {
  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ fontWeight: 'bold' }}>Category: {item.category}</Text>
      <Text>University: {item.university}</Text>
      <Text>Z-Score: {item['z-score']}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
      data={response2}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
    </View>
  );
};

// export default App;
