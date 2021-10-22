import React from 'react'
import Header from './components/layouts/Header'
import SectionOne from './components/home/SectionOne'
import SectionTwo from './components/home/SectionTwo'
import Footer from './components/layouts/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import "./app.css"

const App = () => {

    return (
        <Router>
            <div className="App" >
                <Header />
                <div className="frame mb-3" style={{ backgroundImage: ` url("/images/frame.png")` }}>
                    <SectionOne />
                    <SectionTwo />
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App
