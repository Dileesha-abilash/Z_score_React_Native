import React, { useState ,useEffect} from 'react';
import { View, Text, StyleSheet,Button,FlatList,ActivityIndicator } from 'react-native';
import { Akira } from 'react-native-textinput-effects';
import {SelectList} from 'react-native-dropdown-select-list';
// const req = (navigation) => {
//     setlsLoading(true);
//     fetch(`https://z-score-api-1.onrender.com/?s1=${selected1}&s2=${selected2}&s3=${selected3}&distric=${district}&z=${zzz}&bais=${basi}`)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setResponse(result);
//           console.log(response2)
//           response2 = result
//           console.log(response2)
//           setlsLoading(false);

//           navigation.navigate('Pass',result);

//           console.log(result);
//         },
//         (error) => {
//           setlsLoading(false);
//           setError(error);
//           console.log(error);
//         }
//       );
//   };
const Zscore = ({navigation,route}) => {
    
  const { selected1, selected2, selected3 } = route.params;
  // State initialization outside the useEffect
  const [district, setDistrict] = useState("district");
  const [zzz, setZed] = useState(""); // Initial value is an empty string
  const [basi, setBasi] = useState("");
  // useEffect(() => {
  //  setBasi(0.2)
  // }, []);
  console.log(selected1,selected2,selected3)
  const locationsData = [
    {
        key: '1',
        value: 'COLOMBO'
    }, {
        key: '2',
        value: 'GAMPAHA'
    }, {
        key: '3',
        value: 'KALUTARA'
    }, {
        key: '4',
        value: 'MATALE'
    }, {
        key: '5',
        value: 'KANDY'
    }, {
        key: '6',
        value: 'NUWARA ELIYA'
    }, {
        key: '7',
        value: 'GALLE'
    }, {
        key: '8',
        value: 'MATARA'
    }, {
        key: '9',
        value: 'HAMBANTOTA'
    }, {
        key: '10',
        value: 'JAFFNA'
    }, {
        key: '11',
        value: 'KILINOCHCHI'
    }, {
        key: '12',
        value: 'MANNAR'
    }, {
        key: '13',
        value: 'MULLAITIVU'
    }, {
        key: '14',
        value: 'VAVUNIYA'
    }, {
        key: '15',
        value: 'TRINCOMALEE'
    }, {
        key: '16',
        value: 'BATTICALOA'
    }, {
        key: '17',
        value: 'AMPARA'
    }, {
        key: '18',
        value: 'PUTTALAM'
    }, {
        key: '19',
        value: 'KURUNEGALA'
    }, {
        key: '20',
        value: 'ANURADHAPURA'
    }, {
        key: '21',
        value: 'POLONNARUWA'
    }, {
        key: '22',
        value: 'BADULLA'
    }, {
        key: '23',
        value: 'MONARAGALA'
    }, {
        key: '24',
        value: 'KEGALLE'
    }, {
        key: '25',
        value: 'RATNAPURA'
    }
];
  return (
    <View style={styles.rest}>
      <View style={styles.container}>
      <SelectList
                        dropdownItemStyles={{
                        maxWidth: 250,
                        alignContent: 'center'
                    }}
                    dropdownTextStyles={styles.dropDownFont}
                        inputStyles={{textDecorationColor:'orange'}}
                        placeholder="Subject 2"
                        boxStyles={styles.boxStyles1}
                        setSelected={(val) => setDistrict(val)}
                        data={locationsData}
                        save="value"/>
        <Akira
          label={'Z score'}
          value={zzz} // Use the value from the state
          borderColor={'orange'}
          inputPadding={16}
          placeholderTextColor={'grey'}
          placeholder='z-score'
          labelHeight={24}
          labelWidth={50}
          labelStyle={{ color: 'black' }}
          style={{ width: 170 }}
          passiveIconColor={'blue'}
          keyboardType={'phone-pad'}
          onChangeText={(text) => setZed(text)} // Update the state when the text changes
        />
       < Akira
          label={'Bias'}
          value={basi} // Use the value from the state
          borderColor={'orange'}
          placeholderTextColor={'grey'}
          placeholder='Bais (optional)'
          inputPadding={16}
          labelHeight={24}
          labelWidth={50}
          labelStyle={{ color: 'black' }}
          style={{ width: 170 }}
          passiveIconColor={'blue'}
          keyboardType={'phone-pad'}
          onChangeText={(text) => setBasi(text)} // Update the state when the text changes
        />
        <Text style={{margin:20}}>
          {/* Searching mark is calculated using Zscore + bias */}
          Searching mark =  Zscore + bias
        </Text>
        <Button title='Search' onPress={() => navigation.navigate("result", { selected1: selected1, selected2: selected2, selected3: selected3,zzz:zzz,basi:basi,district:district })}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  container: {
    flex: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
        marginTop:80,
        margin:50,
        borderRadius:40,
        padding:10,
        
  }, dropDownFont: {
    color:'white',fontWeight:'600',
    borderColor:'black'
},
  container2: {
      flex: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
  },
  container3: {
      margin: 10
  },
  boxStyles1: {
       // flex: 1,
       backgroundColor: '#171717',
       // justifyContent: 'center', alignItems: 'center',
       margin: 15,
       // maxWidth:150,
       width: 250,
       borderColor:'#171717',shadowColor:"orange"
  },
  rest: {
      flex: 50,
      backgroundColor:'#171717'
  }
});

export default Zscore;
