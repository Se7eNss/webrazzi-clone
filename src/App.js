import React from 'react'
import Header from './components/layouts/Header'
import SectionOne from './components/home/SectionOne'
import SectionTwo from './components/home/SectionTwo'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import "./app.css"

const app = () => {
    return (
        <Router>
             <div className="App">
                <Header/>
                <SectionOne/>
                <SectionTwo/>
            </div>
        </Router>
    )
}

export default app
