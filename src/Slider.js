
import React from 'react';
import './Slider.scss'
import Menu from './Menu.js'

function Slider() {
    return (
        <div id="sliderContainer">
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

