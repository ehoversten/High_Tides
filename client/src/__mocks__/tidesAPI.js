// export default { 
//     searchTides: Promise.resolve({ 
//         data: { 
//             predictions: [
//                 { t: "1900-01-01 06:00", v: "1.5", type: 'H' },
//                 { t: "1900-01-01 10:00", v: "0.5", type: 'L' },
//                 { t: "1900-01-01 14:00", v: "1.5", type: 'H' },
//                 { t: "1900-01-01 18:00", v: "0.5", type: 'L' },
//             ]
//         }
//     })
// }

const searchTides = () => {
    return Promise.resolve({
        data: { 
            predictions: [
                { t: "1900-01-01 06:00", v: "1.5", type: 'H' },
                { t: "1900-01-01 10:00", v: "0.5", type: 'L' },
                { t: "1900-01-01 14:00", v: "1.5", type: 'H' },
                { t: "1900-01-01 18:00", v: "0.5", type: 'L' },
            ]
        }
    })
}

// export default searchTides;
exports.searchTides = searchTides;