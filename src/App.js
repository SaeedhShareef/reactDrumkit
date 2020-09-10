import React, { Component } from 'react'

import bass from "./sounds/bass.wav";
import bassDrop from "./sounds/bassDrop.wav";
import cymbal from "./sounds/cymbal.wav";
import electroBass from "./sounds/electroBass.wav";
import futureDrum from "./sounds/futureDrum.wav";
import longSnare from "./sounds/longSnare.wav";
import shortSnare from "./sounds/shortSnare.wav";
import pew from "./sounds/pew.wav";
import rimshot from "./sounds/rimshot.wav";


class App extends Component {
   
  render() {
    function playSound(e){
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
      if(!audio) return; // stop the function from running all together
      audio.currentTime = 0; //rewind to the start
      audio.play();
      key.classList.add('playing');
    }
    function removeTransition(e) {
      if(e.propertyName !== 'transform') return; // skip it if it's not a transform
      console.log(e.propertyName);
      // console.log(this); shows what "this" is equal to
      this.classList.remove('playing');
    }
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
    return (
     
              <div className="keys">
        <div data-key="81" className="key"><kbd>Q</kbd><span className="sound">bass</span></div>
        <div data-key="87" className="key"><kbd>W</kbd><span className="sound">bassDrop</span></div>
        <div data-key="69" className="key"><kbd>E</kbd><span className="sound">cymbal</span></div> 
        <div data-key="65" className="key"><kbd>A</kbd><span className="sound">electroBass</span></div>
        <div data-key="83" className="key"><kbd>S</kbd><span className="sound">futureDrum</span></div>
        <div data-key="68" className="key"><kbd>D</kbd><span className="sound">longSnare</span></div>
        <div data-key="90" className="key"><kbd>Z</kbd><span className="sound">shortSnare</span></div>
        <div data-key="88" className="key"><kbd>X</kbd><span className="sound">pew</span></div>
        <div data-key="67" className="key"><kbd>C</kbd><span className="sound">rimshot</span></div>
        <audio src={bass} data-key="81" ></audio>
      <audio data-key="87" src={bassDrop}></audio>
      <audio data-key="69" src={cymbal}></audio>
      <audio data-key="65" src={electroBass}></audio>
      <audio data-key="83" src={futureDrum}></audio>
      <audio data-key="68" src={longSnare}></audio>
      <audio data-key="90" src={shortSnare}></audio>
      <audio data-key="88" src={pew}></audio>
      <audio data-key="67" src={rimshot}></audio> 
      </div>

    )
  }
}


export default App
