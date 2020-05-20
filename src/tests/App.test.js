import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import * as rtl from '@testing-library/react';

test('renders without crashing', () => {
  rtl.render(<BrowserRouter><App /></BrowserRouter>)
});

