import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminHomePage from "./components/AdminHomePage/AdminHomePage";
import HomePage from "./components/HomePage/HomePage";
import ApplicationFormPage from "./components/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "./components/CreateTripPage/CreateTripPage";
import LoginPage from "./components/LoginPage/LoginPage";
import TripDetailPage from "./components/TripDetailsPage/TripDetailPage";
import ListTripPage from "./components/ListTripsPage/ListTripPage";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/list" element={<ListTripPage />} />
                <Route path="/application" element={<ApplicationFormPage />} />
                <Route path="/createtrip" element={<CreateTripPage />} />
                <Route path="/tripdetail" element={<TripDetailPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<AdminHomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router