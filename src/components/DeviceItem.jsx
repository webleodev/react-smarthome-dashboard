import React from 'react';

function DeviceItem({state, icon, id, name}) {
    const [checkedCheckbox, setCheckedCheckbox] = React.useState(state);

    const toggleCheckbox = () => {
        setCheckedCheckbox(!checkedCheckbox);
    };

    return (
        <div className={`device__item list ${checkedCheckbox === true ? 'switched' : ''}`}>
            <div className="device__top">
                <h1 className="switch__value">{`${checkedCheckbox === true ? 'on' : 'off'}`}</h1>

                <input className="switch__checkbox" type="checkbox" name="switch__checkbox" id={`checkbox-refridgerator${id}`} onChange={toggleCheckbox} />

                <label htmlFor={`checkbox-refridgerator${id}`}>
                    <div className={`switch ${checkedCheckbox === true ? 'switched' : ''}`}>
                        <div className="dot"></div>
                    </div>
                </label>
            </div>

            <img src={icon} alt="refrigerator icon" className="device__icon" />

            <div className="device__name">{name}</div>
        </div>
    );
};

export default DeviceItem;