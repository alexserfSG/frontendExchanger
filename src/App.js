import './css/reset.css';
import './css/base.css';
import './css/App.css';
import './css/media.css';
import './css/fonts/PT_Root/stylesheet.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import React from "react";
import {BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import Bonus from "./Components/PagesExternal/Bonus";
import Main from "./Components/PagesExternal/MainPage/Main";
import NotFound from "./Components/PagesExternal/NotFound";
import Partner from "./Components/PagesExternal/Partner";
import Rules from "./Components/PagesExternal/Rules";
import {Sign} from "./Components/PagesExternal/SignPage/Sign";
import UserAccount from "./Components/User/UserAccount";
import {useSelector} from "react-redux";
import getCookie from "./Components/customHooks/getCookie";
import {ACCESS_TOKEN} from "./Components/User/const";
import UserLogout from "./Components/User/UserLogout";


function App() {
    //const [logIn, setLogIn] = React.useState(!!(localStorage.getItem('userEmail') && getCookie(ACCESS_TOKEN)));
    //const { accessToken , userId} = useSelector(state => state.user);
    // const accessToken = useSelector(state => state.user.accessToken);
    // const userId = useSelector(state => state);
    // console.log(accessToken + ' - ' + userId);
    // console.log(userId);

    // React.useEffect(() => {
    //     if (localStorage.getItem('userEmail') && getCookie(ACCESS_TOKEN)) setLogIn(true);
    // }, [logIn]);
    //
    // console.log(logIn);
    // console.log(localStorage.getItem('userEmail'));
    // console.log(getCookie(ACCESS_TOKEN));

  return (
    <div className="App">
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route path="/" element={<Main />} />
                        <Route path="/bonus/" element={<Bonus />} />
                        <Route path="/partner/" element={<Partner />} />
                        <Route path="/rules/" element={<Rules />} />
                        <Route path="/sign/" element={<Sign />} />

                        <Route path="/account/" element={ localStorage.getItem('userEmail') && getCookie(ACCESS_TOKEN) ? (<UserAccount />) : (<Navigate to="/" replace={true} />) } />

                        <Route path="/logout/" element={<UserLogout />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
    </div>
  );
}

export default App;
