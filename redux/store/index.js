import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';


export default function configureStore(initialState) {
  let middlewares = [thunk];


  const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const composeEnhancers = devTool ? devTool({ name: 'NatureCounter Redux Store' }) : compose;
  
  middlewares.push(createLogger({ collapsed: true }));

	return createStore(reducer,initialState, composeWithDevTools(applyMiddleware( ...middlewares)));

  // return createStore(reducer, composeWithDevTools(applyMiddleware( ...middlewares)));
}