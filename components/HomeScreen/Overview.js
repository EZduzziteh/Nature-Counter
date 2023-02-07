import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
    Text,
  Button,
  Dimensions
} from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { Icon, Input, Overlay } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import * as calenderFun from '../../components/Utilities/CalenderFunction';
import * as goalActions from '../../redux/actions/goalActions';
const screenWidth = Dimensions.get("window").width;
import styles from '../Utilities/styles';
import UserCalender from '../Utilities/Calender';

const chartConfig= {
    backgroundColor: "rgba(36,191,156)",
    backgroundGradientFrom: "rgba(36,191,156)",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "rgba(36,191,156)",
    backgroundGradientToOpacity: 0,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(36,191,156, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(36,191,156, ${opacity})`,
    style: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        marginVertical: 8,
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
    }

  }


export default function Overview(props) {
    const { goalTime, totalTime, currentGoalDetail, navigation } = props;
    const [timer, setTimer] = useState(false);
    let [timerMinTime, setTimerMinTime] = useState(0);
    let [timerSecTime, setTimerSecTime] = useState(0);
    let [manualTime, setManualTime] = useState(0);
    let [gpsTime, setgpsTime] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [btnText, setBtnText] = useState('Start');
    const [calDate, setcalDate] = useState(moment.utc().format());
    let timeLog = { mapTime: 0, timerTime: 0, textTime: 0 };
    let timeData = totalTime;
    let showTime = totalTime;
    let mess = `Your Goal will Start on ${calenderFun.dateConverter(currentGoalDetail.startDate)}`;
    let chkGoalStatus = moment.utc().format() < currentGoalDetail.startDate;
    const dispatch = useDispatch();
    useEffect(
        function () {
            if (!timer) {
                return;
            }
            const intervalId = setInterval(() => {
                timerSecTime++;
                if (timerSecTime >= 60) {
                    timerSecTime = 0;
                    timerMinTime++;
                }
                let time = (timerSecTime < 10) ? ('0' + timerSecTime) : timerSecTime;
                setTimerMinTime(timerMinTime);
                setTimerSecTime(time);
            }, 1000);
            return () => {
                clearInterval(intervalId);
            };
        },
        [timer]
    );
    const startTimer = () => {
        setBtnText('Stop');
        setcalDate(moment.utc().format());
        setTimer(!timer);
    }; 
    const postTime = () => {
        setBtnText('Start');
        setTimer(false);
        setShowModal(false);
        timeLog.timerTime = Math.round(timerMinTime + (timerSecTime / 60));
        timeLog.textTime = manualTime;
        timeLog.mapTime = gpsTime;
        const uid = auth().currentUser.uid;
        const goalId = currentGoalDetail.goalId;
        const activityId = 'Day-' + calenderFun.UTCToLocalDate(calDate);
        const selectedDate =moment.utc(calDate).format();
        const totalActivityTime = parseInt(timeLog.textTime) + parseInt(timeLog.timerTime) +parseInt( timeLog.mapTime); 
        dispatch(goalActions.postTime(timeLog, goalId, uid, selectedDate, activityId, totalActivityTime));
        navigation.navigate('HomeScreen');
        setManualTime(0);
        setgpsTime(0);
        setTimerMinTime(0);
        setTimerSecTime(0);
    };

    if (!timer) {
        timeData = totalTime;
        showTime = totalTime;
    } else if(timer) {
        timeData = totalTime + timerMinTime + (timerSecTime / 60);

        showTime = timerMinTime+':'+timerSecTime;
    }

    const userData = {
        data: [((timeData <= goalTime ? timeData : goalTime) / goalTime)]
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    }
    const handleManualTime = (time) => {
        setManualTime(time);
    } 

    return (
        <View style={styles.chartContainer}>
            <View style={styles.chart}>
                <ProgressChart
                    data={userData}
                    width={screenWidth}
                    height={260}
                    strokeWidth={15}
                    radius={110}
                    chartConfig={chartConfig}
                    hideLegend={true}
                    withOuterLines={true}
                    withShadow={true}
                />
                <View style={styles.percentage}>
                    <Text style={timer ? styles.totalTimerTime: styles.totalTimer} >{showTime}</Text>
                    <Text style={timer ? styles.hideText : styles.goalTimer}> / {goalTime} mins</Text>
                    <Text style={styles.pertext}>{Math.round((timeData / goalTime) * 100)}%</Text>
                </View>
            </View>
            <Text style={chkGoalStatus ? styles.alertMes : styles.hideText}>{mess}</Text>
            <View style={chkGoalStatus ? styles.hideText : styles.btnContainer} >
                <Text style={styles.btnWhite} onPress={toggleModal} ><Icon
                    name='plus'
                    type='font-awesome'
                    color='#000'
                    style={styles.btnIcon}
                /> Add</Text>
                <Text style={styles.btnWhite} onPress={timer ? postTime : startTimer }><Icon
                    name='play'
                    type='font-awesome'
                    color='#000'
                    style={styles.btnIcon}
                /> {btnText}</Text>
                <Text onPress={() => navigation.navigate('LogSymptoms', { userdetail: currentGoalDetail})} style={styles.btnGreen}>Log Symptom</Text>
            </View>
            <Overlay isVisible={showModal} onBackdropPress={toggleModal} overlayStyle={styles.modal}>
                <UserCalender calDate={setcalDate} userdetail={currentGoalDetail} />  
                <Text style={styles.messModal}>Enter time in minutes</Text>
                <View style={styles.modal}>
                    <View style={styles.inputModal}><Input placeholder="Min" value={goalTime} onChangeText={handleManualTime} /></View>
                    <View style={styles.btnContainerModal}><Text style={styles.modalBtn} onPress={postTime}>Go</Text></View>
                </View>
            </Overlay>
        </View>
        
                
    )      
}

