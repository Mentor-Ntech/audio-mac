import { useEffect, useState } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Terminator",
      artist: "Asake",
      img_src: "./image/ask pix 1.jpg",
      src: "./songs/Asake_-_Terminator.mp3"
    },
    {
      title: "Buga",
      artist: "Kizz_daniel",
      img_src: "/image/kizz img.jpg",
      src: "./songs/kizz_daniel_tekno_buga_official_lyric_video_mp3_7090.mp3"
    },
    {
      title: "For_Tonight",
      artist: "Wizkid",
      img_src: "./image/starboy.jpg",
      src: "./songs/Wizkid_-_For_Tonight_ft_Buju_BNXN_.mp3"
    },
    {
      title: "Super freeky",
      artist: "Nicki_Minaj",
      img_src: "./image/blue3.jpg",
      src: "./songs/Nicki_Minaj_-_Super_Freaky_Girl_Roman_Remix_.mp3"
    },
    {
      title: "Call of Duty",
      artist: "Zinoleesky",
      img_src: "./image/marlians.jpg",
      src: "./songs/Zinoleesky_-_Call_Of_Duty.mp3"
    }
    
  ])
  const [currentSongIndex, setCurrentSongIndex]= useState(0);
  const [nextSongIndex, setNextSongIndex]= useState(0);

  useEffect(() =>{
    setNextSongIndex(() =>{
      if(currentSongIndex +1 > songs.length -1){
        return 0
      }else{
        return currentSongIndex +1
      }
    })

  },[currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />

    </div>
  );
}
export default App;