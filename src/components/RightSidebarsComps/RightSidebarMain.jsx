import React from 'react';
import { Link } from 'react-router-dom';

import gotoIcon from '../../assets/svg/goto.svg';
import Select from '../Select';

function RightSidebarMain() {
    return (
        <section className="right__sidebar">
            <div className="sidebar__wrapper">
                <div className="devices">
                    <div className="devices__header">
                        <h1 className="devices__title">My devices</h1>

                        <Select classes={'small toright'} list={['on', 'off']} />

                        <Link to="/devices">
                            <button className="__button _primary _right">
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

export default RightSidebarMain;