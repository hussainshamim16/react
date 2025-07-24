
import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import PropDriling from '../screen/PropDriling'
import Form from '../screen/Form'
import NoPage from '../screen/NoPage'
import LandingPage from '../screen/LandingPage'
import Footer from '../components/Footer'
import Header from '../components/Header'                   
import Login from '../screen/Login'
import ForgotPassword from '../screen/ForgatePassword'
import Signup from '../screen/Signup'

const ScreenRoutes = () => {
    return (
        <BrowserRouter> 
            <Header />
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path='*' element={<NoPage />} />
                <Route path='/props' element={<PropDriling />} />
                <Route path='/form' element={<Form />} />
                <Route path='/login' element={<Login />} />
                <Route path='/fb' element={<ForgotPassword />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default ScreenRoutes