
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
                            <li><a href="#contactContainer">Nasze wyjazdy</a></li>
                            <li><a href="#contactContainer">Okres specjalny</a></li>
                            <li><a href="#contactContainer">Promocje</a></li>
                            <li><a href="#contactContainer">Dlaczego My?</a></li>
                            <li><a href="#contactContainer">O nas</a></li>
                            <li><a href="#contactContainer">FAQ</a></li>
                            <li><a href="#contactContainer">Kontakt</a></li>
                            <li><a href="#contactContainer">Zaloguj</a></li>
                        </ul>
                    </nav>
                </div>
                <div id="menuContainer">
                    <ul class="navItems">
                        <li class="navItem"><a href="#contactContainer">Nasze wyjazdy</a></li>
                        <li class="navItem"><a href="#contactContainer">Okres specjalny</a></li>
                        <li class="navItem"><a href="#contactContainer">Promocje</a></li>
                        <li class="navItem"><a href="#contactContainer">Dlaczego My?</a></li>
                        <li class="navItem"><a href="#contactContainer">O nas</a></li>
                        <li class="navItem"><a href="#contactContainer">FAQ</a></li>
                        <li class="navItem"><a href="#contactContainer">Kontakt</a></li>
                        <li class="navItem"><a href="#contactContainer">Zaloguj</a></li>
                        <li class="navItem"><a href="#contactContainer">PL<i class="arrow down"></i></a></li>
                    </ul>
                </div>
            </>
        );
    }
}

export default Menu
