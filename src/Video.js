import React from 'react';

const Video = ({video}) => {

  // if(!video){
  //   return <div>Loading...</div>
  // }

  //const videoId = 'TiJtxItuC18';
  //const url = `https://www.youtube.com/embed/${video}`;

  return (

      <iframe 
          src={`https://www.youtube-nocookie.com/embed/${video}?rel=0&amp;controls=0&amp;showinfo=0`} 
          frameBorder='0'
          width="450"
          allowFullScreen>
      </iframe>

  )
};

export default Video;