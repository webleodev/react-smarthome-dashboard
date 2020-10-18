import React from 'react';

import welcomeImage from '../assets/images/welcome.png';
import weatherIcon from '../assets/svg/weather.svg';
import termometerIcon from '../assets/svg/termometer.svg';
import aDropIcon from '../assets/svg/adrop.svg';

function MainPage() {
    const [visiblePlaceList, setVisiblePlaceList] = React.useState(false);

    const toggleVisible = () => {
        setVisiblePlaceList(!visiblePlaceList);
    }

    return (
        <section className="main__page">
            <div className="welcome__block">
                <div className="welcome__wrapper" id="welcome__wrapper">
                    <h1 className="welcome__message" id="welcome__message">
                        Welcome, Albert!
                    </h1>

                    <h2 className="weather__message" id="weather__message">
                        Welcome Home! SmartHome's Weather System telling that today weather is good!
                    </h2>

                    <div className="weather__block" id="weather_block">
                        <span className="temperature__information" id="temperature__information">
                            +20&#8451;
                        </span>

                        <span className="weather__icon" id="weather__icon">
                            <img src={weatherIcon} alt="weather icon" />
                        </span>
                    </div>
                </div>

                <img className="welcome__picture" id="welcome__picture" src={welcomeImage} alt="welcome pic" />
            </div>

            <div className="indicators__block" id="devices__block">
                <div className="information__block" id="humidity">
                    <img src={aDropIcon} alt="humidity icon" className="information__img" id="humidity__icon" />

                    <span className="information__value" id="humidity__value">
                        35%
                    </span>
                </div>

                <div className="information__block" id="temperature">
                    <img src={termometerIcon} alt="temperature icon" className="information__img" id="termometer__icon" />

                    <span className="information__value" id="temperature__value">
                        +20&#8451;
                    </span>
                </div>

                <div className={`place__select ${visiblePlaceList === true ? 'active' : ''}`} id="place__select" onClick={toggleVisible}>
                    <span className="place__value" id="place__value">
                        Bedroom
                    </span>

                    {visiblePlaceList && (
                        <ul className="place__list" id="place__list">
                            <li className="place__item">Living Room</li>
                            <li className="place__item">Kitchen</li>
                            <li className="place__item">Bedroom</li>
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MainPage;