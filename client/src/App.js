import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Display from './components/Display/Display';
// import Search from './components/Search/Search';
// import Card from './components/Card/Card'
import searchTides from './utils/tidesAPI';
// import axios from 'axios';

function App() {
  const [tides, setTides] = useState([]);

  useEffect(() => { 
    getTides();
  }, []);
  
  const getTides = async () => {
    // axios.get("https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=today&product=predictions&datum=mllw&interval=hilo&format=json&units=metric&time_zone=lst_ldt&station=8510560")
    //   .then(data => {
    //     console.log("Data: ", data);
    //   })
    //   .catch(err => {
    //      console.log(err.response.data.message);
    //      console.log(err.response.status);
    //      console.log(err.response.header);
    //     throw err;
    //   });
    try {
      let response = await searchTides('test');
      console.log("Response: ", response);
      setTides(response.data.predictions);
    } catch(err) {
      if(err.response) {
        console.log(err.response.data.message);
        console.log(err.response.status);
        console.log(err.response.header);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing</h1>
        <Header />
        <Display tides={tides}/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
