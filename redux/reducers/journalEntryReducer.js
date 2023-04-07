import * as ActionTypes from '../actions/ActionTypes';

const JournalEntries = (state = {
	isLoading: true,
	errmsg: null,
	journalEntries: []
}, action) => {
	switch (action.type) {
		case ActionTypes.JOURNAL_ENTRIES_LOADING:
			return ({ ...state, isLoading: true, errmsg: null, journalEntries: [] });

		case ActionTypes.JOURNAL_ENTRIES_FAILED:
			return ({ ...state, isLoading: false, errmsg: action.payload, journalEntries: [] });

		case ActionTypes.GET_JOURNAL_ENTRIES:
			return ({ ...state, isLoading: false, errmsg: null, journalEntries: action.payload });

		default:
			return state;
	}
}

export default JournalEntries;