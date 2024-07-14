import React from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";

export function Header(){
    let [expanded, setExpanded] = useState(false);
    let [toggled, setToggled] = useState(false);

    const onClick = () => {
        if (!toggled) {
            setToggled(true);
        }

        setExpanded(!expanded);
    };
    return (
        <header className="header">
            <Link to="/" className="header__logo" aria-label="Яндекс.Дом" rel="preload"></Link>
            <button className="header__menu" aria-expanded={expanded ? 'true' : 'false'} onClick={onClick} rel="preload"
            >
                <span className="header__menu-text a11y-hidden">
                    {expanded ? 'Закрыть меню' : 'Открыть меню'}
                </span>
            </button>
            <ul className={'header__links' + (expanded ? ' header__links_opened' : '') + (toggled ? ' header__links-toggled' : '')}>
                <li className="header__item">
                    <Link className="header__link header__link_current" to="/" aria-current="page">Сводка</Link>
                </li>
                <li className="header__item">
                    <Link className="header__link" to="/devices">Устройства</Link>
                </li>
                <li className="header__item">
                    <Link className="header__link" to="/scripts">Сценарии</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;