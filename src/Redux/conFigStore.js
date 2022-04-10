import {combineReducers, createStore} from 'redux'

import {BTDatVeReducer} from './reducer/BTDatVeReducer';

const rootReducer = combineReducers({
    BTDatVeReducer: BTDatVeReducer,


});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
