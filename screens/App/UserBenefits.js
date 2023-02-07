import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  Dimensions
} from 'react-native';
import moment from 'moment';
import { ProgressBar, Colors } from 'react-native-paper';
import { Icon, Input, Overlay } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';
import baseUrl from '../../helpers/baseUrl';
import UserCalender from '../../components/Utilities/Calender';
import * as commonFun from '../../components/Utilities/commonFunctions';
import styles from '../../components/Utilities/styles'


export default function BenefitList(props) {
  const { navigation, user, benefits} = props;
  
  const [selectedDate, setSelectedDate] = useState(moment());
  const [userBenefitList, setuserBenefitList] = useState();

  useEffect(() => {
    (async function() {
      try {
        if (user.goalDetail != undefined && benefits != undefined){
          const userBenefit = await commonFun.filterUserBenefits(benefits, user.goalDetail.goalTime);
          const dailyActivityTime = await commonFun.dailyActivityTime(user.goalDetail.dailyActivity);
          const UserDailyBenefits = await commonFun.UserDailyBenefit(userBenefit, dailyActivityTime, selectedDate);
          setuserBenefitList(UserDailyBenefits);
        }
      } catch (e) {
          console.error(e);
      }
    })();
  }, [selectedDate]);

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
      <ScrollView style={styles.whitebg}>
          <UserCalender calDate={setSelectedDate} userdetail={user.goalDetail} />
          <FlatList
            contentContainerStyle={styles.container}
            data={userBenefitList}
            renderItem={RenderUserBenefit}
            keyExtractor={item => item._id}
        />
       </ScrollView>
    </SafeAreaView>
  )          
}
