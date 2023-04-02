import axios from 'axios';

const searchTides = async (query) => {
    let montauk = "8510560";
    let url = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=today&product=predictions&datum=mllw&interval=hilo&format=json&units=metric&time_zone=lst_ldt&station=${montauk}`;
    return axios.get(url);
}

export default searchTides;