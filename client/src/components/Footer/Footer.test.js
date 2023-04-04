import { render, screen } from "@testing-library/react";
import Footer from './Footer';

describe("Tests for Footer Component", () => {

    test("renders footer techstack", () => {
        render(<Footer />);
        const footerElement = screen.getByText(/tech stack/i);
        expect(footerElement).toBeInTheDocument();
    });
   
    test("renders react list item", () => {
        render(<Footer />);
        const listElement = screen.getByText(/react/i);
        expect(listElement).toBeInTheDocument();
    });

    test("renders javascript list items", () => {
        render(<Footer />);
        const listElement = screen.getByText(/javascript/i);
        expect(listElement).toBeInTheDocument();
    });

    test("renders react testing list item", () => {
        render(<Footer />);
        const listElement = screen.getByText(/react testing/i);
        expect(listElement).toBeInTheDocument();
    });

    test("renders jest list items", () => {
        render(<Footer />);
        const listElement = screen.getByText(/jest/i);
        expect(listElement).toBeInTheDocument();
    });
   
});