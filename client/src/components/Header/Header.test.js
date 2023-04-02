import { render, screen } from '@testing-library/react';
import Header from './Header';

describe("Tests for Header Component", () => {

    test('renders application title', () => {
        render(<Header />);
        const titleElement = screen.getByText('High Tides');
        expect(titleElement).toBeInTheDocument();
    });
    
    test('renders application logo', () => {
        render(<Header />);
        const logoElement = screen.getByAltText('high tides logo');
        expect(logoElement).toBeInTheDocument();
    });
    
    test('renders text for location of API request', () => {
        render(<Header />);
        const locationElement = screen.getByText('for');
        expect(locationElement).toBeInTheDocument();
    });
    
    test('renders a heading element in the DOM/JSX', () => {
        render(<Header />);
        const headinglement = screen.getByRole('heading');
        expect(headinglement).toBeInTheDocument();
    });
    
    test('renders a heading element with text of "High Tides" in the DOM/JSX', () => {
        render(<Header />);
        const headinglement = screen.getByRole('heading', { name: "High Tides"});
        expect(headinglement).toBeInTheDocument();
    });
    
})