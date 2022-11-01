import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "../pages/Cart/Cart";
import { HomeScreen } from "../pages/HomeScreen/HomeScreen";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { Orders } from "../pages/Orders/Orders";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { SplashScreen } from "../pages/SplashScreen/SplashScreen";

const Router = () => {

    return(

        <BrowserRouter>
            <Routes>

                <Route index element={<SplashScreen />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/signup" element={<SignUpPage />} />
                <Route exact path="/home" element={<HomeScreen />} />
                <Route exact path="/myorder" element={<Orders />} />
                <Route exact path="/cart" element={<Cart />} />

            </Routes>
        </BrowserRouter>

    )

}

export default Router