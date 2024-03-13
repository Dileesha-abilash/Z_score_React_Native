import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';

const Result = ({ navigation, route }) => {
  const { selected1, selected2, selected3, zzz, basi, district } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredData = response.filter(item => {
    const categoryMatch = item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const universityMatch = item.university.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch || universityMatch;
  });

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.categoryText}>Course: {item.category}</Text>
      <Text style={styles.universityText}>University: {item.university}</Text>
      <Text style={styles.zScoreText}>Z-Score: {item['z-score']}</Text>
    </View>
  );

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
    <View style={{ flex: 1,backgroundColor:'black' }}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by Course or university"
        onChangeText={setSearchQuery}
        value={searchQuery}
        
        placeholderTextColor='white'
        
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
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
    paddingHorizontal: 10,color:'white'
  },
  itemContainer: {
    backgroundColor: '#26272B',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
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
