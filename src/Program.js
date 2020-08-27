
import React from 'react';
import './Program.scss';

function Program() {
    return (
        <div id="programContainer">
            <div class="programBox">
                <div class="overlayImage"></div>
                <h2>Rób to, czego pragniesz</h2>
                <div class="programBoxes">
                <div class="oneprogramBox">
                        <i class="fas fa-glass-cheers"></i>
                        <h4>Party</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. </p>
                <button class="btn">Imprezuj</button>
                    </div>
                    <div class="oneprogramBox">
                    <i class="fas fa-globe-europe"></i>
                        <h4>Explore</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. </p>
                <button class="btn">Zwiedzaj</button>
                    </div>
               
                    <div class="oneprogramBox">
                    <i class="fas fa-music"></i>
                        <h4>Festival</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. </p>
                <button class="btn">Baw się</button>
                    </div>
                    <div class="oneprogramBox">
                    <i class="fas fa-users"></i>
                        <h4>Family</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. </p>
                <button class="btn">Bądź z rodziną</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Program
