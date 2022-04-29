import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage";
import HomePage from "./pages/HomePage/HomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage/CreateTripPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import TripDetailPage from "./pages/TripDetailsPage/TripDetailPage";
import ListTripPage from "./pages/ListTripsPage/ListTripPage";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/trips/list" element={<ListTripPage />} />
                <Route path="/trips/application" element={<ApplicationFormPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/trips/list" element={<AdminHomePage />} />
                <Route path="/admin/trips/createtrip" element={<CreateTripPage />} />
                <Route path="/admin/:id" element={<TripDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router