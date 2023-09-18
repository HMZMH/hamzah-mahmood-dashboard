import React, { useState } from 'react';
import './Tiles.css';

const SoundCloud = () => {
  const [soundcloudUrl, setSoundCloudUrl] = useState(
    'https://soundcloud.com/clavish/tip-toes-with-aitch?in=soundcloud-uk/sets/bars-best-uk-rap'
  );

  const updateSoundCloudEmbed = () => {
    // You can add validation logic here to ensure the input is a valid SoundCloud URL.
    setSoundCloudUrl(soundcloudUrl);
  };

  return (
    <div className='tile-content'>
      <div className='playerContainer'>
        <iframe
          width='100%'
          height='300'
          scrolling='no'
          frameBorder='no'
          style={{height:'fit-content'}}
          className='media-player'
          title='SoundCloud'
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
            soundcloudUrl
          )}`}
        ></iframe>
      </div>

      <br />
      <label htmlFor='soundcloudInput'>Enter SoundCloud Playlist URL:</label>
      <input
        type='text'
        id='soundcloudInput'
        className='playlist-input'
        value={soundcloudUrl}
        onChange={(e) => setSoundCloudUrl(e.target.value)}
      />
      <button onClick={updateSoundCloudEmbed}>Enter</button>
    </div>
  );
};

export default SoundCloud;
