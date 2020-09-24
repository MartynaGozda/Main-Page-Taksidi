
import React from 'react';
import './Destination.scss';

function Destination() {
    return (
        <div id="destinationContainer">
            <div class="content">
                <div class="text">
                    <h2>Obierz swój kierunek</h2>
                    <p class="mainText">TAKSIDI to zorganizowane wyjazdy narciarskie i snowboardowe dla młodych i aktywnych ludzi do renomowanych alpejskich ośrodków we Francji, Włoszech, Szwajcarii i Austrii. Nasze wyjazdy to połączenie dobrej zabawy na najlepszych stokach, imprez, warsztatów i mnóstwa dodatkowych atrakcji.</p>
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
                            <p>Sprawdź wszystkie dostępne destynacje w sezonie 2020/2021.</p>
                            <button id="btnMore" class="btn">Sprawdź</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination
