import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

describe("Tests for Search Component", () => {

    test('renders search input', () => {
        render(<Search />);
        const searchInputElement = screen.getByRole('textbox');
        expect(searchInputElement).toBeInTheDocument();
    });
    
    test('renders search input element', () => {
        render(<Search />);
        const inputElement = screen.getByPlaceholderText(/Enter Search Location/i);
        expect(inputElement).toBeInTheDocument();
    });
    
    test('renders search input as empty', () => {
        render(<Search />);
        const searchInputElement = screen.getByRole('textbox');
        expect(searchInputElement.value).toBe("");
    });
   
    test('renders form search input', () => {
        render(<Search />);
        const searchInputElement = screen.getByRole('textbox', { name: /search/i });
        expect(searchInputElement).toBeInTheDocument();
    });

    test('should be able to type in input', () => {
        render(<Search />);
        const inputElement = screen.getByPlaceholderText(/Enter Search Location/i);
        fireEvent.change(inputElement, { target: { value: "Greenport" } })
        expect(inputElement.value).toBe("Greenport");
    });
    
    test('should clear input element after button click', () => {
        render(<Search />);
        const inputElement = screen.getByPlaceholderText(/Enter Search Location/i);
        const buttonElement = screen.getByRole('button', { name: /Search/i });
        fireEvent.change(inputElement, { target: { value: "Greenport" } });
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("");
    });

});