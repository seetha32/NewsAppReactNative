import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import Article from './Article';

const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: '9317a34265b944838802d4a2a136722d',
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  const renderItem = ({ item }) => (
    <Article
      article={item}
      onPress={() => navigation.navigate('ArticleDetail', { article: item })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
