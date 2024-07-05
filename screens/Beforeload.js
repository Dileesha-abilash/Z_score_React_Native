import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Button, ActivityIndicator, Switch } from 'react-native'; // Updated import statement
import { SelectList } from 'react-native-dropdown-select-list';
import { TextInput } from 'react-native';

const BeforeLoad = () => {

    const renderItem = ({ item }) => (
        <View>
            <View style={{ flex: 1 }}></View>
            <View style={[styles.itemContainer, { flex: 1 }]}>
                <Text style={styles.categoryText}>Physics: {item.Pysics}</Text>
                <Text style={styles.universityText}>{!checks?"Maths":"Bio"}: {item.maths}</Text>
                <Text style={styles.zScoreText}>Chemistry: {item.chemestry}</Text>
                <Text style={styles.zScoreText}>Z-Score: {item.zscore}</Text>
                <Text style={styles.zScoreText}>Difference: {item.difference}</Text>
            </View>
        </View>
    );

    const [math, setMath] = useState("");
    const [phy, setPhy] = useState("");
    const [bio, setBio] = useState("");
    const [chem, setchem] = useState("");
    const [z, setz] = useState("");
    const [checks, setChecks] = useState(true);
    const [resultData, setResultData] = useState(null);
    const [Ok, setOKresut] = useState(true);
    const [loading, setLoading] = useState(false);
    console.log(resultData)
    console.log(checks)
    console.log(math, phy, chem, bio)

    const clearData = () => {
        setResultData(null)
        setOKresut(true)
    }

    const handleButtonPress = () => {
        if (checks) {
            if (phy !== "" && bio !== "" && chem !== "") {
                const subjectParam = checks ? `syb2=${bio}&syb1=${phy}&syb3=${chem}` : `syb2=${math}&syb1=${phy}&syb3=${chem}`;
                if (checks) {
                    console.log("ok")
                    setLoading(true);
                    fetch(`https://z-score-api-1.onrender.com/guess/?z=${z}&${subjectParam}&math=False`)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            if (data == "[{\"error\":\"Not possible\"}]") {
                                alert("We are using 2011 dataset So your Z is unable to interpret.Maybe Because of Leaner Transfermation of Marks in department")
                            } else {
                                const cleanedString = data.replace(/\\/g, '');
                                const standardJson = JSON.parse(cleanedString);
                                setResultData(standardJson);
                                setOKresut(false)
                            }
                            setLoading(false);
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                            setLoading(false);
                        });
                } else {
                    alert("Select the Grades.if you having Already selected Reselect Maths/Bio Grade");
                }
            }
        } else {
            if (phy !== "" && math !== "" && chem !== "") {
                const subjectParam = checks ? `syb2=${bio}&syb1=${phy}&syb3=${chem}` : `syb2=${math}&syb1=${phy}&syb3=${chem}`;
                fetch(`https://z-score-api-1.onrender.com/guess/?z=${z}&${subjectParam}&math=True`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        if (data == "[{\"error\":\"Not possible\"}]") {
                            alert("your data cant interprit")
                        } else {
                            const cleanedString = data.replace(/\\/g, '');
                            const standardJson = JSON.parse(cleanedString);
                            setResultData(standardJson);
                            setOKresut(false)
                        }
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                        alert("We are using 2011 dataset So your Z is unable to interpret.Maybe Because of Leaner Transfermation of Marks in department");
                    });
            } else {
                alert("Select the Grades.if you having Already selected Reselect Maths/Bio Grade");
            }
        }
    }

    const data = [
        { key: '1', value: 'A' },
        { key: '2', value: 'B' },
        { key: '3', value: 'C' },
        { key: '4', value: 'S' },
        { key: '5', value: 'F' },
    ];

    return (
        <View style={{ flex: 1 }}>
            {loading && (
                <ActivityIndicator size="large" color="#ffffff" />
            )}
            {Ok ?
                <View style={[styles.flexbox, { flex: 1 }]}>
                    <View style={{ flex: 3, }}>
                        <Text style={{ color: 'white', fontSize: 36, fontWeight: 'bold', textAlign: 'center' }}>Guess the marks</Text>
                    </View>
                    <View style={{ flex: 10, }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row', marginHorizontal: 70 }}>
                            <Text style={{ fontSize: 20, color: 'white', margin: 5 }}>Change Maths/Bio </Text>
                            <Switch
                                value={checks}
                                onValueChange={() => setChecks(!checks)}
                                trackColor={{ false: "#767577", true: "#4BF507" }}
                                thumbColor={checks ? "white" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                            />
                        </View>
                        <Text style={{ color: '#FFFFFF' }}>Enter the </Text>
                        <Text style={styles.subjectText}>
                            Z-score
                        </Text>
                        <View style={[styles.container1, { backgroundColor: '#26272B' }]}>
                            <TextInput
                                keyboardType='phone-pad'
                                style={styles.input}
                                value={z}
                                onChangeText={setz} // Update Z-score state
                                placeholder="Enter Zscore Here "
                                placeholderTextColor="#888888"
                            />
                        </View>
                        <View style={{ flex: 4, flexDirection: 'row' }}>
                            <View style={[styles.flexbox, { flex: 1 }]}>
                                <Text style={styles.tttx}>Physics</Text>
                                <SelectList
                                    setSelected={(val) => setPhy(val)}
                                    data={data}
                                    save="value"
                                    maxHeight={150}
                                    boxStyles={styles.boxStyles}
                                    dropdownTextStyles={styles.dropDownFont}
                                    checkBoxStyles={{ backgroundColor: 'white' }}
                                    labelStyles={{ color: 'white' }}
                                    inputStyles={{ color: 'white' }}
                                    placeholder='Grade'
                                    searchPlaceholder=''
                                />
                            </View>
                            <View style={[styles.flexbox, { flex: 1.5 }]}>
                                <Text style={styles.tttx}>Chemesty</Text>
                                <SelectList
                                    setSelected={(val) => setchem(val)}
                                    data={data}
                                    save="value"
                                    maxHeight={150}
                                    boxStyles={styles.boxStyles}
                                    dropdownTextStyles={styles.dropDownFont}
                                    checkBoxStyles={{ backgroundColor: 'white' }}
                                    labelStyles={{ color: 'white' }}
                                    inputStyles={{ color: 'white' }}
                                    placeholder='Grade'
                                    searchPlaceholder=''
                                />
                            </View>
                            <View style={[styles.flexbox, { flex: 1 }]}>
                                <Text style={styles.tttx}>{checks ? "Bio" : "Maths"}</Text>
                                <SelectList
                                    setSelected={checks ? (val) => setBio(val) : (val) => setMath(val)}
                                    data={data}
                                    save="value"
                                    maxHeight={150}
                                    boxStyles={styles.boxStyles}
                                    dropdownTextStyles={styles.dropDownFont}
                                    checkBoxStyles={{ backgroundColor: 'white' }}
                                    labelStyles={{ color: 'white' }}
                                    inputStyles={{ color: 'white' }}
                                    placeholder='Grade'
                                    searchPlaceholder=''
                                />
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity style={[styles.button2, { width: '70%', height: "30%", margin: 10, padding: 2 }]} onPress={handleButtonPress}>
                                <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                : <FlatList
                    data={resultData}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            }
            {(!Ok) && <Button title='Search Again ' onPress={clearData} />}
        </View>
    );

}

const BeforeLoaded = () => {
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#18181B' }}>
            <BeforeLoad />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    boxStyles: {
        backgroundColor: '#26272B',
        borderColor: '#26272B',
        color: 'white'
    },
    textInput: {
        backgroundColor: 'white',
        color: 'black',
        height: 40
    },
    tttx: {
        color: 'white', fontSize: 25, fontWeight: 'bold', marginVertical: 30
    },
    flexbox: {
        margin: 10
    },
    dropDownFont: {
        color: 'white', fontWeight: '600',
    },
    subjectText: {
        fontSize: 40,
        marginBottom: 10,
        color: '#FFFFFF',
        fontWeight: '700'
    },
    button2: {
        backgroundColor: '#26272B',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
    },
    itemContainer: {
        backgroundColor: '#26272B',
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 5
    },
    categoryText: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    universityText: {
        color: '#FFFFFF',
    },
    zScoreText: {
        color: '#FFFFFF',
    },
});

export default BeforeLoaded;
