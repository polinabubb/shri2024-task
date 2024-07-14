import React from "react";
import {Link} from "react-router-dom";


export function Footer(){
    return (
        <footer className="footer">
            <ul className="footer__list">
                { ['Помощь', 'Обратная связь', 'Разработчикам', 'Условия использования'].map(text => {
                    return (
                        <li className="footer__item" key={text}>
                            <Link className="footer__link" to="/">{text}</Link>
                        </li>
                    );
                })}
            </ul>
            <div className="footer__copyright">
                © 1997–2023 ООО «Яндекс»
            </div>
        </footer>
    );
}

export default Footer;