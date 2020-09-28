
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
                        <p><a href="#contactContainer">Przeglądaj wyjazdy</a></p>
                        <p><a href="#contactContainer">Okres specjalny</a></p>
                        <p><a href="#contactContainer">Kraj</a></p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>Okres specjalny</h5>
                        <p><a href="#contactContainer">Majówka</a></p>
                        <p><a href="#contactContainer">Boże Ciało</a></p>
                        <p><a href="#contactContainer">Sylwester</a></p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>Promocje</h5>
                        <p><a href="#contactContainer">Zniżki</a></p>
                        <p><a href="#contactContainer">Promocje</a></p>
                        <p><a href="#contactContainer">Partner</a></p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>Dlaczego My</h5>
                        <p><a href="#contactContainer">Wyjazdy dla każdego</a></p>
                        <p><a href="#contactContainer">Najlepsze wyjazdy</a></p>
                        <p><a href="#contactContainer">Najlepsze apartamenty</a></p>
                        <p><a href="#contactContainer">Najlepsze atrakcje</a></p>
                        <p><a href="#contactContainer">Najlepsze wspomnienia</a></p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>O nas</h5>
                        <p><a href="#contactContainer">O firmie</a></p>
                        <p><a href="#contactContainer">Nasi ludzie</a></p>
                        <p><a href="#contactContainer">Pracuj z Nami</a></p>
                        <p><a href="#contactContainer">Formalnośći</a></p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>Kontakt</h5>
                        <p><a href="#contactContainer">Skontaktuj się z nami</a></p>
                        <p><a href="#contactContainer">FAQ</a></p>
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
                        <p class="copyRight">© 2020 Copyright Taksidi. Wykonanie: Kerris Group</p>
                    </div>
                    <div class="logo"><img src={require("./img/fundusze.jpg")} alt="" /></div>
                    <p class="copyRight2">© 2020 Copyright Taksidi. Wykonanie: Kerris Group</p>
                </div>
            </div>
        </div>
    );
}

export default Footer
