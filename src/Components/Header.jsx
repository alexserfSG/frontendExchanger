import Logo from 'images/logo.svg';
import BonusIcon from 'images/bonus_icon.svg';
import FavoriteIcon from 'images/favorite_icon.svg';
import HistoryIcon from 'images/history_icon.svg';
import CardIcon from 'images/card_icon.svg';
import LoginIcon from 'images/login_icon.svg';
import ClientIcon from 'images/client.svg';
import ArrowIcon from 'images/select_arrow.svg';

import React from 'react';
import {Link} from "react-router-dom";
import $ from 'jquery';
import {useDispatch} from "react-redux";
import {pageLogin} from "../redux/slices/signSlice";
import UserMenu from "./User/UserMenu";
import getCookie from "./customHooks/getCookie";
import {ACCESS_TOKEN} from "./User/const";


export default function Header() {
    const projectName = "Coinschest";
    const [openSandwich, setOpenSandwich] = React.useState(false);
    const [isClient, setIsClient] = React.useState(!!(localStorage.getItem('userEmail') && getCookie(ACCESS_TOKEN)));
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (localStorage.getItem('userEmail') && getCookie(ACCESS_TOKEN)) setIsClient(true);
    }, [isClient]);

    React.useEffect(() => {
        if (openSandwich) {
            $('body').addClass('scr_none');
            $('.footer').addClass('menu_open');
        } else {
            $('body').removeClass('scr_none');
            $('.footer').removeClass('menu_open');
        }
    }, [ openSandwich ]);

    const clickClientMob = () => {
        $('#client-mobmenu').toggleClass('none');
    }

    return (<>
        <header className="header">

            <div className="container">

                <div className={`header-row ${ openSandwich ? 'open' : ''}`}>

                    <div className="header-logo">
                        <Link to="/" title={projectName}>
                            <div className="header-logo-img">
                                <img src={Logo} alt="Logo" />
                            </div>
                            <div className="header-logo-text">{projectName}</div>
                        </Link>
                    </div>

                    <div
                        className={`sandwich ${ openSandwich ? 'active' : ''}`}
                        onClick={() => setOpenSandwich(!openSandwich)}
                    ><span/></div>

                    <div className={`header-nav-mob ${ openSandwich ? '' : 'none'}`}>

                        <div className="h-n-m-row">

                            <div className="nav-bonus">
                                <Link to="/bonus/" title="Бонусы">
                                    <div className="h-n-m-row-img">
                                        <img src={BonusIcon} alt="Bonus icon" />
                                    </div>
                                    <div className="nav-bonus-text">Бонусы</div>
                                </Link>
                            </div>

                            <div className="nav-favorite">
                                <Link to="/sign/" title="Шаблоны обменов">
                                    <div className="h-n-m-row-img">
                                        <img src={FavoriteIcon} alt="Favorite icon" />
                                    </div>
                                    <div className="nav-favorite-text">Шаблоны</div>
                                </Link>
                            </div>

                        </div>

                        <div className="h-n-m-row">

                            <div className="nav-history">
                                <Link to="/sign/" title="История операций">
                                    <div className="h-n-m-row-img">
                                        <img src={HistoryIcon} alt="History icon" />
                                    </div>
                                    <div className="nav-bonus-text">История</div>
                                </Link>
                            </div>

                            <div className="nav-bcards">
                                <Link to="/sign/" title="Банковские карты">
                                    <div className="h-n-m-row-img">
                                        <img src={CardIcon} alt="Card icon" />
                                    </div>
                                    <div className="nav-bonus-text">Карты</div>
                                </Link>
                            </div>

                        </div>

                        <div className="h-n-m-row">

                            {
                                isClient ? (
                                    <div
                                        id="nav-client-mob"
                                        className="nav-client"
                                        onClick={clickClientMob}
                                    >
                                        <div className="nav-client-div">
                                            <img className="nav-client-icon" src={ClientIcon} alt="Client" />
                                            <img src={ArrowIcon} alt="Menu" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="nav-login" onClick={() => dispatch(pageLogin())}>
                                        <a href="/sign/" title="Вход в личный кабинет">
                                            <div className="h-n-m-row-img">
                                                <img src={LoginIcon} alt="Login icon" />
                                            </div>
                                            <div className="nav-bonus-text">Войти</div>
                                        </a>
                                    </div>
                                )
                            }

                        </div>

                        <div id="client-mobmenu" className="client-menu none">
                            <p>Helpers_Menu::getUserMenu() </p>
                        </div>

                    </div>

                    <div className="header-nav">

                        <div className="nav-bonus">
                            <Link to="/bonus/" title="Бонусы">
                                <div className="nav-bonus-img">
                                    <img src={BonusIcon} alt="Bonus icon" />
                                </div>
                                <div className="nav-bonus-text">Бонусы</div>
                            </Link>
                        </div>

                        <div className="nav-favorite">
                            <Link to="/sign/" title="Шаблоны обменов">
                                <div className="nav-favorite-img">
                                    <img src={FavoriteIcon} alt="Favorite icon" />
                                </div>
                                <div className="nav-favorite-text">Шаблоны</div>
                            </Link>
                        </div>

                        <div className="nav-history">
                            <Link to="/sign/" title="История операций">
                                <div className="nav-bonus-img">
                                    <img src={HistoryIcon} alt="Bonus icon" />
                                </div>
                                <div className="nav-bonus-text">История</div>
                            </Link>
                        </div>

                        <div className="nav-bcards">
                            <Link to="/sign/" title="Банковские карты">
                                <div className="nav-bonus-img">
                                    <img src={CardIcon} alt="Bonus icon" />
                                </div>
                                <div className="nav-bonus-text">Карты</div>
                            </Link>
                        </div>

                        {
                            isClient ? (<>
                                <div id="nav-client" className="nav-client">
                                    <div className="nav-client-div">
                                        <img className="nav-client-icon" src={ClientIcon} alt="Client" />
                                        <img src={ArrowIcon} alt="Menu" />
                                    </div>
                                </div>

                                <div id="client-menu" className="client-menu none">
                                    <UserMenu />
                                </div>
                            </>) : (
                                <div className="nav-login" onClick={() => dispatch(pageLogin())}>
                                    <Link to="/sign/" title="Вход в личный кабинет">
                                        <div className="nav-bonus-img">
                                        <img src={LoginIcon} alt="Bonus icon"/>
                                        </div>
                                        <div className="nav-bonus-text">Войти</div>
                                    </Link>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </header>
    </>);

}




