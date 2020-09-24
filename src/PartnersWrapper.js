
import React from 'react';
import './PartnersWrapper.scss';
import Partner from "./Partner.js";

var PartnersArr = [
    {
        index: 1,
        image: './img/logoTBT.png',
        info: 'Wyjazdy letnie dla osób w wieku 18-39.',
        page: 'https://www.theboattrip.eu'
    },

    {
        index: 2,
        image: './img/logoBF.png',
        info: 'Wyjazdy na żagle dla osób powyżej 40 roku życia.',
        page: 'https://www.boatsandfriends.eu'
    },

    {
        index: 3,
        image: './img/logoSF.png',
        info: 'Wyjazdy zimowe dla osób w wieku 40 lat i starszych.',
        page: 'https://www.skiandfriends.pl'
    },

    {
        index: 4,
        image: './img/logoOFC.png',
        info: 'Nasza mara modowa dla ludzi aktywnych.',
        page: 'https://offcoursewear.pl'
    }


];

function PartnersWrapper() {
    return (
        <div id="partnersContainer">
            <div class="partnersWrapper">
                <Partner singlePartner={PartnersArr[0]} />
                <Partner singlePartner={PartnersArr[1]} />
                <Partner singlePartner={PartnersArr[2]} />
                <Partner singlePartner={PartnersArr[3]} />
            </div>
        </div>
    );
}

export default PartnersWrapper
