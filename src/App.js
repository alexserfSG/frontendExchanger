import './css/reset.css';
import './css/base.css';
import './css/App.css';
import './css/media.css';
import './css/fonts/PT_Root/stylesheet.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Bonus from "./Components/PagesExternal/Bonus";
import Main from "./Components/PagesExternal/MainPage/Main";
import NotFound from "./Components/PagesExternal/NotFound";
import Partner from "./Components/PagesExternal/Partner";
import Rules from "./Components/PagesExternal/Rules";
import {Sign} from "./Components/PagesExternal/SignPage/Sign";
import UserAccount from "./Components/User/PagesInternal/UserAccount";



function App() {
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
                        <Route path="/account/" element={<UserAccount />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
    </div>
  );
}

export default App;
