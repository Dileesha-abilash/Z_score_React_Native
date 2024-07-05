import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';

type ViewProps = {
  style?: ViewStyle;
  flex?: number; // Making flex property optional
  children: React.ReactNode;
}

const ViewP = (props: ViewProps) => { 
  return (
    <View style={{flexShrink:1,flex:props.flex,...props.style}}>
      {props.children}
    </View>
  );
};

export default ViewP;
