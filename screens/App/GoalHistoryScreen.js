import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
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
import { fetchGoal } from '../../redux/actions/goalActions';


const GoalHistory = (props) => {

    const dispatch = useDispatch();
    const goals = useSelector(state => state.getIn(['UserGoals', 'goals']), goals);

    useFocusEffect(
        React.useCallback(() => {
            dispatch(fetchGoal());
            return () => {
            };
        }, [])
    );

    if ('data' in goals) {
        return (<View>
            <Text> In Progress
            </Text>
        </View>)
    } else {
        return (<View>
            <Text>
                No Goal Found
            </Text>
        </View>)
    }
}

export default GoalHistory;