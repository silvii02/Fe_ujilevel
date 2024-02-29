import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import DaftarPage from "./pages/DaftarPage";
import PaymentPage from "./pages/PaymentPage";
import NotificationPage from "./pages/NotificationPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import Menu1Page from "./pages/Menu1Page";
import CartPage from "./pages/CartPage";

// header dan footer
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

function App(){
  return(
    <div>
    <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/Menu" Component={MenuPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/Daftar" Component={DaftarPage} />
        <Route path="/Payment" Component={PaymentPage} />
        <Route path="/Notification" Component={NotificationPage} />
        <Route path="/Login" Component={LoginPage} />
        <Route path="/User" Component={UserPage} />
        <Route path="/Menu1" Component={Menu1Page} />
        <Route path="/CartPage" Component={CartPage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App