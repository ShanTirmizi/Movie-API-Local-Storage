import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState('');
  const fetchData = async () => {
    const url = 'http://www.omdbapi.com/?s=Batman&page=2&apikey=3b170b7d';
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_OMDB_API}`
      );
      const data = await response.json();
      console.log(data.Search);
      setApiData(data.Search);
    } catch (error) {
      console.log('data fetch error', error);
    }
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  console.log(search.length);
  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search..."
          onChange={searchHandler}
          value={search}
        />
        <button type="submit" onClick={fetchData}>
          Search
        </button>
      </form>
      {search.length < 4 ? (
        <h1>The search needs to be longer than three words</h1>
      ) : (
        apiData.map((api, index) => {
          return (
            <div key={index}>
              <h3>{api.Title}</h3>
              <img src={api.Poster} alt={`${api.Title} poster`} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
