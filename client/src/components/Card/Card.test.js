import { render, screen } from '@testing-library/react';
import Card from './Card';

describe("Tests for Card Component", () => {

    test('renders AM or PM card title', () => {
        render(<Card />);
        let titleValue = 'AM';
        const titleElement = screen.getByText('AM');
        expect(titleElement.textContent).toBe(titleValue);
    });

    test('renders high tide text content', () => {
        render(<Card />);
        let text = 'High: ';
        const textElement = screen.getByText('High:');
        expect(textElement.textContent).toBe(text);
    });
    
    test('renders Low tide text content', () => {
        render(<Card />);
        let text = 'Low: ';
        const textElement = screen.getByText('Low:');
        expect(textElement.textContent).toBe(text);
    });

    // test('renders tide height in meters text content', () => {
    //     render(<Card />);
    //     let text = 'Meters: ';
    //     const textElement = screen.getAllByText('Meters:');
    //     expect(textElement.textContent).toBe(text);
    // });

});