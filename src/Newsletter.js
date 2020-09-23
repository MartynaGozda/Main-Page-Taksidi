
import React from 'react';
import './Newsletter.scss';

function Newsletter() {
    return (
        <div id="newsLetterContainer">
            <div class="newsLetterWrapper">
                <div className="newsLetterTitle">
                    <h1>Bądź na bieżąco</h1>
                    <p>Zapisz się do naszego newslettera, nie będziemy wysyłać Ci spamu. Zapisz się do naszego newslettera, nie będziemy wysyłać Ci spamu.</p>
                </div>
                <div class="form">
                    <div class="newsLetterBox">
                        <input type="email" placeholder="Twój adres email"></input><div class="btnBox"><button type="submit" class="btn">Zapisz się</button></div>
                    </div>
                    <div class="agree">
                        <input type="checkbox" value="checkbox"></input>
                        <label for="checkbox">Wyrażam zgodę. Zapisz się do naszego newslettera. Zapisz się do naszego newslettera</label>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Newsletter
