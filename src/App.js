import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ytSearch from 'youtube-search';
import { Table } from 'reactstrap';
import TableRow from './components/TableRow';
import YoutubePlayer from './components/YoutubePlayer';
import Info from './components/Info';
import './App.css';

function App() {
  const URI = 'http://localhost:8000';
  const [pieces, setPieces] = useState([]);
  const [videoIndex, setVideoIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const [info, setInfo] = useState({});

  const searchYoutube = (payload) => {
    setInfo(payload);
    setVideoIndex(0);
    const {piece, artist, genre} = payload;
    const search = artist !== 'artistes divers' ? `${piece} ${artist}` : `${piece} ${genre}`;
    const opts = {
      maxResults: 10,
      key: process.env.REACT_APP_YOUTUBE_API_KEY
    };
    ytSearch(search, opts, (err, res) => {
      if (err) return console.log(err);
      let videos = res.map(video => {
        return {
          id: video.id,
          description: video.description,
          kind: video.kind,
          title: video.title
        }
      });
      setCurrentVideo(videos[videoIndex]);
      setVideos(videos);
    });
  };

  const clickNextAndPrev = (val) => {
    setVideoIndex(videoIndex + val);
    setCurrentVideo(videos[videoIndex + val])
  };

  const retainID = (info, currentVideo) => {
    // !!!! Enregistrer aussi le full link, on sait jamais !
    // Attention, il faudra que d'abord je retrieve les videos des playlists
    // Et il faudra mettre dans la BDD : si l'id vient de video ou playlist
    // Je peux faire en deux temps.
    // Si video, servir
    // Si playlist, FAIRE L'APPEL API côté client !! -> à voir
    // But might be good.
    console.log('API call to retain ID', info, currentVideo);
  };

  const noRelevantID = (info) => {
    console.log('API call to no relevant ID', info);
  };

  useEffect(() => {
    axios.get(URI + '/api/pieces').then((res) => {
      setPieces(res.data);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="bar">Admin - electro story</div>
      <div className="row wrapper">
        <div className="offset-1 col-5 YTPlayer">
          <YoutubePlayer currentVideo={currentVideo}/>
        </div>
        <div className="col-5">
          <Info info={info}
                videoDescription={currentVideo}
                videoIndex={videoIndex}
                videosLength={videos.length}
                clickNextAndPrev={clickNextAndPrev}
                retainID={retainID}
                noRelevantID={noRelevantID}
                currentVideo={currentVideo} />
        </div>
      </div>
      <div className="row">
        <div className="offset-1 col-10 offset-1">
          <Table hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>music genre</th>
                <th>artist name</th>
                <th>piece</th>
                <th>type</th>
                <th>has video ids</th>
                <th>no relevant id</th>
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
