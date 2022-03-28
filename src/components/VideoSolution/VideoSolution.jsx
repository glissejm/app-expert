import React from 'react'
import Markdown from '../../utils/Markdown'
import YouTube from 'react-youtube';

export default function VideoSolution(){
  const opts = {
    height: '300',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const idURL = 'Ll7xfe3HoZE'

  return (
    <>
      <div className='bg-third px-3 py-2 text-slate-200 font-bold'>
        <h3>Video Solución</h3>
      </div>
      <div className={'px-3 py-2 text-justify'}>
        <YouTube videoId={idURL} opts={opts} onReady={_onReady} />
        
      </div>
    </>
  ) 
}