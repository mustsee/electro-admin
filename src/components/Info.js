import React from 'react';

function Info({info}) {
  return (
    <div className="info">
      <div>genre : {info.genre}</div>
      <div>artist : {info.artist}</div>
      <div>piece : {info.piece}</div>
    </div>
  )
}

export default Info;
