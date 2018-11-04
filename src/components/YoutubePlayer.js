import React from 'react';

function YoutubePlayer({videoID}) {
  return (
    videoID ?
      <iframe width='400'
              height='270'
              src={`https://www.youtube.com/embed/${videoID}`}
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
