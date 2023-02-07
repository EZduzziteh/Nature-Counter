import * as ActionTypes from '../actions/ActionTypes';

const Symptoms = (state = {
    isLoading: true,
    errmsg: null,
    symptom: []
}, action) => {
    switch (action.type) {
        case ActionTypes.GET_SYMPTOM:
            return ({ ...state, isLoading: false, errmsg: null, symptom: action.payload.data });

        case ActionTypes.SYMPTOM_LOADING:
            return ({ ...state, isLoading: true, errmsg: null, symptom: [] });

        case ActionTypes.SYMPTOM_FAILED:
            return ({ ...state, isLoading: false, errmsg: action.payload, symptom: [] });

        default:
            return state;
    }
}

export default Symptoms;