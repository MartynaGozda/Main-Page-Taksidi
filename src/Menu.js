
import React from 'react';
import './Menu.scss';

function Menu() {
    return (
    <div id="menuContainer">
        <ul class="menuList">
            <li class="menuItems">Nasze wyjazdy</li>
            <li class="menuItems">Okres specjalny</li>
            <li class="menuItems">Promocje</li>
            <li class="menuItems">Dlaczego My?</li>
            <li class="menuItems">O nas</li>
            <li class="menuItems">FAQ</li>
            <li class="menuItems">Kontakt</li>
            <li class="menuItems">Zaloguj</li>
            <li class="menuItems">PL<i class="arrow down"></i></li>
        </ul>
    </div>
    );
}

export default Menu
