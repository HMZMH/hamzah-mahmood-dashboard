import React, { useState } from 'react';
import "./Tiles.css";

const Spotify = () => {
  const [spotifySrc, setSpotifySrc] = useState(
    'https://open.spotify.com/embed/playlist/37i9dQZF1DWTyiBJ6yEqeu?utm_source=generator&theme=0'
  );

  const updatePlaylist = () => {
    // You can add validation logic here to ensure the input is a valid Spotify playlist URL.
    setSpotifySrc(spotifySrc);
  };

  return (
    <div className='tile-content'>

      <div className="playerContainer">
        <iframe
          src={spotifySrc}
          style={{height:'40vh'}}
          className='media-player'
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Playlist Player"
        ></iframe>
      </div>

      <br/>
      <label htmlFor="spotifyInput">Enter Spotify Playlist URL:</label>
      <input
        type="text"
        id="spotifyInput"
        className='playlist-input'
        value={spotifySrc}
        onChange={(e) => setSpotifySrc(e.target.value)}
      />
      <button onClick={updatePlaylist}>Enter</button>

    </div>
  );
};

export default Spotify;
