import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ViewP from './view'
import { useNavigation } from '@react-navigation/native';

const Tab4 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#18181B" }}>

      <ViewP flex={1} style={{ marginHorizontal: 25, backgroundColor: "#18181B" }}>
        <ViewP flex={141} style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}> Welcome to</Text>
          <Text style={{ fontSize: 48, color: 'white', fontWeight: 'bold' }}> Zed</Text>
        </ViewP>


          <ViewP flex={100} style={{ backgroundColor: '#26272B', justifyContent: 'center', padding: 50 }}>
        <TouchableOpacity onPress={() => navigation.navigate('University')} style={{ flex: 120 }}>
            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}> Find the</Text>
            <Text style={{ fontSize: 48, color: '#00FF69', fontWeight: 'bold' }}> University</Text>
        </TouchableOpacity>
          </ViewP>
        {/* <ViewP flex={147}></ViewP> */}

        <ViewP flex={189} style={{ flexDirection: 'row', alignContent: 'space-between' }}>
            <ViewP flex={198} style={{ backgroundColor: '#26272B', margin: 10, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Marks')}>
              <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}> Guess</Text>
              <Text style={{ fontSize: 48, color: 'white', fontWeight: 'bold' }}> Marks</Text>
          </TouchableOpacity>
            </ViewP>
            <ViewP flex={162} style={{ backgroundColor: '#26272B', margin: 10, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Zscore')}>

              {/* <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}> </Text> */}
              <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', marginHorizontal: 14 }}> Calculate</Text>
              <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginHorizontal: 14 }}> Zscore</Text>
          </TouchableOpacity>
            </ViewP>
        </ViewP>
        <ViewP flex={112} style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Thanks for Giving Shot to My After A/L Project ❤️ </Text>

        </ViewP>
        <ViewP flex={40} style={{ alignItems: 'center' }}>
          <TouchableOpacity style={[styles.button2, { maxWidth: '50%', paddingHorizontal: 50 }]} onPress={() => alert("I'm too Lazy to implement a rating feature. Thanks for clicking 🥰   ")}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Rate</Text>
          </TouchableOpacity>
        </ViewP>
      </ViewP>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center', backgroundColor: '#18181B'
  }, button2: {
    backgroundColor: '#26272B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  }
});

export default Tab4