import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux'
// import { legacy_createStore as createStore, combineReducers } from 'redux'


import thunk from "redux-thunk"
import ProductReducer from '../Reducers/ProductReducer';
import { createReducer } from '@reduxjs/toolkit';

const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),

);
const rootReducer = combineReducers({
    products: ProductReducer,
    cart: createReducer,
})

const store = createStore(rootReducer, enhancer)


export default store