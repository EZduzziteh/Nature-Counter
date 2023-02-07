import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as ActionTypes from '../actions/ActionTypes';
import * as userActions from '../actions/userActions';

const defaultState = fromJS({
  email: null,
  displayName: null,
  emailVerified: false,
  uid: null,
});

export const user = handleActions({

  [userActions.INIT_USER_INFO]: (state, action) => {
    const {
      payload: {
        email, displayName, emailVerified, uid,
      },
    } = action;
    return state.set('email', email).set('displayName', displayName).set('emailVerified', emailVerified).set('uid', uid);
  },

  [userActions.CLEAR_USER_INFO]: (state, action) => {
    console.log('clear');
    return defaultState;
  },

}, defaultState);

const initialState = fromJS({
  isLoading: false,
  errmsg: null,
  userdetails: {
    name: '',
    CurrentNatureTime: 0,
    goalDetail: {
      goalId: 0,
      goalTime: 0,
      startDate: null,
      endDate: null,
      dailyActivity: [{
        timeLog: {
          mapTime: 0,
          timerTime: 0,
          textTime: 0,
        },
        activityId: null,
        symptoms: [{
          level: 0,
          _id: null,
          symptom: null,
          icon: null,
        }],
      }],
    },
  },
});

export const UserDetail = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.USER_LOADING:
      return state.set('isLoading', true);

    case ActionTypes.USER_FAILED:
      return state.set('isLoading', false).set('errmsg', action.payload);

    case ActionTypes.GET_USER:
      return state.set('isLoading', false).set('userdetails', action.payload.data);

    case ActionTypes.ADD_USER_GOAL: {
      return (state.setIn(['userdetails', 'CurrentNatureTime'], 0)
        .setIn(['userdetails', 'goalDetail', 'goalId'], action.payload.goalId)
        .setIn(['userdetails', 'goalDetail', 'goalTime'], action.payload.goalTime)
        .setIn(['userdetails', 'goalDetail', 'startDate'], action.payload.startDate)
        .setIn(['userdetails', 'goalDetail', 'endDate'], action.payload.endDate)
        .setIn(['userdetails', 'goalDetail', 'dailyActivity'], [{
          timeLog: { mapTime: 0, timerTime: 0, textTime: 0 },
          activityId: null,
          symptoms: [],
        }]));
    }

    case ActionTypes.UPDATE_GOAL_TIME:
      return state.setIn(['userdetails', 'goalDetail', 'goalTime'], action.payload);

    case ActionTypes.ADD_USER_TIME:
      return state.updateIn(['userdetails', 'CurrentNatureTime'], (val) => parseInt(val) + parseInt(action.payload));

    case ActionTypes.ADD_DAILY_SYMPTOMS:
      const user = ['userdetails', 'goalDetail', 'dailyActivity'];
      const activityIndex = state.getIn(user).findIndex((activity) => activity.activityId == action.payload.activityId);
      if (activityIndex === -1) {
        console.log(`outside current Acivity Present and activityIndex is ${activityIndex}`);
        return state.setIn(user, state.getIn(user).concat(action.payload));
      }
      const indexData = ['userdetails', 'goalDetail', 'dailyActivity', activityIndex, 'symptoms'];
      console.log(`inside current Acivity Present and activityIndex is ${activityIndex}`);
      return state.setIn(indexData, fromJS(action.payload.symptoms));

    case ActionTypes.ADD_DAILY_TIME:
      const timedata = ['userdetails', 'goalDetail', 'dailyActivity'];
      const timeIndex = state.getIn(timedata).findIndex((activity) => activity.activityId == action.payload.activityId);
      if (timeIndex === -1) {
        return state.setIn(timedata, state.getIn(timedata).concat(action.payload));
      }
      return state.updateIn(['userdetails', 'goalDetail', 'dailyActivity', timeIndex, 'timeLog', 'mapTime'], (time) => parseInt(time) + parseInt(action.payload.timeLog.mapTime))
        .updateIn(['userdetails', 'goalDetail', 'dailyActivity', timeIndex, 'timeLog', 'timerTime'], (time) => parseInt(time) + parseInt(action.payload.timeLog.timerTime))
        .updateIn(['userdetails', 'goalDetail', 'dailyActivity', timeIndex, 'timeLog', 'textTime'], (time) => parseInt(time) + parseInt(action.payload.timeLog.textTime));

    default:
      return state;
  }
};
