import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import TableRow from './components/TableRow';
import YoutubePlayer from './components/YoutubePlayer';
import Info from './components/Info';
import './App.css';

function App() {
  const URI = 'http://localhost:8000';
  const [pieces, setPieces] = useState([]);
  const [videoID, setVideoID] = useState(null);
  const [info, setInfo] = useState({});
  const [genre, setGenre] = useState('');

  const searchYoutube = (payload) => {
    console.log('pp', payload);
    setInfo(payload);
    setGenre(payload.genre);
  };

  useEffect(() => {
    axios.get(URI + '/api/pieces').then((res) => {
      setPieces(res.data);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="bar">Admin - electro story</div>
      <div className="row">
        <div className="offset-1 col-10 offset-1 YTPlayer">
          <YoutubePlayer videoID={videoID}/>
          <Info info={info}/>
        </div>
      </div>
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
                <th>has video ids</th>
              </tr>
            </thead>
            <tbody>
            {
              pieces.map((piece, index) =>
                <TableRow key={piece.title} piece={piece} index={index} onTableRowClick={searchYoutube}/>
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
