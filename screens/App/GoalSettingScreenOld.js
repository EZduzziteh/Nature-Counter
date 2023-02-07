import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { Icon } from 'react-native-elements';
import baseUrl from '../../helpers/baseUrl';
import auth from '@react-native-firebase/auth';

import { postGoal } from '../../redux/actions/goalActions';
export default function GoalSettingOld(props) {
    const { navigation, benefits } = props;
    const [goalTime, setgoalTime] = useState('');
    const newBenefit = benefits.map((item) => ({ ...item, active: false }));
    const [benefitList, setbenefitList] = useState(newBenefit);
    const [selectedBenefits, setselectedBenefits] = useState([]);
    const [errmess, seterrmess] = useState(null);

    const dispatch = useDispatch();
    const TimeArray = [30, 60, 90, 120, 200];

   const toggleActive = (id) => {
       const selectActive = benefitList.map((item) => {
            if (item._id == id) {
                return {...item, active: !item.active}
            }
            return item;
        });
        setbenefitList(selectActive)
    }

    function handleBenefits(elem){
        let index = selectedBenefits.indexOf(elem);
        toggleActive(elem);
        if (index > -1) {
            selectedBenefits.splice(index, 1);
            console.log('Splice Ruchi_0000011112222test  ~ = ' + selectedBenefits[0]);
        } else {
            selectedBenefits.push(elem);
            console.log('Push Ruchi_0000011112222test  ~ = ' + selectedBenefits[0]);
        }
        setselectedBenefits(selectedBenefits);
        console.log('Ruchi_0000011112222test  ~ = '+selectedBenefits.length);
    }

    const uid = auth().currentUser.uid;
    const handleGoalSet = () => {
        if (selectedBenefits.length === 0 && goalTime == 0) {
            seterrmess('Please Select Goal Time and Associated Benefits');
        } else if (selectedBenefits.length > 0 && goalTime > 0) {
            seterrmess(null);
            dispatch(postGoal(uid, goalTime, selectedBenefits));
            setgoalTime(0);
            setselectedBenefits([]);
            setbenefitList(newBenefit);
            navigation.navigate('HomeScreen');
        }
    }

    const RenderBenefit = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.benefits}
                onPress={() => handleBenefits(item._id)}>
                <View>
                    <Icon
                        name={item.icon}
                        type='font-awesome'
                        color={item.active ? '#24BF9C' : '#b3b3b3'}
                    />
                    <Text numberOfLines={2} style={item.active ? styles.benefitTypeActive : styles.benefitType} >{item.benefit}</Text>
                </View>
            </TouchableOpacity>
        );
    }


    return (
        <SafeAreaView style={styles.listContainer}>

            <View style={styles.container}>
                {TimeArray.map((item) => (
                    <Text style={goalTime == item ? styles.btnTimeActive : styles.btnTime}
                        onPress={() => setgoalTime(item)}> {item} min</Text>
                ))}
                <Text style={styles.btnTime} > Custom </Text>
            </View>
            <View style={styles.border}>
                <Text style={styles.listHeading}>Associated Benefits</Text>
                <FlatList
                    contentContainerStyle={styles.container}
                    //numColumns={numColumns}
                    data={benefitList}
                    renderItem={RenderBenefit}
                    keyExtractor={item => item._id}
                    //extraData={associatedBenefits}
                />
            </View>
            <Text style={styles.errmess}>{errmess }</Text>
            <Text onPress={()=>handleGoalSet()} style={styles.btnSetGoal}>Set Goal</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: '#ffffff',
        maxWidth: Dimensions.get("window").width,
        maxHeight: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        padding: 20,
    },
    container: {
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        alignItems: 'flex-start'

    },
    listHeading: {
        fontSize: 15,
        color: '#b3b3b3',
        marginTop: 30,
        marginBottom: 10,

    },
    benefits: {
        padding: 10,
        backgroundColor: '#ffffff',
        marginBottom: 10,
        width: 90,
    },
    benefitType: {
        fontSize: 15,
        textAlign: 'center',
        color: '#333',
        alignSelf: 'center',
        paddingTop: 15,
    },
    benefitTypeActive: {
        fontSize: 15,
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingTop: 15,
    },
    icon: {
        color: '#24BF9C',
    },
    btnTime: {
        fontSize: 20,
        color: '#000',
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 20,
        marginBottom: 20,
        alignSelf: 'flex-start',
        width: 107,
        textAlign: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 50
        },
        shadowRadius: 50,
        shadowOpacity: 1,
        elevation: 10,
    },
    btnTimeActive: {
        fontSize: 20,
        color: '#fff',
        backgroundColor: '#24BF9C',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 20,
        marginBottom: 20,
        alignSelf: 'flex-start',
        width: 107,
        textAlign: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 50
        },
        shadowRadius: 50,
        shadowOpacity: 1,
        elevation: 10,
    },
    btnSetGoal: {
        fontSize: 24,
        color: '#fff',
        backgroundColor: '#24BF9C',
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'center',
        width: 127,
        textAlign: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 50
        },
        shadowRadius: 50,
        shadowOpacity: 1,
        elevation: 10,
    },
    border: {
        borderTopColor: '#b3b3b3',
        marginTop: 20,
        borderTopWidth: 1,
    },
    errmess: {
        color: 'red',
        fontSize: 12,
        alignSelf: 'center',
    },

});
