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
    Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import * as calenderFun from '../../components/Utilities/CalenderFunction';

export default function UserCalender(props) {
    const { calDate, userdetail } = props;
    const [selected, setSelected] = useState(moment().format());
    const [showCal, setShowCal] = useState(false);
    const displayDate = calenderFun.dateConverter(selected);

    useEffect(() => {
        calDate(selected);
    }, [selected]);

    const handleCalender = () => {
        setShowCal(!showCal);
    }
    
    const onDayPress = day => {
        setSelected(moment(day.dateString));
        console.log(selected);
        setShowCal(!showCal);
    };

    const RenderCalender = () => {
        const endDate = moment.utc(userdetail.startDate).add(5, 'day').format();
        let range = calenderFun.getDaysDiff(moment(userdetail.endDate), moment(userdetail.startDate));
        let nextDays = [];
        if (range > 0) {
            for (let i = 0; i < range; i++) {
                let tempDate = moment.utc(userdetail.startDate).add(i, 'day').format('YYYY-MM-DD');
                tempDate = moment(tempDate).format('YYYY-MM-DD');
                nextDays.push(tempDate);
            }
        }

        let markDate = {};
        let strdy = false;
        let enddy = false;
        nextDays.forEach((date) => {
            let index = nextDays.indexOf(date);
            if (index === 0) { strdy = true, enddy = false }
            else if (index === 6) { strdy = false, enddy = true }
            else { strdy = false, enddy = false }
            markDate = {
                ...markDate,
                [date]: {
                    startingDay: strdy,
                    endingDay: enddy,
                    marked: true,
                    color: '#24BF9C',
                    textColor: 'white'
                }
            };

        });

        if (showCal) {
            return (
                <Calendar
                    minDate={userdetail.startDate}
                    maxDate={endDate}
                    markedDates={markDate}
                    markingType="period"
                    hideExtraDays={true}
                    hideDayNames={true}
                    onDayPress={onDayPress}
                    //markedDates={{
                    //    [selected]: {
                    //        selected: true,
                    //        disableTouchEvent: true,
                    //        selectedColor: '#24BF9C',
                    //        selectedTextColor: '#fff',
                    //    }
                    //}}
                />
            );
        }
    }

    return (
        <View style={styles.dateIconContainer}>
            <Text style={styles.dateIcon} onPress={handleCalender}>{displayDate} <Icon
                name='calendar'
                type='font-awesome'
                color='#000'
                style={styles.calIcon}
            /> </Text>
            {RenderCalender()}
        </View>
    );
}

const styles = StyleSheet.create({
    dateIconContainer: {
        margin: 20,
    },
    dateIcon: {
        fontSize: 20,
        padding: 6,
        paddingLeft: 20,
        paddingBottom: 10,
        borderWidth: 1,
        width: 200,
        borderColor: '#000',
        borderRadius: 40,
    },
    calIcon: {
        width: 90,
        paddingTop: 5,
        paddingLeft: 60,
    },
});