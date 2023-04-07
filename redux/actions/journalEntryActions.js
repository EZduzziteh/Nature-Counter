import axios from 'axios';
import { createToken } from './createToken';
import * as ActionTypes from './ActionTypes';
import baseUrl from '../../helpers/baseUrl';


export function fetchJournalEntries() {
	return async function action(dispatch) {
		dispatch(journalEntriesLoading(true));
		const header = await createToken();
		const { uid } = auth().currentUser;
		const request = axios.get(`${baseUrl}journal/${uid}`, header);

		return request.then(
			((response) => {
			    console.log("fetchJournalEntries response:", response.data);
			    dispatch(getJournalEntries(response));

			}),
			err => dispatch(journalEntriesFailed(err))
		);
	}
}

export function postJournalEntry(userId, location, startTime, endTime) {
  return async function action(dispatch) {
    const header = await createToken();
    //const userId = uid + calenderFun.UTCToLocalDate(startDate);

    const journalEntryDetail = {
      location, startTime, endTime, userId
    };
    const payload = { journalEntryDetail };
    try {
      await axios.post(`${baseUrl}journal`, payload, header)
        .then(dispatch(addJournalEntry(journalEntryDetail)))
        .catch((error) => {
          console.log('Post Journal Entry ', error.message);
        });
    } catch (e) {
      console.error(e);
    } finally {
      console.log('post journal entry finished')
    }
  };
}

export const journalEntriesLoading = () => ({
	type: ActionTypes.JOURNAL_ENTRIES_LOADING

});

export const journalEntriesFailed = (errmsg) => ({
	type: ActionTypes.JOURNAL_ENTRIES_FAILED,
	payload: errmsg

});

export const getJournalEntries = (journalEntries) => ({
	type: ActionTypes.GET_JOURNAL_ENTRIES,
	payload: journalEntries

});

export const addJournalEntry = (journalEntry) => ({
  type: ActionTypes.ADD_JOURNAL_ENTRY,
  payload: journalEntry,
});