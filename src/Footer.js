
import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <div id="footerContainer">
            <div class="footerMenu">
                <div class="top">
                    <div class="imageLogo" ><img src={require('./img/logo-taksidi.png')} alt='logo' /></div>
                    <div class="socialMediaContainer">
                        <p>Śledź Nas!</p>
                        <div class="icons">
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="oneFooterBox">
                        <h5>Nasze Wyjazdy</h5>
                        <p>Przeglądaj wyjazdy</p>
                        <p>Ores specjalny</p>
                        <p>Kraj</p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>Okres specjalny</h5>
                        <p>Majówka</p>
                        <p>Boże Ciało</p>
                        <p>Sylwester</p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>Promocje</h5>
                        <p>Zniżki</p>
                        <p>Promocje</p>
                        <p>Partner</p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>Dlaczego My</h5>
                        <p>Wyjazdy dla każdego</p>
                        <p>Najlepsze wyjazdy</p>
                        <p>Najlepsze apartamenty</p>
                        <p>Najlepsze atrakcje</p>
                        <p>Najlepsze wspomnienia</p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>O nas</h5>
                        <p>O firmie</p>
                        <p>Nasi ludzie</p>
                        <p>Pracuj z Nami</p>
                        <p>Formalnośći</p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>Kontakt</h5>
                        <p>Skontaktuj się z nami</p>
                        <p>FAQ</p>
                    </div>
                </div>
            </div>
            <div class="footerContact">
                <div class="container">
                    <div class="wrapper">
                        <div class="oneContactBox">
                            <h5>Dane Firmy</h5>
                            <p>Taksidi Sp. z o.o.</p>
                            <p>ul. Armii Krajowej 3</p>
                            <p>05-530 Góra Kalwaria</p>
                            <p>NIP 123 122 14 63</p>
                        </div>
                        <div class="oneContactBox">
                            <h5>Dane kontaktowe</h5>
                            <p>Taksidi Sp. z o.o.</p>
                            <p>ul. Armii Krajowej 3</p>
                            <p>05-530 Góra Kalwaria</p>
                            <p>NIP 123 122 14 63</p>
                        </div>
                        <div class="oneContactBox">
                            <h5>Licencja</h5>
                            <p>Numer licencji organizatora turystyki 1163</p>
                        </div>
                    </div>
                </div>
                <div class="footerBottom">
                    <div class="text">
                        <p>Regulamin strony</p>
                        <p>Polityka Prywatnosci</p>
                        <p>© 2020 Copyright Taksidi. Wykonanie: Kerris Group</p>
                    </div>
                    <div class="logo"><img src={require("./img/fundusze.jpg")} alt="" /></div>
                </div>
            </div>
        </div>
    );
}

export default Footer
