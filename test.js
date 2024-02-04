import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput ,ActivityIndicator,Button} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { useState,useEffect } from "react";

export default function App() {
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");
  const [district, setDistrict] = useState("");
  const [zzz,setZed] = useState("")
  const [basi,setbasi] = useState(0.2)

 const [isLoading, setlsLoading] = useState(false);
  const  [error, setError] =useState();
  const [response, setResponse]= useState();

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
  // Additional logic can be added here
  console.log("Component has rendered or dependencies have changed.");

  // If you want to execute something when the response changes
  if (response) {
    console.log("Response has changed:", response);
  }

  // If you want to execute something when an error occurs
  if (error) {
    console.log("An error occurred:", error);
  }

  // If you have other dependencies and want to execute logic when they change
  // console.log("Other dependencies have changed:", selected1, selected2, etc.);

}, [response, error, selected1, selected2, selected3, district, zzz, basi]);

  return (
    <View style={styles.container}>
      <Text>gg {selected1}</Text>
      <SelectList 
        setSelected={(val) => setSelected1(val)} 
        data={data} 
        save="value"
    />
    <Text>gg {selected2}</Text>
    <SelectList 
        setSelected={(val) => setSelected2(val)} 
        data={data} 
        save="value"
    /><Text>gg {selected3}</Text>
    <SelectList 
        setSelected={(val) => setSelected3(val)} 
        data={data} 
        save="value"
    />
    <Text>gg {district}</Text>
    <SelectList 
        setSelected={(val) => setDistrict(val)} 
        data={locationsData} 
        save="value"
    />
        <Text>z -{zzz} </Text>
    <TextInput placeholder='   z-score' style={{borderWidth:2,width:90}} value={zzz} onChangeText={setZed} keyboardType= 'phone-pad' />
        <Text>basi-{basi} </Text>
        <TextInput placeholder='   bais' style={{borderWidth:2,width:90}} value={basi} onChangeText={setbasi} keyboardType= 'phone-pad' />
      <StatusBar style="auto" />
      <ActivityIndicator animating={isLoading} size="large" color="#0000ff" />
      <Button title='Calculate' onPress={req} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
