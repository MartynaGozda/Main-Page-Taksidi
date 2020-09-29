
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './Slider.scss';
import Menu from './Menu.js';
import { Player } from 'video-react';
import video from "./video/verbier2.mp4";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider() {
    return (
        <div id="sliderContainer">
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} 
                interval={6000}
            >
                <div><img src={require("./img/cover-taksidi.jpg")} /></div>
                <><Player muted={true} autoPlay={true} loop={true} playsinline={true} controls={false} url="">
                    <source src={video} type="video/mp4" />
                </Player></>
                <div><img src={require("./img/cover-taksidi-2.jpg")} /></div>
            </AutoplaySlider>
            <Menu />
            <div class="stripeBox">
                <div class="stripe">
                    <div class="logoBox">
                        <img src={require('./img/logo-taksidi.png')} alt='logo' />
                    </div>
                    <div class="textBox">
                        <div class="text">
                            <h1>Wyjazdy na narty dla każdego!</h1>
                            <p>Nasze wyjazdy tworzymy z myślą o osobach w wieku od 19 do około 39 lat, lubiących jak dużo się dzieje. </p>
                            <button id="button" class="btn">Zobacz wyjazdy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Slider

