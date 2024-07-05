import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';

const Result = ({ navigation, route }) => {
  const { selected1, selected2, selected3, zzz, basi, district } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [countdown, setCountdown] = useState(40);

  useEffect(() => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  const filteredData = response.filter(item => {
    const categoryMatch = item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const universityMatch = item.university.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch || universityMatch;
  });

  const renderItem = ({ item }) => (
    <View>
      <View style={{flex:1}}></View>
      <View style={[styles.itemContainer,{flex:1}]}>
        <Text style={styles.categoryText}>Course: {item.category}</Text>
        <Text style={styles.universityText}>University: {item.university}</Text>
        <Text style={styles.zScoreText}>Z-Score: {item['z-score']}</Text>
      </View>
    </View>
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: 'black',alignItems:'center' }}>
        <Text style={{ color: 'white', fontSize: 70, marginTop: 10,fontWeight:'bold' ,flex:0.2}}>{countdown}</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        
        <ActivityIndicator size="large" color="#A7F902" />
        <Text style={{ color: 'white', fontSize: 20, marginTop: 10 }}>Loading...</Text>
      </View></View>
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
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flex: 0.15, justifyContent: 'flex-end' }}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by Course or university"
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholderTextColor='white'
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
    color: 'white'
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

export default Result;
