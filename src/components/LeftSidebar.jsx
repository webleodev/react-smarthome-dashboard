import React from 'react';
import { Link } from 'react-router-dom';

import { displayIcon, lampIcon, logoutIcon, membersIcon, locationIcon, securityIcon } from '../assets/svg';

function LeftSidebar() {
    return (
        <section className="left__sidebar">
            <ul className="menu__sidebar" id="menu__sidebar">
                <Link to="/main">
                    <li className="sidebar__item active" id="display__item">
                        <img src={displayIcon} alt="display icon" />
                    </li>
                </Link>

                <Link to="/electricity">
                    <li className="sidebar__item" id="electricirt__item">
                        <img src={lampIcon} alt="lamp icon" />
                    </li>
                </Link>

                <Link to="/security">
                    <li className="sidebar__item" id="security__item">
                        <img src={securityIcon} alt="security icon" />
                    </li>
                </Link>

                <Link to="/location">
                    <li className="sidebar__item" id="location__item">
                        <img src={locationIcon} alt="placeholder icon" />
                    </li>
                </Link>

                <Link to="/members">
                    <li className="sidebar__item" id="members__item">
                        <img src={membersIcon} alt="members icon" />
                    </li>
                </Link>

                <li className="sidebar__item" id="logout__item">
                    <img src={logoutIcon} alt="logout icon" />
                </li>
            </ul>
        </section>
    );
};

export default LeftSidebar;