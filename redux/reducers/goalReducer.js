import * as ActionTypes from '../actions/ActionTypes';

const UserGoal = (state = {
	isLoading: true,
	errmsg: null,
	goals: []
}, action) => {
	switch (action.type) {
		case ActionTypes.GOAL_LOADING:
			return ({ ...state, isLoading: true, errmsg: null, goals: [] });

		case ActionTypes.GOAL_FAILED:
			return ({ ...state, isLoading: false, errmsg: action.payload, goals: [] });

		case ActionTypes.GET_GOAL:
			return ({ ...state, isLoading: false, errmsg: null, goals: action.payload });

		default:
			return state;
	}
}


export default UserGoal;