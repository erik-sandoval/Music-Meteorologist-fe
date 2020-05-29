
import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/footer/footer.component';

describe('Footer', () => {
    it('should render without crashing', () => {
        const wrapper = render(
            <Footer />
        );
        const copyRight = wrapper.getByText(/©/i)
        expect(copyRight).toBeInTheDocument
    })
});