import React, { useState } from 'react';
import "./Tiles.css";

const Youtube = () => {
  const [playlistID, setPlaylistID] = useState('');
  const [iframeSrc, setIframeSrc] = useState('');

  const updatePlaylist = () => {
    const newIframeSrc = `https://www.youtube.com/embed/videoseries?list=${playlistID}&autoplay=1`;
    setIframeSrc(newIframeSrc);
  };

  return (
    <div className='tile-content'>

      <div className="player-container">
      <iframe
        style={{width:'35vw', height:'50vh'}}
        className="media-player"
        src="https://www.youtube.com/embed/videoseries?list=PLtsAtCd6HTEdQ18g496bUOJJzky0DoKnx&autoplay=1"
        frameborder="0"
        allowfullscreen
        ></iframe>
      </div>

      <br/>
      <label htmlFor="youtubeInput">Enter YouTube Playlist ID:</label>
      <input
        type="text"
        id="youtubeInput"
        className='playlist-input'
        value={playlistID}
        onChange={(e) => setPlaylistID(e.target.value)}
      />
      <button onClick={updatePlaylist}>Enter</button>
    </div>
  );
};

export default Youtube;
