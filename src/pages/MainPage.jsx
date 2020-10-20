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
                    <div className={`__select medium ${visiblePlaceList === true ? 'active' : ''}`} id="place__select" onClick={toggleVisible}>
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

                    <div className="__counter" id="temperature__counter">
                        <img src={termometerIcon} alt="termometer icon" className="__icon" />

                        <button className="__button _primary _left" id="decrement__value">
                            -
                        </button>

                        <span className="__value" id="temperature__value">
                            +20&#8451;
                        </span>

                        <button className="__button _primary _right" id="increment__value">
                            +
                        </button>
                    </div>

                    <div className="__counter" id="humidity__counter">
                        <img src={aDropIcon} alt="a drop icon" className="__icon" />

                        <span className="__value" id="humidity__value">
                            35%
                        </span>

                        <button className="__button _secondary _right" id="humidity-add__value">
                            add
                        </button>
                    </div>
                </div>

                <div className="devices">
                    <div className="devices__body inline">
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
            </div>
        </section>
    );
};

export default MainPage;