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