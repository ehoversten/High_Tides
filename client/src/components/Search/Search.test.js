import { render, screen } from '@testing-library/react';
import Search from './Search';

describe("Tests for Search Component", () => {

    test('renders search input', () => {
        render(<Search />);
        const searchInputElement = screen.getByRole('textbox');
        expect(searchInputElement).toBeInTheDocument();
    });
    
    test('renders search input label', () => {
        render(<Search />);
        const inputElement = screen.getByPlaceholderText(/Enter Search Location/i);
        expect(inputElement).toBeInTheDocument();
    });
    
    test('renders search input as empty', () => {
        render(<Search />);
        const searchInputElement = screen.getByRole('textbox');
        expect(searchInputElement.value).toBe("");
    });
   
    test('renders search input', () => {
        render(<Search />);
        const searchInputElement = screen.getByRole('textbox', { name: /search/i });
        expect(searchInputElement).toBeInTheDocument();
    });

});