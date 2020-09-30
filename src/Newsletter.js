
import React from 'react';
import './Newsletter.scss';

function Newsletter() {
    return (
        <div id="newsLetterContainer">
            <div class="newsLetterWrapper">
                <div className="newsLetterTitle">
                    <h1>Bądź na bieżąco</h1>
                    <p>Zapisz się do naszego newslettera, nie będziemy wysyłać Ci spamu. Bądź na bieżąco z naszą aktualną ofertą i promocjami.</p>
                </div>
                <div class="form">
                    <div class="newsLetterBox">
                    <form action="dodaj.php" method="POST">
                        <input type="email" placeholder="Twój adres email"></input><div class="btnBox"><button type="submit" class="btn">Zapisz się</button></div></form>
                    </div>
                    <div class="agree">
                        <input type="checkbox" value="checkbox"></input>
                        <label for="checkbox">Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w zgłoszeniu.</label>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Newsletter
