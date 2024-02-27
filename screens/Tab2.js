import { View, Text, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Akira } from 'react-native-textinput-effects';


const Zscore = (phy,chem,bio,math,checks) =>{

const phyMean = 37.12
const SndevPhy = 15.78

const mathMean = 33.17
const SndevMath = 23.47

const chemMean = 35.77
const SndevChem = 15.78

const bioMean = 43.78
const SndevBio = 15.26


if (checks == true){
  zed = ((phy - phyMean) /SndevPhy) + ((math - mathMean) /SndevMath) +((chem - chemMean) /SndevChem)
  zed= zed/3
}
else{
  zed = ((phy - phyMean) /SndevPhy) + ((bio - bioMean) /SndevBio) + ((chem - chemMean) /SndevChem)
  zed= zed/3

}
return(zed)
}


const Tab2 = () => {
  const [phy, setPhy] = useState(1);
  const [bio, setBio] = useState(1);
  const [math, setMath] = useState(1);
  const [chem, setChem] = useState(1);
  const [checks, setChecks] = useState(true);  // math

  // Calculate total whenever any of the input values change
  useEffect(() => {
    let total;
    if (checks) {
      total = Zscore(phy,chem,bio,math,checks)
    } else {
      total = Zscore(phy,chem,bio,math,checks)
    }
    setTotal(total);
  }, [phy, bio, math, chem, checks]);

  const [total, setTotal] = useState(0); // Initial total value

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Button title="Maths" onPress={() => setChecks(true)} />
        </View>
        <View style={{ flex: 1 }}>
          <Button title="Bio" onPress={() => setChecks(false)} />
        </View>
      </View>
      <View>
        <Akira
          label={'Physics'}
          value={phy.toString()}
          borderColor={'orange'}
          inputPadding={16}
          labelHeight={24}
          labelWidth={100}
          labelStyle={{ color: 'black' }}
          style={{ width: 170 }}
          passiveIconColor={'blue'}
          keyboardType={'numeric'}
          onChangeText={(text) => setPhy(text)}
        />
        <Akira
          label={'Chemistry'}
          value={chem.toString()}
          borderColor={'orange'}
          inputPadding={16}
          labelHeight={24}
          labelWidth={100}
          labelStyle={{ color: 'black' }}
          style={{ width: 170 }}
          passiveIconColor={'blue'}
          keyboardType={'numeric'}
          onChangeText={(text) => setChem(text)}
        />
        {/* Conditionally rendering Akira based on checks */}
        {checks ? (
          <Akira
            label={'Maths'}
            value={math.toString()}
            borderColor={'orange'}
            inputPadding={16}
            labelHeight={24}
            labelWidth={100}
            labelStyle={{ color: 'black' }}
            style={{ width: 170 }}
            passiveIconColor={'blue'}
            keyboardType={'numeric'}
            onChangeText={(text) => setMath(text)}
          />
        ) : (
          <Akira
            label={'Bio'}
            value={bio.toString()}
            borderColor={'orange'}
            inputPadding={16}
            labelHeight={24}
            labelWidth={100}
            labelStyle={{ color: 'black' }}
            style={{ width: 170 }}
            passiveIconColor={'blue'}
            keyboardType={'numeric'}
            onChangeText={(text) => setBio(text)}
          />
        )}
      </View>
      <View>
        <Text>
          Total is {total}
        </Text>
      </View>
    </View>
  );
};

export default Tab2;
