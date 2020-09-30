
import React from 'react';
import './Destination.scss';
import Destination from './Destination.js'

var DestinationArr = [
    {
        index: 1,
        image: "./img/francja.jpg",
        country_name: 'Francja',
        number_of_offers: '3',
        more_destinations: "Wyjazdy do Francji",
    },

    {
        index: 2,
        image: './img/szwajcaria.jpg',
        country_name: 'Szwajcaria',
        number_of_offers: '2',
        more_destinations: "Wyjazdy do Szwajcarii",
    }

];

function DestinationWrapper() {
    return (
        <div id="destinationContainer">
            <div class="content">
                <div class="mainText">
                    <h2>Obierz swój kierunek</h2>
                    <p class="mainText">TAKSIDI to zorganizowane wyjazdy narciarskie i snowboardowe dla młodych i aktywnych ludzi do renomowanych alpejskich ośrodków we Francji, Włoszech, Szwajcarii i Austrii. Nasze wyjazdy to połączenie dobrej zabawy na najlepszych stokach, imprez, warsztatów i mnóstwa dodatkowych atrakcji.</p>
                </div>
                <div class="destinationWrapper">
                    {DestinationArr.map((oneCountry) =>
                        <Destination text={oneCountry.text} image={oneCountry.image} country_name={oneCountry.country_name} number={oneCountry.number_of_offers} />
                    )}
                    <div class="oneDestination">
                        <div class="text">
                            <h3>... i wiele więcej</h3>
                            <p>Sprawdź wszystkie dostępne destynacje w sezonie 2020/2021.</p>
                            <button class="destinationButton btn">Sprawdź</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationWrapper






