import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const LoadingRes = ({ navigation, route }) => {
  const [z, setZ] = useState(''); // State for Z-score
  const [basi, setBasi] = useState('0.03'); // State for Bais

  const { selected1, selected2, selected3, district } = route.params;
  const handleButtonPress = () => {
    const zFloat = parseFloat(z);
    const basiFloat = parseFloat(basi);
    if ((zFloat) + basiFloat > -0.25) {
      if ((zFloat) + basiFloat < 3.25) {
        console.log(selected1, selected2, selected3, district, z, basi);
        console.log((zFloat) + basiFloat)
        navigation.navigate("result", { selected1: selected1, selected2: selected2, selected3: selected3, zzz: z, basi: basi, district: district })
      } else {
        alert('The Z-score + Bais is Higher than Maximum value');
      }
    } else {
      alert('the Z-score is smaller than Minimum value');
    }
  };
  const back = () => {
    navigation.goBack(); // This function will navigate back to the previous screen
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={{ color: '#FFFFFF' }}>Enter the </Text>
          <Text style={styles.subjectText}>
            Z-score
          </Text>
          <View style={[styles.container1, { backgroundColor: '#26272B' }]}>
            <TextInput
              keyboardType='phone-pad'
              style={styles.input}
              value={z}
              onChangeText={setZ} // Update Z-score state
              placeholder="Enter Value here"
              placeholderTextColor="#888888"
            />
          </View>

          <Text style={{ color: '#FFFFFF' }}>Enter the </Text>
          <Text style={styles.subjectText}>
            Bais
          </Text>
          <View style={[styles.container1, { backgroundColor: '#26272B' }]}>
            <TextInput
              keyboardType='phone-pad'
              style={styles.input}
              value={basi}
              onChangeText={setBasi} // Update Bais state
              placeholder="Enter Value here"
              placeholderTextColor="#888888"
            />
          </View>
        </View>

        <View style={{ flex: 0.4, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={[styles.button2, {  width: '70%', height: "30%", margin: 10  }]} onPress={back}>
              <Text style={{ color: '#FFFFFF', fontSize: 18 ,fontWeight:'bold'}}>Pre</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1,alignItems:'flex-end'}}>
            <TouchableOpacity style={[styles.button2, {  width: '70%', height: "30%", margin: 10 ,backgroundColor:'#18FF3B'}]} onPress={handleButtonPress}>
              <Text style={{ color: 'black', fontSize: 18 ,fontWeight:'bold'}}>Search</Text>
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
    justifyContent: 'center',
    backgroundColor: '#18181B'
  },
  button2: {
    backgroundColor: '#26272B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10
  },
  boxStyles: {
    backgroundColor: '#26272B',
    borderColor: '#26272B',
    width: '90%',
    color: 'white'
  },
  subjectText: {
    fontSize: 40,
    marginBottom: 10,
    color: '#FFFFFF',
    fontWeight: '700'
  },
  dropDownFont: {
    color: 'white',
    fontWeight: '600',
  },
  container1: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  input: {
    fontSize: 16,
    color: 'white',
  },
});

export default LoadingRes;
