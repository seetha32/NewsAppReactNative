import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ArticleDetailScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>{article.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
  },
});

export default ArticleDetailScreen;
