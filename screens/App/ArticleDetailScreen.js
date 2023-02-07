import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
} from 'react-native';
import baseUrl from '../../helpers/baseUrl';
import styles from '../../components/Utilities/styles';

export default function ArticleDetail({ route }) {
  const { selectedArticle } = route.params;

  return (
    <SafeAreaView style={styles.ArtContainer}>

      <View source={styles.ArtImageContainer}>
        <Image style={styles.ArtImage} source={{ uri: `${baseUrl}${selectedArticle.image}` }} />
      </View>
      <View style={styles.ArticleDetail}>
        <Text style={styles.ArCcategory}>{selectedArticle.healthCategory}</Text>
        <Text style={styles.ArtTitle}>{selectedArticle.title}</Text>
        <Text style={styles.ArtSubTitle}>{selectedArticle.subTitle}</Text>
        <Text style={styles.ArtReadTime}>
          {selectedArticle.readTime}
          {' '}
          min read
        </Text>
        <Text style={styles.ArtDescription}>
          {selectedArticle.description}
        </Text>
      </View>
    </SafeAreaView>
  );
}
