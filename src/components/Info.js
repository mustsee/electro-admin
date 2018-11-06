import React from 'react';
import { Button } from 'reactstrap';

function Info({
                info,
                videoDescription,
                videoIndex,
                videosLength,
                clickNextAndPrev,
                retainID,
                noRelevantID,
                currentVideo,
              }) {
  return (
    <div className="info">
      <div><span>genre :</span> {info.genre}</div>
      <div><span>artist :</span> {info.artist}</div>
      <div><span>piece :</span> {info.piece}</div>
      <hr />
      <Button color="secondary"
              disabled={videoIndex === 0}
              onClick={() => clickNextAndPrev(-1)}>
        previous YT result
      </Button>
      <span>{`${videosLength ? videoIndex + 1 : 0} / ${videosLength}`}</span>
      <Button color="secondary"
              disabled={!videosLength ? true : videoIndex === videosLength - 1}
              onClick={() => clickNextAndPrev(1)}>
        next YT result
      </Button>
      <hr />
      <Button color="success"
              disabled={!info.genre}
              onClick={() => retainID(info, currentVideo)}
      >
        Retain ID
      </Button>
      <Button color="danger"
              disabled={!info.genre}
              onClick={() => noRelevantID(info)}
      >No relevant ID</Button>
      <hr />
      <div className="videoInfos">
        <div><span>title :</span> {videoDescription.title}</div>
        <div><span>description :</span> {videoDescription.description}</div>
      </div>
    </div>
  )
}

export default Info;
