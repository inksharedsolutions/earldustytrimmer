import React, {useState, useEffect} from 'react';
import Music from '../../static/music.mp3';
import Play from '../../static/play.png';
import Pause from '../../static/pause.png';

const Audio = () => {

    const [playing, setPlaying] = useState(false);

    const toggle = () => { setPlaying(!playing); }

    useEffect(() => {
        const aud = document.getElementById('bgMusic');
        playing? aud.play() : aud.pause();
    },
    [playing]);

    return(
        <>
            <div style={{position: 'fixed', right: '3%', top: '87%'}}>
                <audio id="bgMusic" loop >
                    <source src={Music} type="audio/mpeg" />
                </audio>
                {/* <button onClick={toggle} style={{width: '75px', borderRadius: '50%', cursor: 'pointer', padding: '0'}}> */}
                    <img src={playing? Pause: Play} alt={playing? "Pause":"Play"} style={{width: '75px'}} onClick={toggle}/>
                {/* </button> */}
            </div>
        </>
    )
}

export default Audio;