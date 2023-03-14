import React,{useState, useRef} from 'react'
import '../styles/VideoCard.css'
import vid from '../assets/vid.mp4'

function VideoCard() {

    const [playing,setPlaying] = useState(false)
    const videoRef = useRef(null)

    const handleVideoPress = () =>{
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }
        else{
            videoRef.current.play()
            setPlaying(true)
        }
    }

  return (
    <div className="videoCard">
        <video 
        src={vid}
        className = "videoCard_player"
        alt = 'short'
        ref={videoRef}
        onClick={handleVideoPress}
        loop

        />
    </div>
  )
}

export default VideoCard