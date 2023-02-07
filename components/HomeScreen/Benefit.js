import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Text,
  View,
} from 'react-native';
import moment from 'moment';
import { ProgressBar, Colors } from 'react-native-paper';
import SvgUri from 'react-native-svg-uri';
import baseUrl from '../../helpers/baseUrl';
import styles from '../../components/Utilities/styles'


export default function Benefit(props) {
  const {benefits} = props;

  const RenderUserBenefit = ({ item, index }) => {
    let iconurl = `${baseUrl}icons/${item.icon}`;
    return (
        <TouchableOpacity style={styles.benefitContainer}>
              <View>{/* 
                  <Icon
                      name={item.icon}
                      type='font-awesome'
                      color={'#24BF9C'}
                      style = {styles.benefitIcon}
                  /> */}
                  <View style = {styles.benefitIcon}>
                    <SvgUri
                      width="40"
                      height="40"
                      source={{uri:iconurl}}
                      fill={'#ffffff'}
                    />
                  </View>
                  <Text numberOfLines={2} style={ styles.benefitTitle} >{item.benefit}</Text>
                  <Text numberOfLines={3} style={ styles.benefitDescription} >{item.description}</Text>
                  <ProgressBar progress={item.userTotalTime/item.gainTime} color={'#24BF9C'}  style={ styles.benefitProgress}  />
              </View>
        </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView>
        <FlatList
          contentContainerStyle={styles.container}
          data={benefits}
          renderItem={RenderUserBenefit}
          keyExtractor={item => item._id}
       />
    </SafeAreaView>
  )          
}

