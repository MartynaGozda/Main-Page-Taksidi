
import React from 'react';
import './Contact.scss';

function Contact() {
    return (
        <div class="contactContainer1" >
            <div id="contactContainer">
            <div class="contactBox">
                <h1>Masz pytania?</h1>
                <div class="contact">
                    <p>info@taksidi.pl</p>
                    <p>+48 530 033 292</p>
                </div>
                <div class="adress">
                    <p>ul. Wołodyjowskiego 40</p>
                    <p>02-697 Warszawa</p>
                </div>
                <div class="openingHours">
                    <p>Poniedziałek - piątek 10.00 - 15.00</p>
                </div>
                <button class="btn">Sprawdź FAQ</button>
            </div>
            <div class="contactForm">
                <form>
                    <label>Twój adres e-mail</label>
                    <input type="email" placeholder="Twój adres e-mail"></input>
                    <label>Treść wiadomości</label>
                    <textarea placeholder="W czym możemy Ci pomóc?" rows="8" cols="50"></textarea>
                    <button type="submit" class="btn">Wyślij wiadomość</button>
                </form>
            </div>
            </div>


        </div>
    );
}

export default Contact
