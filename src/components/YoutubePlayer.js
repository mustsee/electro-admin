import React from 'react';

function YoutubePlayer({currentVideo}) {
  const URI = currentVideo.id ? currentVideo.kind === 'youtube#playlist' ?
    `videoseries?list=${currentVideo.id}` : currentVideo.id : null;
  return (
    currentVideo.id ?
      <iframe width='400'
              height='270'
              src={`https://www.youtube.com/embed/${URI}`}
              frameBorder="0"
              title="searchResult"
      />
      :
      <div className="placeholderYTPlayer">
        No video loaded yet.
      </div>
  )
}

export default YoutubePlayer;
