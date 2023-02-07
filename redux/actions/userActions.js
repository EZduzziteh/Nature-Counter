import axios from 'axios';
import { createToken } from './createToken';
import auth from '@react-native-firebase/auth';
import baseUrl from '../../helpers/baseUrl';
import * as ActionTypes from './ActionTypes';
export const INIT_USER_INFO = 'userActions__INIT_USER_INFO';
export const CLEAR_USER_INFO = 'userActions__CLEAR_USER_INFO';

export const initUserInfo = (user) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
      let { email, displayName, emailVerified, uid } = user;

    if (user.providerData[0].providerId === 'facebook.com') {
      emailVerified = true;
    }

    dispatch({
      type: INIT_USER_INFO,
      payload: {
        email,
        displayName,
        emailVerified,
        uid
      }
    });
    return resolve();
  });
}


export const clearUserInfo = () => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    dispatch({
      type: CLEAR_USER_INFO,
    });
    return resolve();
  });
}


export const addUser = async (name, email, uid) => {
    const header = await createToken();
    const payload = {
        name,
        email,
        uid
    }
    try {
        const res = await axios.post(baseUrl +'userdetails', payload, header);
        return res.data;
    } catch (e) {
        console.error(e);
    }
};


export function fetchUser() {
    return async function action(dispatch) {
        dispatch(userLoading(true));
        const uid = auth().currentUser.uid;
        const header = await createToken();
        const request = axios.get(baseUrl + 'user_details_views/' + uid, header);
        return request.then(
            response => (dispatch(getUser(response),dispatch(getActivity(response)) )),
            err => dispatch(userFailed(err))
        );
    }
}


export const userLoading = () => ({
    type: ActionTypes.USER_LOADING
});

export const userFailed = (errmsg) => ({
    type: ActionTypes.USER_FAILED,
    payload: errmsg

});

export const getUser = (user) => ({
    type: ActionTypes.GET_USER,
    payload: user

});

export const getActivity = (user) => ({
  type: ActionTypes.GET_ACTIVITY,
  payload: user

});
