
import React from 'react';
import './Contact.scss';

function Contact() {
    return (
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
            </div>
            <div class="contactForm">
                <form>
                    <label>Twój adres e-mail</label>
                    <input type="email" placeholder="Twój adres e-mail"></input>
                    <label>Treść wiadomości</label>
                    <textarea placeholder="W czym możemy Ci pomóc?" rows="8" cols="50"></textarea>
                </form>
            </div>


        </div>
    );
}

export default Contact
