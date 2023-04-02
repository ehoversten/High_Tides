import { render, screen } from '@testing-library/react';
import Header from './Header';

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
})