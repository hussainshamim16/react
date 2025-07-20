
import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import PropDriling from '../screen/PropDriling'
import Form from '../screen/Form'
import NoPage from '../screen/NoPage'


const ScreenRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Form />} />
                <Route path='*' element={<NoPage/>} />
                <Route path='/props' element={<PropDriling />} />
                <Route path='/form' element={<Form />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ScreenRoutes