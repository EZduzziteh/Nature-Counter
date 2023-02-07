import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import {
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    Animated
} from 'react-native';
import { Icon, Slider } from 'react-native-elements';
import baseUrl from '../../helpers/baseUrl';
import auth from '@react-native-firebase/auth';
import { Col, Row, Grid } from "react-native-easy-grid";
import { RadioButton } from 'react-native-paper';
import * as calenderFun from '../../components/Utilities/CalenderFunction';
import * as commonFun from '../../components/Utilities/commonFunctions';
import * as goalActions from '../../redux/actions/goalActions';
import UserCalender from '../../components/Utilities/Calender';
import moment from 'moment';
import styles from '../../components/Utilities/styles';


export default function LogSymptoms(props) {

    const { navigation, symptom, route } = props;
    const { userdetail, setRef } = route.params;
    const [selectedDate, setSelectedDate] = useState();
    const [errmess, seterrmess] = useState(null);
    const dispatch = useDispatch(); 
    const [symptomList, setsymptomList] = useState([]) ;
    const [selectedSymptoms, setselectedSymptoms] = useState([]);
    
    useEffect(() => {
        const deepCopy = object => JSON.parse(JSON.stringify(object));
        const getSymptom = userdetail.dailyActivity.filter(item => moment(item.date).format('YYYY-MM-DD') == moment(selectedDate).format('YYYY-MM-DD'));
        if (getSymptom.length > 0) {
            let getSelected = deepCopy(getSymptom[0].symptoms);
            let SymptomList = deepCopy(symptom);
            const AssSympObj = [...SymptomList, ...getSelected];
            let symptomDailyList = commonFun.getUniqueListBy(AssSympObj, '_id');
            setsymptomList(deepCopy(symptomDailyList));
            setselectedSymptoms(deepCopy(getSelected));

        } else {
            setsymptomList(deepCopy(symptom));
            setselectedSymptoms([]);
        }
    }, [selectedDate]);


    const setLevel = async (id, val) => {
        seterrmess(null);
        const selectActive = await symptomList.map((item) => {
            if (item._id == id) {
                item.level = val;
            }
            return item;
        });
        const userSymptoms = await selectActive.filter(item => item.level > 0);
        setselectedSymptoms(userSymptoms);
        console.log(selectedSymptoms);
        setsymptomList(selectActive);
    }


    const handleSymptom = () => {
        if (selectedSymptoms.length === 0) {
            seterrmess('Please Select Symptoms');
        }else if (selectedSymptoms.length !== 0) {
            seterrmess(null);
            const uid = auth().currentUser.uid;
            const goalId = userdetail.goalId;
            const activityId = 'Day-' + calenderFun.UTCToLocalDate(selectedDate);
            const date = moment.utc(selectedDate).format();
            dispatch(goalActions.postSymptoms(selectedSymptoms, goalId, uid, date, activityId));
            navigation.navigate('HomeScreen');
        }
    }
    const RenderSymptoms = symptomList.map((item) =>
        <Row style={styles.row} >
            <Col size={1}><Icon
                name={item.icon}
                type='font-awesome'
                color='#24BF9C'
            /></Col>
            <Col size={3}><Text numberOfLines={1} style={styles.symptomType} >{item.symptom}</Text></Col>
            <Col style={styles.radio} size={1}>
                <RadioButton color={item.level === 0 ? '#24BF9C' : '#b3b3b3'}
                style={styles.radioBtn}
                    value=""
                    onPress={() => setLevel(item._id, 0 )}
                    status={item.level === 0 ? 'checked' : 'unchecked'}
            /></Col>
            <Col size={3} style={styles.slider}>
                <Slider
                    maximumValue={3}
                    minimumValue={0}
                    minimumTrackTintColor="#24BF9C"
                    maximumTrackTintColor="#b3b3b3"
                    thumbStyle={styles.thumb}
                    trackStyle={styles.track}
                    step={1}
                    style={styles.slider}
                    value={item.level}
                    onValueChange={(value) => setLevel(item._id, value )}
                />
            </Col>
        </Row>
                
    );  
    return (
        <SafeAreaView style={styles.listContainer}>
            <ScrollView>
                <UserCalender calDate={setSelectedDate} userdetail={userdetail} />
                <Grid style={styles.LogContainer}>
                <Row style={styles.rowHeader}>
                        <Col size={1}></Col>
                        <Col size={3}></Col>
                    <Col size={1}><Text>None</Text></Col>
                    <Col size={1}><Text>Low</Text></Col>
                    <Col size={1}><Text>Mid</Text></Col>
                    <Col size={1}><Text>High</Text></Col>  
                </Row>
                {RenderSymptoms}
                <Row>
                    <Col size={8} style={styles.btnContainer}>
                        <Text onPress={handleSymptom} style={styles.btnSave}>Save</Text>
                    </Col>
                </Row>
            </Grid>
            </ScrollView>
        </SafeAreaView>
    );
}

