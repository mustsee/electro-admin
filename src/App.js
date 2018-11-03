import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import './App.css';

const searchYoutube = (genre) => {
  console.log('searchYoutube', genre.target.innerHTML);
};


function App() {
  const URI = 'http://localhost:8000';
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get(URI + '/api/pieces').then((res) => {
      setGenres(res.data);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="bar">Admin - electro story</div>
      <div className="row">
        <div className="offset-1 col-10 offset-1">
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>music genre</th>
                <th>artist name</th>
                <th>piece</th>
                <th>type</th>
                <th>has ids</th>
              </tr>
            </thead>
            <tbody>
            {
              genres.map((genre, index) =>
                <tr key={genre.name} onClick={(genre) => searchYoutube(genre)}>
                  <th scope="row">{ index + 1 }</th>
                  <td>{genre.name}</td>
                </tr>
              )
            }
            </tbody>
          </Table>
        </div>
      </div>

    </div>
  );
}

export default App;
