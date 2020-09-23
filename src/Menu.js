
import React from 'react';
import './Menu.scss';
import './Hamburger.scss';
import $ from 'jquery';

class Menu extends React.Component {
    componentDidMount() {
        $(".menuCollapsed").click(function () {
            $(this).toggleClass("menuExpanded");
        });
    }

    render() {
        return (
            <>
                <div class="menuCollapsed">
                    <div class="bar"></div>
                    <nav>
                        <ul>
                            <li><a href="#">Nasze wyjazdy</a></li>
                            <li><a href="#">Okres specjalny</a></li>
                            <li><a href="#">Promocje</a></li>
                            <li><a href="#">Dlaczego My?</a></li>
                            <li><a href="#">O nas</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Kontakt</a></li>
                            <li><a href="#">Zaloguj</a></li>
                        </ul>
                    </nav>
                </div>
                <div id="menuContainer">
                    <ul class="navItems">
                        <li class="navItem">Nasze wyjazdy</li>
                        <li class="navItem">Okres specjalny</li>
                        <li class="navItem">Promocje</li>
                        <li class="navItem">Dlaczego My?</li>
                        <li class="navItem">O nas</li>
                        <li class="navItem">FAQ</li>
                        <li class="navItem">Kontakt</li>
                        <li class="navItem">Zaloguj</li>
                        <li class="navItem">PL<i class="arrow down"></i></li>
                    </ul>
                </div>
            </>
        );
    }
}

export default Menu
