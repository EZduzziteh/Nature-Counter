import axios from 'axios';
import auth from '@react-native-firebase/auth';
import { createToken } from './createToken';
import * as ActionTypes from './ActionTypes';
import * as calenderFun from '../../components/Utilities/CalenderFunction';
import baseUrl from '../../helpers/baseUrl';

export function postGoal(uid, goalTime, startDate, endDate) {
  return async function action(dispatch) {
    const header = await createToken();
    const goalId = uid + calenderFun.UTCToLocalDate(startDate);
    const goalDetail = {
      goalId, goalTime, startDate, endDate,
    };
    const payload = { uid, goalDetail };
    try {
      await axios.post(`${baseUrl}usergoals`, payload, header)
        .then(dispatch(addUserGoal(goalDetail)))
        .catch((error) => {
          console.log('Post Goal ', error.message);
        });
    } catch (e) {
      console.error(e);
    } finally {
      console.log('post goal finished')
    }
  };
}

export function updateGoal(uid, goalId, goalTime) {
  return async function action(dispatch) {
    const header = await createToken();
    const payload = { uid, goalId, goalTime };

    dispatch(updateUserGoal(goalTime));

    try {
      await axios.put(`${baseUrl}usergoals/${goalId}`, payload, header)
        .then(dispatch(updateUserGoal(goalTime)))
        .catch((error) => {
          console.log('Post Goal ', error.message);
        });
    } catch (e) {
      console.error(e);
    }
  };
}

export function postSymptoms(selectedSymptoms, goalId, uid, date, activityId) {
  return async function action(dispatch) {
    const header = await createToken();
    const dailyActivity = { activityId, symptoms: selectedSymptoms, date };
    const payload = { uid, dailyActivity };
    try {
      await axios.put(`${baseUrl}usergoals/${goalId}/${activityId}`, payload, header)
        .then(dispatch(addDailySymptoms(dailyActivity)))
        .catch((error) => {
          console.log('Post Goal ', error.message);
        });
    } catch (e) {
      console.error(e);
    }
  };
}

export function postTime(timeLog, goalId, uid, selected, activityId, totalActivityTime) {
  return async function action(dispatch) {
    const header = await createToken();
    const dailyActivity = { activityId, date: selected, timeLog: { mapTime: timeLog.mapTime, timerTime: timeLog.timerTime, textTime: timeLog.textTime } };
    const payload = { uid, dailyActivity };
    try {
      await axios.put(`${baseUrl}usergoals/${goalId}/${activityId}`, payload, header)
        .then((response) => response.json)
        .then((response) => dispatch(addUserTime(totalActivityTime)), dispatch(addDailyTime(dailyActivity)))
        .catch((error) => {
          console.log('Post Goal ', error.message);
        });
    } catch (e) {
      console.error(e);
    }
  };
}

export function fetchGoal() {
  return async function action(dispatch) {
    dispatch(goalLoading(true));
    const header = await createToken();
    const { uid } = auth().currentUser;
    const request = axios.get(`${baseUrl}user_goals_views/${uid}`, header);
    return request.then(
      (response) => dispatch(getGoal(response)),
      (err) => dispatch(goalFailed(err)),
    );
  };
}

export const goalLoading = () => ({
  type: ActionTypes.GOAL_LOADING,
});

export const goalFailed = (errmsg) => ({
  type: ActionTypes.GOAL_FAILED,
  payload: errmsg,

});

export const getGoal = (goal) => ({
  type: ActionTypes.GET_GOAL,
  payload: goal,

});
export const updateUserGoal = (goal) => ({
  type: ActionTypes.UPDATE_GOAL_TIME,
  payload: goal,
});

export const getUser = (user) => ({
  type: ActionTypes.GET_USER,
  payload: user,

});

export const addUserGoal = (goal) => ({
  type: ActionTypes.ADD_USER_GOAL,
  payload: goal,
});

export const addUserTime = (payload) => ({
  type: ActionTypes.ADD_USER_TIME,
  payload,

});

export const addDailyTime = (payload) => ({
  type: ActionTypes.ADD_DAILY_TIME,
  payload,

});

export const addDailySymptoms = (payload) => ({
  type: ActionTypes.ADD_DAILY_SYMPTOMS,
  payload,

});
