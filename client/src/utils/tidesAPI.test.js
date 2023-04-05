jest.mock('./tidesAPI');

const searchTides = require('./tidesAPI');

test("should return mock tide data", async () => {
    let mockData = await searchTides('8510560');
    expect(mockData).toBe({
        data: { 
            predictions: [
                { t: "1900-01-01 06:00", v: "1.5", type: 'H' },
                { t: "1900-01-01 10:00", v: "0.5", type: 'L' },
                { t: "1900-01-01 14:00", v: "1.5", type: 'H' },
                { t: "1900-01-01 18:00", v: "0.5", type: 'L' },
            ]
        }
    })
})