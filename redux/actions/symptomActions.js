import axios from 'axios';
import { createToken } from './createToken';
import * as ActionTypes from './ActionTypes';
import baseUrl from '../../helpers/baseUrl';


export function fetchSymptoms() {
    return async function action(dispatch) {
        dispatch(symptomLoading(true));
        const header = await createToken();
        const request = axios.get(baseUrl + 'symptoms', header);
        return request.then(
            response => dispatch(getsymptom(response)),
            err => dispatch(symptomFailed(err))
        );
    }
}

export const symptomLoading = () => ({
    type: ActionTypes.SYMPTOM_LOADING

});

export const symptomFailed = (errmsg) => ({
    type: ActionTypes.SYMPTOM_FAILED,
    payload: errmsg

});

export const getsymptom = (symptoms) => ({
    type: ActionTypes.GET_SYMPTOM,
    payload: symptoms
});