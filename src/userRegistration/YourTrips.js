
import React from 'react';
import './YourTrips.scss';


class YourTrips extends React.Component {
    render() {
        return (
            <div id="yourTrips">
                <div className="sideBar">
                    <ul>
                        <li>Twoje wyjazdy</li>
                        <li>Wiadomości</li>
                        <li>Twoje vouchery</li>
                        <li>Panel ambasadora</li>
                        <li>Twoje dane</li>
                        <li>Zmiana hasła</li>
                        <li>Wyloguj się</li>
                    </ul>
                </div>
                <div classNme="accountSection"></div>
            </div>

        );
    }
}

export default YourTrips
