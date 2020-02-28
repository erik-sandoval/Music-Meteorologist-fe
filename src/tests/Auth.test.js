import React from 'react';
import Auth from '../components/Auth.js';
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../Redux/reducers";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import * as rtl from '@testing-library/react';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

test('renders without crashing', () => {
  rtl.render(<Provider store={store}><Auth /></Provider>)
});

test('login button is in auth', () => {
    const wrapper = rtl.render(<Auth />);
    const authButton = wrapper.getAllByText("Login With Spotify");
    expect(authButton).toBeInTheDocument
});

test('h2 is displaying', () => {
    const wrapper = rtl.render(<Auth />);
    const header2 = wrapper.getAllByText("Discover songs by their traits");
    expect(header2).toBeInTheDocument
});

test('p is displaying', () => {
    const wrapper = rtl.render(<Auth />);
    const sentence = wrapper.getAllByText("We'll curate a playlist based on the different traits of songs you like in your Spotify library.");
    expect(sentence).toBeInTheDocument
});

