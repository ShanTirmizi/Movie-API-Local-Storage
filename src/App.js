import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [apiData, setApiData] = useState([]);
  const [dataExist, setDataExist] = useState(false);
  const fetchData = async () => {
    const url = 'http://www.omdbapi.com/?s=Batman&page=2&apikey=3b170b7d';
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=Batman&page=2&apikey=${process.env.REACT_APP_OMDB_API}`
      );
      const data = await response.json();
      console.log(data.Search);
      setApiData(data.Search);

      // if (data) {
      //   setApiData(data.Search);
      //   setDataExist(true);
      // }
      // setApiData(data);
      // apiData.push(data);
      // console.log(data);
      // setApiData(data);
    } catch (error) {
      console.log('data fetch error', error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(apiData);
  }, []);
  return (
    <div className="App">
      {apiData.map((api, index) => {
        return (
          <div key={index}>
            <h3>{api.Title}</h3>
            <img src={api.Poster} alt={`${api.Title} poster`} />
          </div>
        );
      })}
      {/* {<div>{apiData}</div>} */}
    </div>
  );
}

export default App;
