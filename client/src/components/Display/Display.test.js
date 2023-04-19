import { render, screen } from '@testing-library/react';
import Display from './Display';


describe("Tests for Display Component", () => {

    test('renders Display component title', () => {
        render(<Display />);
        const imgElement = screen.getByText(/when is high tide today?/i);
        expect(imgElement).toBeInTheDocument();
    })

    test('renders Search component', () => {
        render(<Display />);
        const searchComponent = screen.getByText(/Search Component/i);
        expect(searchComponent).toBeInTheDocument();
    })

    test('renders AM Card component', () => {
        render(<Display />);
        const cardAMComponent = screen.getByText(/AM/i);
        expect(cardAMComponent).toBeInTheDocument();
    })

    test('renders PM Card component', () => {
        render(<Display />);
        const cardPMComponent = screen.getByText(/PM/i);
        expect(cardPMComponent).toBeInTheDocument();
    })

});