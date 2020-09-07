
import React from 'react';
import './Menu.scss';

function Menu() {
    return (
        <div id="menuContainer">
            <div class="hamburger">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
            <ul class="nav-items">
                <li class="nav-item">Nasze wyjazdy</li>
                <li class="nav-item">Okres specjalny</li>
                <li class="nav-item">Promocje</li>
                <li class="nav-item">Dlaczego My?</li>
                <li class="nav-item">O nas</li>
                <li class="nav-item">FAQ</li>
                <li class="nav-item">Kontakt</li>
                <li class="nav-item">Zaloguj</li>
                <li class="nav-item">PL<i class="arrow down"></i></li>
            </ul>
        </div>
    );
}

export default Menu
