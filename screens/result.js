import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';

const renderItem = ({ item }) => (
  <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
    <Text style={{ fontWeight: 'bold' }}>Category: {item.category}</Text>
    <Text>University: {item.university}</Text>
    <Text>Z-Score: {item['z-score']}</Text>
  </View>
);

const Result = ({ navigation, route }) => {
  const { selected1, selected2, selected3, zzz, basi, district } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    console.log(`https://z-score-api-1.onrender.com/?s1=${selected1}&s2=${selected2}&s3=${selected3}&distric=${district}&z=${zzz}&bais=${basi}`)
    fetch(`https://z-score-api-1.onrender.com/?s1=${selected1}&s2=${selected2}&s3=${selected3}&distric=${district}&z=${zzz}&bais=${basi}`)
      .then(res => res.json())
      .then(
        (result) => {
          setResponse(result);
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []); // Empty dependency array means this effect will run only once, similar to componentDidMount

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView
source={require('../assets/laod.json')}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={response}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default Result;
