import * as ActionTypes from '../actions/ActionTypes';


const initialState = {
	isLoading: true,
	errmsg: null,
	articles: []
};

function Articles(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.ARTICLES_LOADING:
			//return ({ ...state, isLoading: true, errmsg: null, articles: [] });
			return Object.assign({}, state, { isLoading: true, errmsg: null, articles: []});

		case ActionTypes.ARTICLES_FAILED:
			//return ({ ...state, isLoading: false, errmsg: action.payload, articles: [] });
			return Object.assign({}, state, { isLoading: false, errmsg: action.payload, articles: []});

		case ActionTypes.GET_ARTICLES:
			//return ({ ...state, isLoading: false, errmsg: null, articles: action.payload });
			return Object.assign({}, state, { isLoading: false, errmsg: null, articles: action.payload });

		default:
			return state;
	}
}

export default Articles;
