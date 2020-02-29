import React from 'react';
import ReactDOM from 'react-dom';
import Logout from '../views/Logout.js';
import { BrowserRouter } from 'react-router-dom';
import * as rtl from '@testing-library/react';

// it('renders without crashing', () => {
//   const div = document.getElementById('root');
//   ReactDOM.render(<App />, div);
// });

test('renders without crashing', () => {
  rtl.render(<BrowserRouter><Logout /></BrowserRouter>)
});

test('Gone so soon is displaying', () => {
  const wrapper = rtl.render(<Logout />);
  const Gone = wrapper.getAllByText("Gone so soon?");
  expect(Gone).toBeInTheDocument
});

test('The sentence is displaying', () => {
  const wrapper = rtl.render(<Logout />);
  const Sentence = wrapper.getAllByText("We hate to see you leave but hope you’ll come back for more fun. If you change your mind, you can log back in below.");
  expect(Sentence).toBeInTheDocument
});

test('There is an option to log back in', () => {
  const wrapper = rtl.render(<Logout />);
  const Login = wrapper.getAllByText("Login With Spotify");
  expect(Login).toBeInTheDocument
});

test('There is an option to return to the homepage', () => {
  const wrapper = rtl.render(<Logout />);
  const Return = wrapper.getAllByText("Login With Spotify");
  expect(Return).toBeInTheDocument
});