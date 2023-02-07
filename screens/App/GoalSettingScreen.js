import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import { SvgUri } from 'react-native-svg';
import baseUrl from '../../helpers/baseUrl';
import * as commonFun from '../../components/Utilities/commonFunctions';
import * as goalActions from '../../redux/actions/goalActions';
import { Button, GoalButton } from '../../components/Button';
import { MEDIUM_GREY } from '../../components/Utilities/Constants';
import { Benefit } from '../../components/ListItem/BenefitListItem';
import {
  LESS_ANXIETY_ACTIVE,
  LESS_ANXIETY_INACTIVE,
  LOWER_STRESS_ACTIVE,
  HAPPINESS_INACTIVE,
  HAPPINESS_ACTIVE,
  POSITIVITY_INACTIVE,
  POSITIVITY_ACTIVE,
  MIND_ACTIVE,
  MIND_INACTIVE,
  MEMORY_INACTIVE,
  MEMORY_ACTIVE,
  IMMUNITY_INACTIVE,
  IMMUNITY_ACTIVE,
  LOWER_STRESS_INACTIVE,
  GAIN_ENERGY_ACTIVE,
  GAIN_ENERGY_INACTIVE,
  LESS_DEPRESSION_INACTIVE,
  LESS_DEPRESSION_ACTIVE,
  BETTER_SLEEP_ACTIVE,
  BETTER_SLEEP_INACTIVE,
  BLOOD_PRESSURE_ACTIVE,
  BLOOD_PRESSURE_INACTIVE,
  BETTER_FOCUS_INACTIVE,
  BETTER_FOCUS_ACTIVE,
} from '../../assets/icons';

const goalOptions = [30, 60, 90];

const rows = {
  row1: goalOptions,
  row2: goalOptions.slice(1, goalOptions.length),
  row3: goalOptions.slice(2, goalOptions.length),
}

const benefitsList = [
  {
    icon_active: LOWER_STRESS_ACTIVE,
    icon_inactive: LOWER_STRESS_INACTIVE,
    label: 'Lower Stress',
    row: rows.row1,
  },
  {
    icon_active: GAIN_ENERGY_ACTIVE,
    icon_inactive: GAIN_ENERGY_INACTIVE,
    label: 'Gain Energy',
    row: rows.row1,
  },
  {
    icon_active: LESS_DEPRESSION_ACTIVE,
    icon_inactive: LESS_DEPRESSION_INACTIVE,
    label: 'Less Depression',
    row: rows.row1,
  },
  {
    icon_active: BLOOD_PRESSURE_ACTIVE,
    icon_inactive: BLOOD_PRESSURE_INACTIVE,
    label: 'Blood Pressure',
    row: rows.row1,
  },
  {
    icon_active: BETTER_SLEEP_ACTIVE,
    icon_inactive: BETTER_SLEEP_INACTIVE,
    label: 'Better Sleep',
    row: rows.row2,
  },
  {
    icon_active: BETTER_FOCUS_ACTIVE,
    icon_inactive: BETTER_FOCUS_INACTIVE,
    label: 'Better Focus',
    row: rows.row2,
  },
  {
    icon_active: LESS_ANXIETY_ACTIVE,
    icon_inactive: LESS_ANXIETY_INACTIVE,
    label: 'Less Anxiety',
    row: rows.row2,
  },
  {
    icon_active: HAPPINESS_ACTIVE,
    icon_inactive: HAPPINESS_INACTIVE,
    label: 'Happiness',
    row: rows.row2,
  },
  {
    icon_active: POSITIVITY_ACTIVE,
    icon_inactive: POSITIVITY_INACTIVE,
    label: 'Positivity',
    row: rows.row3,
  },
  {
    icon_active: MEMORY_ACTIVE,
    icon_inactive: MEMORY_INACTIVE,
    label: 'Better Memory',
    row: rows.row3,
  },
  {
    icon_active: MIND_ACTIVE,
    icon_inactive: MIND_INACTIVE,
    label: 'Mind Clarity',
    row: rows.row3,
  },
  {
    icon_active: IMMUNITY_ACTIVE,
    icon_inactive: IMMUNITY_INACTIVE,
    label: 'Better Immunity',
    row: rows.row3,
  },
];

export default function GoalSetting({ navigation, benefits, userdetails, userisLoading }) {
  const [errmess, seterrmess] = useState(null);
  const [refresh, setRefresh] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  let prevGoalTime = 0;
  let isGoal = false;
  const [isLoading, setIsLoading] = useState();
  const chkUser = commonFun.getNested(userdetails, 'goalDetail', 'endDate');
  const [selectedTime, setSelectedTime] = useState(30);

  useEffect(() => {
    if (userdetails?.goalDetail?.goalTime) {
      setSelectedTime(userdetails.goalDetail.goalTime)
    }
  },[userdetails])

  if (chkUser != undefined && moment.utc().format() < chkUser) {
    prevGoalTime = userdetails.goalDetail.goalTime;
    isGoal = true;
  } else {
    isGoal = false;
  }

  const [goalTime, setgoalTime] = useState(prevGoalTime);

  /**
   * NOT SUPPORTED
   */
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  /**
   * NOT SUPPORTED
   * No setting custom goal time
   * @param time
   */
  const handleCustomTime = (time) => {
    setgoalTime(time);
  };

  /**
   * Set new user goal
   */
  const handleClick = () => {
    const { uid } = auth().currentUser;
    const startDate = new Date();
    const endDate = new Date() + 1;

    dispatch(goalActions.postGoal(uid, selectedTime, startDate, endDate));
    navigation.navigate('HomeScreen');
    setRefresh(true);
  };

  /**
   * NOT SUPPORTED
   * using handleClick instead for submitting new goal
   */
  const handleGoalSet = () => {
    const { uid } = auth().currentUser;
    const goalId = null;

    if (isGoal) {
      const { goalId } = userdetails.goalDetail;

      dispatch(goalActions.updateGoal(uid, goalId, goalTime));

      navigation.navigate('HomeScreen');
    } else {
      const today = new Date();
      const dayOfWeek = 1;
      const day = today.getDay();
      let startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      let endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

      if (day === 0 || day === 6) {
        startDate = startDate.setDate(
          startDate.getDate()
          + (dayOfWeek + 7 - startDate.getDay())
          % 7
        );
        endDate = endDate.setDate(
          (endDate.getDate() + 7)
          + (dayOfWeek + 7 - endDate.getDay())
          % 7
        );
      } else {
        startDate = startDate.setDate(startDate.getDate() + (dayOfWeek - 7 - startDate.getDay()) % 7);
        endDate = endDate.setDate((endDate.getDate() + 7) + (dayOfWeek - 7 - endDate.getDay()) % 7);
      }

      startDate = moment.utc(startDate).format();
      endDate = moment.utc(endDate).format();

      if (goalTime === 0) {
        seterrmess('Please Select Goal Time');
      } else if (goalTime > 0) {
        seterrmess(null);

        dispatch(goalActions.postGoal(uid, goalTime, startDate, endDate));

        navigation.navigate('HomeScreen');
      }
    }
    setRefresh(true);
  };

  /**
   * NOT SUPPORTED
   * Using PNGs instead of rendering SVGs
   * @param item
   * @param index
   * @return {JSX.Element}
   * @constructor
   */
  const RenderBenefit = ({ item, index }) => {
    const iconurl = `${baseUrl}icons/${item.icon}`;

    return (
      <TouchableOpacity style={styles.benefits}>
        <View>
          <View
            style={
              goalTime + 1 < item.gainTime
                ? styles.benefitTypeIcon
                : styles.benefitTypeIconActive
            }
          >
            <SvgUri
              width="40"
              height="40"
              source={{ uri: iconurl }}
              fill={
                goalTime + 1 < item.gainTime
                  ? '#b3b3b3'
                  : '#24BF9C'
              }
            />
          </View>

          <Text
            numberOfLines={2}
            style={
              goalTime + 1 < item.gainTime
                ? styles.benefitType
                : styles.benefitTypeActive
            }
          >
            {item.benefit}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.goalButtonContainer}>
        { goalOptions.map((g) => {
          const handleClick = () => setSelectedTime(g);

          return (
            <GoalButton
              label={`${g} min`}
              active={selectedTime === g}
              onPress={handleClick}
            />
          );
        })}
      </View>
      <View style={styles.benefitsContainer}>
        <Text style={styles.benefitsTitle}>
          Associated Benefits
        </Text>
        <View style={styles.renderedBenefitsContainer}>
          { benefitsList.map((b) => {
            const handleActive = () => {
              if (b.row.includes(selectedTime)) {
                return b.icon_active
              } else {
                return b.icon_inactive
              }
            }

            return (
              <Benefit
                label={b.label}
                source={handleActive()}
              />
            )
          }) }
        </View>
      </View>
      <Button
        label="Set Goal"
        onPress={handleClick}
      />
      <Text style={styles.helperText}>You can update your goal in Settings.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  goalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  benefitsContainer: {
    borderTopWidth: 1,
    borderColor: MEDIUM_GREY,
    flex: 5,
  },
  benefitsTitle: {
    marginLeft: 20,
    marginTop: 20,
  },
  renderedBenefitsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
  },
  helperText: {
    textAlign: 'center',
    marginVertical: 15,
    color: 'rgba(0, 0, 0, 0.5)'
  },
});
