
import React from 'react';
import './Menu.scss';
// import Hamburger from './Hamburger.js';
import './Hamburger.scss';
import $ from 'jquery';

class Menu extends React.Component {
    componentDidMount() {
        $(".menu-collapsed").click(function () {
            $(this).toggleClass("menu-expanded");
        });
    }




    render() {
        return (

            <>
                <div class="menu-collapsed">
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
            </>
        );
    }
}

export default Menu
