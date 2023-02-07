import { combineReducers } from 'redux-immutable';
import { user, UserDetail, UserActivity } from "./userReducer";
//import { firebaseReducer } from "react-redux-firebase";
import Articles from './articleReducer';
import Benefits from './benefitReducer';
import UserGoal from './goalReducer';
import Symptoms from './symptomReducer';

//import user from './userReducer';

export default combineReducers({
    user,
    UserDetails: UserDetail,
    ArticleData: Articles,
    BenefitData: Benefits,
    SymptomData: Symptoms,
    UserGoals: UserGoal
});