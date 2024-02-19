import React, {useState} from 'react';
import {TextStyle} from 'react-native';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    ScrollView,
    SafeAreaView
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {Isao, Kaede, Akira} from 'react-native-textinput-effects';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const Subject_screen = ({navigation}) => {

    const [selected1,
        setSelected1] = useState("Subject 1");
    const [selected2,
        setSelected2] = useState("Subject 1");
    const [selected3,
        setSelected3] = useState("Subject 1");
    // const [zzz,
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
    };

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <LinearGradient // Add LinearGradient here
                colors={['#171717', '#171717']}
                style={styles.gradient}>


            <View style={[styles.container, tw`shadow-lg shadow-white-500/80`]}>
            <View  >
                    <SelectList
                        dropdownItemStyles={{
                        maxWidth: 250,
                        alignContent: 'center'
                    }}

                    dropdownTextStyles={styles.dropDownFont}
                        placeholder="Subject 1"
                        
                        boxStyles={styles.boxStyles1}
                        setSelected={(val) => setSelected1(val)}
                        data={data}
                        save="value"/>

                    <SelectList
                        dropdownItemStyles={{
                        maxWidth: 250,
                        alignContent: 'center'
                    }}
                    dropdownTextStyles={styles.dropDownFont}

                        placeholder="Subject 2"
                        boxStyles={styles.boxStyles1}
                        setSelected={(val) => setSelected2(val)}
                        data={data}
                        save="value"/>

                    <SelectList
                        dropdownItemStyles={{
                        maxWidth: 250,
                        alignContent: 'center'
                    }}
                    dropdownTextStyles={styles.dropDownFont}

                        placeholder="Subject 3"
                        boxStyles={styles.boxStyles1}
                        setSelected={(val) => setSelected3(val)}
                        data={data}
                        save="value"/>

                        </View><View >
                  <Button title='next'  style={tw`bg-cyan-500 shadow-lg shadow-cyan-500/50`} onPress={() => navigation.navigate("z_dis", { selected1: selected1, selected2: selected2, selected3: selected3 })}/>
                </View></View>
                
            </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dropDownFont: {
        color:'white',fontWeight:'600',
        borderColor:'black'
    },
    container: {
        flex: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
        marginTop:80,
        // marginLeft:1,
        borderRadius:50,
        padding:20
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
        borderColor:'#171717',shadowColor:"blue"
        
    },
    rest: {
        flex: 50
    },
    gradient: {
        flex: 1,
        padding:100
    },
});

export default Subject_screen;
