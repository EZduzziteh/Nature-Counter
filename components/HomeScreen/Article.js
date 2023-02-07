import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions
} from 'react-native';
import baseUrl from '../../helpers/baseUrl';
import styles from '../Utilities/styles';

export default function Article(props) {

    const { navigation, article } = props;
    const renderArticle = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.article} onPress={() => navigation.navigate('ArticleDetail', { selectedArticle: item })}
            >

                <View source={styles.imageContainer}>
                    <Text style={styles.timeRead}>{item.readTime} min Read</Text>
                    <Image style={styles.image} source={{uri:`${baseUrl}${item.image}`}} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.category}>{item.healthCategory}</Text>
                    <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                    <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }

  return (
    <SafeAreaView style={styles.listContainer}>
          <FlatList
              data={article}
              renderItem={renderArticle}
              keyExtractor={item => item._id}
          />
    </SafeAreaView>
  );
}
