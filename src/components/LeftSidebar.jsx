import React from 'react';
import { Link } from 'react-router-dom';

import DisplayIcon from '../assets/svg/display.svg';
import LampIcon from '../assets/svg/lamp.svg';
import LogoutIcon from '../assets/svg/logout.svg';
import MembersIcon from '../assets/svg/members.svg';
import PlaceholderIcon from '../assets/svg/placeholder.svg';
import SecurityIcon from '../assets/svg/security.svg';

function LeftSidebar() {
    return (
        <section className="left__sidebar">
            <ul className="menu__sidebar" id="menu__sidebar">
                <Link to="/main">
                    <li className="sidebar__item active" id="display__item">
                        <img src={DisplayIcon} alt="display icon" />
                    </li>
                </Link>

                <Link to="/electricity">
                    <li className="sidebar__item" id="electricirt__item">
                        <img src={LampIcon} alt="lamp icon" />
                    </li>
                </Link>

                <Link to="/security">
                    <li className="sidebar__item" id="security__item">
                        <img src={SecurityIcon} alt="security icon" />
                    </li>
                </Link>

                <Link to="/location">
                    <li className="sidebar__item" id="location__item">
                        <img src={PlaceholderIcon} alt="placeholder icon" />
                    </li>
                </Link>

                <Link to="/members">
                    <li className="sidebar__item" id="members__item">
                        <img src={MembersIcon} alt="members icon" />
                    </li>
                </Link>

                <li className="sidebar__item" id="logout__item">
                    <img src={LogoutIcon} alt="logout icon" />
                </li>
            </ul>
        </section>
    );
};

export default LeftSidebar;