import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const data = [
    {
        "zscore": 2.4189507394063154,
        "Physics": 95,
        "Maths": 83,
        "Chemistry": 84,
        "Difference": 0.09954926059368452
    },
    {
        "zscore": 2.6182655129702255,
        "Physics": 100,
        "Maths": 86,
        "Chemistry": 88,
        "Difference": 0.09976551297022551
    },
    // Add more data as needed
];
const AfterLoad = () =>{


  return(<FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />)
}

const Beforelaod = ()=>{
  return(
    <Text>Not loaded</Text>
  )
}
const renderItem = ({ item }) => (
    <View style={styles.item}>
        <Text style={styles.title}>Z-Score: {item.zscore}</Text>
        <Text style={styles.subtitle}>Physics: {item.Physics}</Text>
        <Text style={styles.subtitle}>Maths: {item.Maths}</Text>
        <Text style={styles.subtitle}>Chemistry: {item.Chemistry}</Text>
        <Text style={styles.subtitle}>Difference: {item.Difference}</Text>
    </View>
);

const BeforeLoaded = () => {
  const [loading,setLoading] = useState(false)
const [loaded,setLoaded] = useState(false)
    return (
        <View style={styles.container}>
           <AfterLoad/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        marginTop: 5,
    },
});

export default AfterLoad;
