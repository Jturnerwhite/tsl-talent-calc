import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import talentTreeReducer from './modules/TalentTree/talentTreeReducer';

import './base.scss';

// would be useful if additional reducers are needed
const rootReducer = combineReducers({
    talents: talentTreeReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);