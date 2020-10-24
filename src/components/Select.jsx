import React from 'react';

function Select({ classes, list }) {
    const [visibleSelect, setVisibleSelect] = React.useState(false);

    const toggleVisibleSelect = () => {
        setVisibleSelect(!visibleSelect);
    };

    const handleOutsideClick = (event) => {
        if (!event.path.includes(selectRef.current)) {
            setVisibleSelect(false);
        };
    };

    const handleValueClick = (event) => {
        const value = event.target.textContent;
        console.log(value);
    }

    const selectRef = React.useRef(),
        selectValueRef = React.useRef();
    
    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    });

    return (
        <div
            className={`__select ${classes} ${visibleSelect === true ? 'active' : ''}`}
            id="devices__toggle"
            onClick={toggleVisibleSelect}
            ref={selectRef}>

            <span className="__value" id="select__value" ref={selectValueRef}>on</span>

            {visibleSelect && (
                <ul className="__list" id="select-change__value">
                    {list.map((value, index) => <li key={value + index} className="__item" onClick={handleValueClick}>{value}</li>)}
                </ul>
            )}
        </div>
    );
};

export default Select;