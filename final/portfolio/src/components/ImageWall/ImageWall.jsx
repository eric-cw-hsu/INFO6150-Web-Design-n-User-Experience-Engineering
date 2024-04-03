import React, { useContext } from 'react';
import profileImg from '../../assets/profile.svg';
import './ImageWall.css';
import { ScrollContext } from '../../lib/ScrollObserver';
import SpeechBubble from '../SpeechBubble/SpeechBubble';

const ImageWall = () => {
  return (
    <div id="image-wall" className="image-wall">
      <div className="profile-shout-out">
        <SpeechBubble >Seeking for Software Developer Role</SpeechBubble>
      </div>
      <div className="profile">
        <img className="profile__img" src={profileImg} alt="profile" />
        <div className="profile__text">
          <h1 className='profile__text__h1'>It&apos;s now or never!!</h1>
          <p className='profile__text__p'>We only live once, just give it a shot!</p>
        </div>
      </div>
    </div>
  );
}

export default ImageWall;
