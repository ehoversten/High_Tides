import { render, screen } from '@testing-library/react';
import App from './App';
import axiosMock from 'axios';
import searchTides from './utils/tidesAPI';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.toHaveTextContent("Testing");
//   expect(linkElement).toBeInTheDocument();
// });


// Mocking HighTide API request
jest.mock('axios');

describe("mock axios request of searchTides method to tidesAPI", () => {

  test("should return mock tide data", async () => {
    axiosMock.get.mockResolvedValue({
      data: { 
        predictions: [
            { t: "1900-01-01 06:00", v: "1.5", type: 'H' },
            { t: "1900-01-01 10:00", v: "0.5", type: 'L' },
            { t: "1900-01-01 14:00", v: "1.5", type: 'H' },
            { t: "1900-01-01 18:00", v: "0.5", type: 'L' },
        ]
      }
    });
  
    let montauk = "8510560";
    const results = await searchTides(montauk);
    expect(results).toEqual({
      data: { 
        predictions: [
            { t: "1900-01-01 06:00", v: "1.5", type: 'H' },
            { t: "1900-01-01 10:00", v: "0.5", type: 'L' },
            { t: "1900-01-01 14:00", v: "1.5", type: 'H' },
            { t: "1900-01-01 18:00", v: "0.5", type: 'L' },
        ]
      }
    })
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    // expect(axiosMock.get).toHaveBeenCalledWith(montauk);
  });

});