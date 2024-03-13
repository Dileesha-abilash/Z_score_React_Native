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

const Subject_screen = ({ navigation }) => {
        let selected1
        let selected2
        let selected3
    const [selected, setSelected] = React.useState([]);
    // const [selected1,
    //     setSelected1] = useState("Subject 1");
    // const [selected2,
    //     setSelected2] = useState("Subject 1");
    // const [selected3,
    //     setSelected3] = useState("Subject 1");
    // // const [zzz,
    //     setZed] = useState("enter ");
    // const [basi,
    //     setBasi] = useState(0.2);

    const [isLoading,
        setlsLoading] = useState(false);
    const [error,
        setError] = useState();
    const [response,
        setResponse] = useState();

    const [modal1Visible,
        setModal1Visible] = useState(false);
    const [modal2Visible,
        setModal2Visible] = useState(false);
    const [modal3Visible,
        setModal3Visible] = useState(false);
    const [modal4Visible,
        setModal4Visible] = useState(false);

    const [modalz,
        setModalz] = useState(false);
    const [modalbais,
        setModalbais] = useState(false);

    const data = [
        {
            key: '1',
            value: 'COMBINED MATHEMATICS'
        }, {
            key: '2',
            value: 'BUDDHISM'
        }, {
            key: '3',
            value: 'HINDUISM'
        }, {
            key: '4',
            value: 'CHRISTIANITY'
        }, {
            key: '5',
            value: 'ISLAM'
        }, {
            key: '6',
            value: 'BUDDHIST CIVILIZATION'
        }, {
            key: '7',
            value: 'HINDU CIVILIZATION'
        }, {
            key: '8',
            value: 'ISLAMIC CIVILIZATION'
        }, {
            key: '9',
            value: 'CHRISTIAN CIVILIZATION'
        }, {
            key: '10',
            value: 'BIOLOGY'
        }, {
            key: '11',
            value: 'ECONOMICS'
        }, {
            key: '12',
            value: 'ART'
        }, {
            key: '13',
            value: 'DANCING (INDIGENOUS)'
        }, {
            key: '14',
            value: 'DANCING (BHARATHA)'
        }, {
            key: '15',
            value: 'ORIENTAL MUSIC'
        }, {
            key: '16',
            value: 'CARNATIC MUSIC'
        }, {
            key: '17',
            value: 'WESTERN MUSIC'
        }, {
            key: '18',
            value: 'LOGIC & SCIENTIFIC METHOD'
        }, {
            key: '19',
            value: 'ENGINEERING TECHNOLOGY'
        }, {
            key: '20',
            value: 'BIO SYSTEMS TECHNOLOGY'
        }, {
            key: '21',
            value: 'BUSINESS STUDIES'
        }, {
            key: '22',
            value: 'AGRICULTURAL SCIENCE'
        }, {
            key: '23',
            value: 'GERMAN'
        }, {
            key: '24',
            value: 'PHYSICS'
        }, {
            key: '25',
            value: 'PALI'
        }, {
            key: '26',
            value: 'SINHALA'
        }, {
            key: '27',
            value: 'TAMIL'
        }, {
            key: '28',
            value: 'CIVIL TECHNOLOGY'
        }, {
            key: '29',
            value: 'MECHANICAL TECHNOLOGY'
        }, {
            key: '30',
            value: 'ELECTRICAL, ELECTRONIC AND INFORMATION TECHNOLOGY'
        }, {
            key: '31',
            value: 'FOOD TECHNOLOGY'
        }, {
            key: '32',
            value: 'AGRO TECHNOLOGY'
        }, {
            key: '33',
            value: 'BIO RESOURCE TECHNOLOGY'
        }, {
            key: '34',
            value: 'BUSINESS STATISTICS'
        }, {
            key: '35',
            value: 'SANSKRIT'
        }, {
            key: '36',
            value: 'CHEMISTRY'
        }, {
            key: '37',
            value: 'SCIENCE FOR TECHNOLOGY'
        }, {
            key: '38',
            value: 'DRAMA & THEATRE (SINAHALA)'
        }, {
            key: '39',
            value: 'DRAMA & THEATRE (TAMIL)'
        }, {
            key: '40',
            value: 'DRAMA & THEATRE (ENGLISH)'
        }, {
            key: '41',
            value: 'POLITICAL SCIENCE'
        }, {
            key: '42',
            value: 'FRENCH'
        }, {
            key: '43',
            value: 'ENGLISH'
        }, {
            key: '44',
            value: 'HOME ECONOMICS'
        }, {
            key: '45',
            value: 'ACCOUNTING'
        }, {
            key: '46',
            value: 'HISTORY OF INDIA'
        }, {
            key: '47',
            value: 'HISTORY OF EUROPE'
        }, {
            key: '48',
            value: 'HISTORY OF MODERN WORLD'
        }, {
            key: '49',
            value: 'ARABIC'
        }, {
            key: '50',
            value: 'MALAY'
        }, {
            key: '51',
            value: 'CHINESE'
        }, {
            key: '52',
            value: 'INFORMATION & COMMUNICATION TECHNOLOGY'
        }, {
            key: '53',
            value: 'HISTORY OF SRI LANKA'
        }, {
            key: '54',
            value: 'HINDI'
        }, {
            key: '55',
            value: 'KOREAN'
        }, {
            key: '56',
            value: 'MATHEMATICS'
        }, {
            key: '57',
            value: 'HIGHER MATHEMATICS'
        }, {
            key: '58',
            value: 'RUSSIAN'
        }, {
            key: '59',
            value: 'GREEK AND ROMAN CIVILIZATION'
        }, {
            key: '60',
            value: 'JAPANESE'
        }, {
            key: '61',
            value: 'GEOGRAPHY'
        }, {
            key: '62',
            value: 'COMMUNICATION & MEDIA STUDIES'
        }
    ];



    // const kaedeInput = (   <Kaede     label={'Website'}     inputPadding={16} />
    // );

    const handleButtonPress = () => {
                // Handle button press action
                console.log('Button pressed!');
                if (selected.length == 3) {
                    selected1 = selected[0]
                    selected2 = selected[1]
                    selected3 = selected[2]
                navigation.navigate("z_dis", { selected1: selected1, selected2: selected2, selected3: selected3 })
                }else{
                    alert('You need to select 3 Subjects')
                }
            };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <Text style={{ color: '#FFFFFF' }}>Select the </Text>
                    <Text style={styles.subjectText}>
                        Subjects
                    </Text>
                    <MultipleSelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                        label="Categories"
                        maxHeight='150'
                        boxStyles={styles.boxStyles}
                        color='blue'
                        // inputStyles={styles.boxStyles}
                        dropdownTextStyles={styles.dropDownFont}
                        checkBoxStyles={{ backgroundColor: 'white' }}
                        labelStyles={{ color: 'white' }}
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

export default Subject_screen;
