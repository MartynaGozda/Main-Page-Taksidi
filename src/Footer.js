
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
                        <p><a href="">Przeglądaj wyjazdy</a></p>
                        <p><a href="">Okres specjalny</a></p>
                        <p><a href="">Kraj</a></p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>Okres specjalny</h5>
                        <p><a href="">Majówka</a></p>
                        <p><a href="">Boże Ciało</a></p>
                        <p><a href="">Sylwester</a></p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>Promocje</h5>
                        <p><a href="">Zniżki</a></p>
                        <p><a href="">Promocje</a></p>
                        <p><a href="">Partner</a></p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>Dlaczego My</h5>
                        <p><a href="">Wyjazdy dla każdego</a></p>
                        <p><a href="">Najlepsze wyjazdy</a></p>
                        <p><a href="">Najlepsze apartamenty</a></p>
                        <p><a href="">Najlepsze atrakcje</a></p>
                        <p><a href="">Najlepsze wspomnienia</a></p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>O nas</h5>
                        <p><a href="">O firmie</a></p>
                        <p><a href="">Nasi ludzie</a></p>
                        <p><a href="">Pracuj z Nami</a></p>
                        <p><a href="">Formalnośći</a></p>
                    </div>
                    <div class="oneFooterBox">
                        <h5>Kontakt</h5>
                        <p><a href="">Skontaktuj się z nami</a></p>
                        <p><a href="">FAQ</a></p>
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
