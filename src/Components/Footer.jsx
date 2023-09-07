import React from "react";
import {Link} from "react-router-dom";

export default function Footer() {

    return (

        <footer className="container">
            <div id="footer" className="footer">
                <div className="footer_div">
                    <div className="footer_d_menu">
                        <div className="f_d_m_item">
                            <Link to="/bonus/">Бонусная программа</Link>
                        </div>
                        <div className="f_d_m_item">
                            <Link to="/partner/">Партнерская программа</Link>
                        </div>
                        <div className="f_d_m_item">
                            <Link to="/rules/">Условия обмена</Link>
                        </div>
                        <div className="f_d_m_item"><span>info@coinschest.io</span></div>
                    </div>
                    <div className="footer_d_label">
                        <p>Автоматический криптовалютный обменник © 2023</p>
                    </div>
                </div>
            </div>
        </footer>

    )

}