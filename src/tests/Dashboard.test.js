import React from 'react';
import Dashboard from '../views/Dashboard.js';
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../Redux/reducers";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import * as rtl from '@testing-library/react';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

test('renders without crashing', () => {
  rtl.render(<Provider store={store}><Dashboard /></Provider>)
});