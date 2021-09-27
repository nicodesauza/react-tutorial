import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const { NODE_ENV } = process.env;

const middlewares = applyMiddleware(thunk);

const composedEnhancers = composeWithDevTools(middlewares);

const storeEnhancer = NODE_ENV !== 'production' ? composedEnhancers : middlewares


export const store = createStore(
    rootReducer,
    storeEnhancer
)