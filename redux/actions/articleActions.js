import axios from 'axios';
import { createToken } from './createToken';
import * as ActionTypes from './ActionTypes';
import baseUrl from '../../helpers/baseUrl';


export function fetchArticles() {
	return async function action(dispatch) {
		dispatch(articlesLoading(true));
		const header = await createToken();
		const request = axios.get(baseUrl + 'articles', header);
		return request.then(
			response => dispatch(getArticles(response)),
			err => dispatch(articlesFailed(err))
		);
	}
}

export const articlesLoading = () => ({
	type: ActionTypes.ARTICLES_LOADING

});

export const articlesFailed = (errmsg) => ({
	type: ActionTypes.ARTICLES_FAILED,
	payload: errmsg

});

export const getArticles = (articles) => ({
	type: ActionTypes.GET_ARTICLES,
	payload: articles

});