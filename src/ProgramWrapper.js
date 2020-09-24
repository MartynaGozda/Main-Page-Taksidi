
import React from 'react';
import './ProgramWrapper.scss';
import Carousel from "./Carousel.js"                 

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
