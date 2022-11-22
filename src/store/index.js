import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cashReduser } from './cashReduser';
import { customerReduser } from './customerReduser';

const rootReducer = combineReducers({
    cash: cashReduser,
    customers: customerReduser,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))