import React from 'react';
import { render } from '@testing-library/react';
import Team from '../components/Team';


describe('Team.js', () => {
    it('renders without crashing', () => {
        const wrapper = render(<Team />);
        const team = wrapper.getAllByText(/team/i);
        expect(team).toBeInTheDocument
    })
});