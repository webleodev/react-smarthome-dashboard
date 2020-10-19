import React from 'react';

import welcomeImage from '../assets/images/welcome.png';
import weatherIcon from '../assets/svg/weather.svg';
import termometerIcon from '../assets/svg/termometer.svg';
import aDropIcon from '../assets/svg/adrop.svg';
import refridgeratorIcon from '../assets/svg/refrigerator.svg';

function MainPage() {
    const [visiblePlaceList, setVisiblePlaceList] = React.useState(false);
    const [checkedCheckbox, setCheckedCheckbox] = React.useState(false);

    const toggleVisible = () => {
        setVisiblePlaceList(!visiblePlaceList);
    }

    const toggleCheckbox = () => {
        setCheckedCheckbox(!checkedCheckbox);
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

            <div className="temperature__block">
                <div className="temperature__header">
                    <img src={termometerIcon} alt="termometer icon" className="termometer__icon" />

                    <div className={`__select ${visiblePlaceList === true ? 'active' : ''}`} id="place__select" onClick={toggleVisible}>
                        <span className="__value" id="place__value">
                            Bedroom
                        </span>

                        {visiblePlaceList && (
                            <ul className="__list" id="place__list">
                                <li className="__item">Living Room</li>
                                <li className="__item">Kitchen</li>
                                <li className="__item">Bedroom</li>
                            </ul>
                        )}
                    </div>

                    <div className="counter" id="temperature__counter">
                        <span className="change__value" id="decrement__value">
                            -
                        </span>

                        <span className="__value" id="temperature__value">
                            +20&#8451;
                        </span>

                        <span className="change__value" id="increment__value">
                            +
                        </span>
                    </div>
                </div>

                <div className="temperature__body">
                    <div className="room" id="room--bedroom">
                        <div className="temperature__background"></div>
                    </div>
                </div>

                <div className="devices__block">
                    <div className={`device__item ${checkedCheckbox === true ? 'switched' : ''}`}>
                        <div className="device__top">
                            <h1 className="switch__value">{`${checkedCheckbox === true ? 'on' : 'off'}`}</h1>

                            <input className="switch__checkbox" type="checkbox" name="switch__checkbox" id="checkbox-refridgerator" onChange={toggleCheckbox} />

                            <label htmlFor="checkbox-refridgerator">
                                <div className={`switch ${checkedCheckbox === true ? 'switched' : ''}`}>
                                    <div className="dot"></div>
                                </div>
                            </label>
                        </div>

                        <img src={refridgeratorIcon} alt="refrigerator icon" className="device__icon" />

                        <div className="device__name">Refridgerator</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPage;