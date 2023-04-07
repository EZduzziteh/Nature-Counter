import axios from 'axios';
import { createToken } from './createToken';
import * as ActionTypes from './ActionTypes';
import baseUrl from '../../helpers/baseUrl';


export function fetchBenefits() {
	return async function action(dispatch) {
		dispatch(benefitsLoading(true));
		const header = await createToken();
		const request = axios.get(baseUrl + 'benefits', header);
		return request.then(
			((response) => {
			    console.log("fetchBenefits response:", response.data);
			    dispatch(getBenefits(response));

			}),
			err => dispatch(benefitsFailed(err))
		);
	}
}

export const benefitsLoading = () => ({
	type: ActionTypes.BENEFITS_LOADING

});

export const benefitsFailed = (errmsg) => ({
	type: ActionTypes.BENEFITS_FAILED,
	payload: errmsg

});

export const getBenefits = (benefits) => ({
	type: ActionTypes.GET_BENEFITS,
	payload: benefits

});