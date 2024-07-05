import { StyleSheet, Text, View, ViewStyle ,TouchableOpacity} from 'react-native';
import React, { ReactNode } from 'react';

type ViewProps = {
  style?: ViewStyle;
  flex?: number; // Making flex property optional
  children: React.ReactNode;
}

const ViewQ = (props: ViewProps) => { 
  return (
    
    <View style={{flexShrink:1,flex:props.flex,...props.style}}>
      <TouchableOpacity onPress={()=>alert("")}>
      {props.children}
    </TouchableOpacity>
    </View>
  );
};

export default ViewQ;
