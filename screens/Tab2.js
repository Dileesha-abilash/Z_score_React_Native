import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, Modal, SafeAreaView, ScrollView, StyleSheet, Linking } from 'react-native';

const Zscore = (phy, chem, bio, math, checks) => {
  const phyMean = 37.12;
  const SndevPhy = 15.78;

  const mathMean = 33.17;
  const SndevMath = 23.47;

  const chemMean = 35.77;
  const SndevChem = 15.78;

  const bioMean = 43.78;
  const SndevBio = 15.26;

  let zed;

  if (checks) {
    zed = ((phy - phyMean) / SndevPhy) + ((math - mathMean) / SndevMath) + ((chem - chemMean) / SndevChem);
    zed /= 3;
  } else {
    zed = ((phy - phyMean) / SndevPhy) + ((bio - bioMean) / SndevBio) + ((chem - chemMean) / SndevChem);
    zed /= 3;
  }
  return zed;
};

const Tab2 = () => {
  const [phy, setPhy] = useState(75);
  const [bio, setBio] = useState(75);
  const [math, setMath] = useState(75);
  const [chem, setChem] = useState(75);
  const [checks, setChecks] = useState(true);
  const [total, setTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const calculatedTotal = Zscore(phy, chem, bio, math, checks);
    setTotal(calculatedTotal);
  }, [phy, bio, math, chem, checks]);

  const openModal = () => {
    setModalVisible(true);
  };

  const handleDownloadAndOpenPDF = async () => {
    const url = 'https://github.com/Dileesha-abilash/Z_score_api/blob/main/Marks%20Distribution%202011%20(Sr%20Rosa%20Book).pdf';

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error('Cannot open URL');
      }
    } catch (error) {
      console.error('Error occurred while opening PDF:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#18181B' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 15 }}>
        <Text style={[styles.subjectText, { justifyContent: 'center', alignItems: 'center' }]}>
          {parseFloat(total).toFixed(5)}
        </Text>
        <Text style={{ color: 'white' }}>Z score is </Text>
      </View>
      <View style={styles.container}>
        <Text style={{ color: '#FFFFFF' }}>Enter the </Text>
        <Text style={styles.subjectText}>Marks</Text>
      </View>
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{ fontSize: 28, color: 'white', margin: 10 }}>Change Maths/Bio </Text>
        <Switch
          value={checks}
          onValueChange={() => setChecks(!checks)}
          activeText={'Maths'}
          inActiveText={'Bio'}
        />
      </View>
      <View style={{ flex: 20, flexDirection: 'row', alignItems: 'flex-start', margin: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}> Physics </Text>
          <TextInput
            placeholder="value"
            placeholderTextColor='white'
            keyboardType='phone-pad'
            value={phy.toString()}
            onChangeText={(text) => setPhy(text)}
            defaultValue={phy.toString()}
            style={{ color: 'white', backgroundColor: '#26272B', width: "50%", alignItems: 'center' }}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}> Chemistry </Text>
          <TextInput
            placeholder="value"
            placeholderTextColor='white'
            keyboardType='phone-pad'
            onChangeText={(text) => setChem(text)}
            value={chem.toString()}
            defaultValue={chem.toString()}
            style={{ color: 'white', backgroundColor: '#26272B', width: "50%", alignItems: 'center' }}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {checks ? (
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}> Maths</Text>
          ) : (
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}> Bio</Text>
          )}
          <TextInput
            onChangeText={(text) => {
              if (checks) {
                setMath(text);
              } else {
                setBio(text);
              }
            }}
            keyboardType='phone-pad'
            style={{ color: 'white', backgroundColor: '#26272B', width: "50%", alignItems: 'center' }}
            placeholder="value"
            placeholderTextColor='white'
            value={checks ? math.toString() : bio.toString()}
            defaultValue={checks ? math.toString() : bio.toString()}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.sourceButton} onPress={openModal}>
        <Text style={styles.sourceText}>Note</Text>
      </TouchableOpacity>

      {/* Button to open PDF */}
      <TouchableOpacity style={styles.pdfButton} onPress={handleDownloadAndOpenPDF}>
        <Text style={styles.pdfButtonText}>Check the values</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Note</Text>
            <Text>• All the data is fetched Using Prof.S.R.D. Rosa's Physics Book</Text>
            <Text>• All data is 2011 G.C.E A/L DataSheet</Text>
            <Text>• Standed deviation and Mean Doesn't vary hugely (If there no special Incidence) </Text>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  sourceButton: {
    height: '10%',
    margin: 10,
    width: '40%',
    backgroundColor: '#C5C6C1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 10,
  },
  sourceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pdfButton: {
    height: '10%',
    margin: 10,
    width: '40%',
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    alignSelf: 'center',
  },
  pdfButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    flex: 9,
    justifyContent: 'center',
    margin: 10,
  },
  subjectText: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "80%", // Add '%' to specify percentage
    width: '80%',
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  table: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    maxHeight: 300, // Maximum height of the table
    overflow: 'scroll', // Enable scrolling for overflow content
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10, // Increase padding for larger cell size
    flex: 1,
    alignItems: 'center',
  },
  cellText: {
    textAlign: 'center',
  },
});

export default Tab2;
