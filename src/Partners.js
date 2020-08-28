
import React from 'react';
import './Partners.scss';

function Partners() {
    return (
        <div id="partnersContainer">
            <div class="partnersWrapper">
            <div class="onePartner">
                <div class="imageLogo">
                    <img src={require("./img/logoTBT.png")} alt="The Boat Trip"></img></div>
                    <div class="partnersInfo">
                <p>Wyjazdy letnie dla osób w wieku 18-39.</p>
                <a href="">Dowiedz się więcej<i class="arrow"></i></a>
                </div>
            </div>

            <div class="onePartner">
                <div class="imageLogo">
                    <img src={require("./img/logoBF.png")} alt="Boats and Friends"></img></div>
                    <div class="partnersInfo">
                <p>Wyjazdy na żagle dla osób powyżej 40 roku życia.</p>
                <a href="">Dowiedz się więcej<i class="arrow"></i></a>
                </div>
            </div>

            <div class="onePartner">
                <div class="imageLogo">
                    <img id="sf" src={require("./img/logoSF.png")} alt="Ski and Friends"></img></div>
                    <div class="partnersInfo">
                <p>Wyjazdy zimowe dla osób w wieku 40 lat i starszych.</p>
                <a href="">Dowiedz się więcej<i class="arrow"></i></a>
                </div>
            </div>
            <div class="onePartner">
                <div class="imageLogo">
                    <img src={require("./img/logoOFC.png")} alt="OffCourse"></img></div>
                    <div class="partnersInfo">
                <p>Nasza mara modowa dla ludzi aktywnych.</p>
                <a href="">Dowiedz się więcej<i class="arrow"></i></a>
                </div>
            </div>
            </div>

        </div>
    );
}

export default Partners
