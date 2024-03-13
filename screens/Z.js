import React, { useState } from 'react';
import { TextStyle, TouchableOpacity } from 'react-native';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';
import { Isao, Kaede, Akira } from 'react-native-textinput-effects';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
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
  // useEffect(() => {
  //  setBasi(0.2)
  // }, []);
  const handleButtonPress = () => {
    if (district !='district')
    navigation.navigate("loading", { selected1: selected1, selected2: selected2, selected3: selected3 ,district:district})
else{
    alert('Select the Distric')
}
}

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
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <Text style={{ color: '#FFFFFF' }}>Select the </Text>
                <Text style={styles.subjectText}>
                District
                </Text>
                <SelectList
                    setSelected={(val) => setDistrict(val)}
                    data={locationsData}
                    save="value"
                    // label="Categories"
                    maxHeight='150'
                    boxStyles={styles.boxStyles}
                    color='blue'
                    // inputStyles={styles.boxStyles}
                    dropdownTextStyles={styles.dropDownFont}
                    // checkBoxStyles={{ backgroundColor: 'white' }}
                    // labelStyles={{ color: 'white' }}
                    inputStyles={{ color: 'white' }}
                />
            </View>
            <View style={{ flex: 0.4, flexDirection: 'row' }}>
            <View style={{ flex: 0.4 }}>
<TouchableOpacity style={[styles.button2, { width: '100%',height:"30%",margin:10 }]} onPress={handleButtonPress}>
    <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Pre</Text>
</TouchableOpacity>
</View>
<View style={{ flex: 0.4 }}>
<TouchableOpacity style={[styles.button2, { width: '100%',height:"30%",margin:10 }]} onPress={handleButtonPress}>
    <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Next</Text>
</TouchableOpacity>
</View>
            </View>
        </ScrollView>
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center', backgroundColor: '#18181B'
}, button2: {
    backgroundColor: '#26272B',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 2,
},
container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    margin: 10
}, boxStyles: {
    backgroundColor: '#26272B', borderColor: '#26272B', width: '90%', color: 'white'
},
subjectText: {
    fontSize: 40,
    marginBottom: 10, color: '#FFFFFF', fontWeight: '700'
}, dropDownFont: {
    color: 'white', fontWeight: '600',
    // borderColor:'black'
},
});




export default Zscore;
