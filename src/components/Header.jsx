import React from 'react';

import userImage from '../assets/images/userPhotos/userPhoto5.png';
import settingsIcon from '../assets/svg/settings.svg';
import notificationsIcon from '../assets/svg/notifications.svg';
import searchIcon from '../assets/svg/search.svg';

function Header() {
    const [visibleNotifications, setVisibleNotifications] = React.useState(false);
    const [visibleUserMenu, setVisibleUserMenu] = React.useState(false);

    const notificationIconRef = React.useRef();
    const notificationBlockRef = React.useRef();
    const userPhotoRef = React.useRef();

    const toggleVisibleNotifications = () => {
        setVisibleNotifications(!visibleNotifications);
    };

    const toggleVisibleUserMenu = () => {
        setVisibleUserMenu(!visibleUserMenu);
    }

    const handleNotificationsClick = (event) => {
        if (event.path.includes(notificationBlockRef.current) ||
            !event.path.includes(notificationIconRef)) {
            setVisibleNotifications(false);
        };
    };

    React.useEffect(() => { document.body.addEventListener('click', handleNotificationsClick) }, []);

    return (
        <header>
            <div className="header__wrapper">
                <h1 className="header__logo" id="header__logo">
                    <span className="normal">S</span>
                    <span className="bold">H</span>
                </h1>

                <div className="search__block">
                    <input className="search__input" type="search" name="search" id="search__input" placeholder="Search" autoComplete="off" />

                    <button className="search__button" id="search__button">
                        <img src={searchIcon} alt="search icon"/>
                    </button>
                </div>

                <button className="button" id="settings__button">
                    <img src={settingsIcon} alt="settings icon" />
                </button>

                <button className="button" id="notifications__button" onClick={toggleVisibleNotifications}>
                    <img src={notificationsIcon} alt="notification icon" />

                    {visibleNotifications && (
                        <div className="notifications__block" id="notifications__block" ref={notificationBlockRef}>
                            <ul className="notifications__list" id="notifications__list">
                                <li className="notification__item">SmartHome's system have been successfully updated!</li>
                                <li className="notification__item">4 users have been successfully added to your SmartHome's system!</li>
                            </ul>
                        </div>
                    )}
                </button>

                <div className="user__block" onClick={toggleVisibleUserMenu}>
                    <img src={userImage} alt="user pic" className="header__img" id="header__img" ref={userPhotoRef} />

                    <div className="user__info">
                        <span id="name">Albert</span>
                        <span id="surname">Shamsutdinov</span>
                    </div>

                    {visibleUserMenu && (
                        <div className="user__menu" id="user__menu">
                            <ul className="user__list" id="user__list">
                                <li className="user__item">Menu item</li>
                                <li className="user__item">Menu item</li>
                                <li className="user__item">Menu item</li>
                                <li className="user__item">Menu item</li>
                                <li className="user__item">Menu item</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
