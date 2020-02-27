import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About';


describe('About.js', () => {
    it('renders without crashing', () => {
        const wrapper = render(<About />);
        const playlist = wrapper.getAllByText(/playlist/i);
        expect(playlist).toBeInTheDocument
    })
});