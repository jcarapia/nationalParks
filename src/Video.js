import React from 'react';

const Video = ({video}) => {

  // if(!video){
  //   return <div>Loading...</div>
  // }

  //const videoId = 'TiJtxItuC18';
  const url = `https://www.youtube.com/embed/${video}`;

  return (
      <div>
        <iframe src={url}></iframe>
      </div>
  )
};

export default Video;