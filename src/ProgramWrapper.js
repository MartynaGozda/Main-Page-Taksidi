
import React from 'react';
import './ProgramWrapper.scss';
import Program from "./Program.js";
import Carousel from "./Carousel.js"

var ProgramArr = [
    {
        index: 1,
        icon: 'fas fa-glass-cheers',
        program: "Party",
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        btn: 'Imprezuj'
    },

    {
        index: 2,
        icon: 'fas fa-globe-europe',
        program: "Explore",
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        btn: 'Zwiedzaj'
    },


    {
        index: 3,
        icon: 'fas fa-music',
        program: "Festiwal",
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        btn: 'Baw się'
    },


    {
        index: 4,
        icon: 'fas fa-users',
        program: "Family",
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        btn: 'Bądź z rodziną'
    },

];
                 

function ProgramWrapper() {
    return (
        <div id="programContainer">
            <div class="programBox">
                <div class="overlayImage"></div>
                <h2>Rób to, czego pragniesz</h2>
                <div class="programBoxes">
                <Carousel />
                </div>
            </div>
            
        </div>
    );
}

export default ProgramWrapper
