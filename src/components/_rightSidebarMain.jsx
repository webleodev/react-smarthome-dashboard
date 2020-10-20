import React from 'react';
import { Link } from 'react-router-dom';

import gotoIcon from '../assets/svg/goto.svg';

function _rightSidebarMain() {
    const [visibleDevicesSelect, setVisibleDevicesSelect] = React.useState(false);

    const toggleVisibleDevicesSelect = () => {
        setVisibleDevicesSelect(!visibleDevicesSelect);
    };

    return (
        <section className="right__sidebar">
            <div className="sidebar__wrapper">
                <div className="devices">
                    <div className="devices__header">
                        <h1 className="devices__title">My devices</h1>

                        <div className="__select small toright upcase" id="devices__toggle" onClick={toggleVisibleDevicesSelect}>
                            <span className="__value" id="devices__value">on</span>

                            {visibleDevicesSelect && (
                                <ul className="__list" id="devices-change__value">
                                    <li className="__item">on</li>
                                    <li className="__item">off</li>
                                </ul>
                            )}
                        </div>

                        <Link to="/devices">
                            <button className="__button _primary">
                                <img className="__icon" src={gotoIcon} alt="go to icon" />
                            </button>
                        </Link>
                    </div>

                    <div className="devices__body block">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default _rightSidebarMain;