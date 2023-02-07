import * as ActionTypes from '../actions/ActionTypes';

const Benefits = (state = {
	isLoading: true,
	errmsg: null,
	benefits: []
}, action) => {
	switch (action.type) {
		case ActionTypes.BENEFITS_LOADING:
			return ({ ...state, isLoading: true, errmsg: null, benefits: [] });

		case ActionTypes.BENEFITS_FAILED:
			return ({ ...state, isLoading: false, errmsg: action.payload, benefits: [] });

		case ActionTypes.GET_BENEFITS:
			return ({ ...state, isLoading: false, errmsg: null, benefits: action.payload });

		default:
			return state;
	}
}

export default Benefits;