import "./AuthenticatedApp.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import Youtube from "./Youtube";
import Spotify from "./Spotify";
import Soundcloud from "./Soundcloud";

function AuthenticatedApp() {

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (

    <div id='AuthenticatedApp' className="fluid-container">
      <h1>Music Dashboard</h1>
      <button onClick={handleSignOut} style={{marginTop:'0.5vh'}}>Sign Out</button>

      <div className='row justify-content-center' style={{marginTop:'5vh'}}>

        <div className='tile'>
          <h2>SoundCloud</h2>
          <Soundcloud/>
        </div>

        <div className='tile'>
          <h2>Spotify</h2>
          <Spotify/>
        </div>

        <div className='tile'>
          <h2>YouTube</h2>
          <Youtube/>
        </div>

      </div>

    </div>

  );
}
export default AuthenticatedApp;
