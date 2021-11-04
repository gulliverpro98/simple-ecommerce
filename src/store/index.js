import { createStore, combineReducers } from 'redux';
import carrelloReducer from './carrelloReducer';
import showCarrelloReducer from './showCarrelloReducer';
import loginReducer from './loginReducer';


const store = createStore(
    combineReducers(
        {
            carrelloReducer,
            showCarrelloReducer,
            loginReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
