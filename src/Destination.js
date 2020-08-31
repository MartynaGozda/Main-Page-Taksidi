
import React from 'react';
import './Destination.scss';

function Destination() {
    return (
        <div id="destinationContainer">
            <div class="content">
                <div class="text">
                    <h2>Obierz swój kierunek</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. </p>
                </div>
                <div class="wrapper">
                    <div class="oneDestination">
                        <div class="overlayImage"></div>
                        <h3 class="countryName">Szwajcaria</h3>
                        <div class="number"><span>2</span></div>
                        <img src={require("./img/szwajcaria.jpg")} alt="Szwajcaria" />
                        <button class="btn">Zobacz wyjazdy</button>
                    </div>
                    <div class="oneDestination">
                        <div class="overlayImage"></div>
                        <h3 class="countryName">Francja</h3>
                        <div class="number"><span>3</span></div>
                        <img src={require("./img/francja.jpg")} alt="Francja" />
                        <button class="btn">Zobacz wyjazdy</button>
                    </div>
                    <div class="oneDestination">
                        <div class="text">
                            <h3>... i wiele więcej</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                         magna aliqua. </p>
                            <button class="btn">Sprawdź</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination
