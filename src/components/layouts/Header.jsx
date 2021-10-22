import React ,{Fragment} from 'react'
import Logo from './Logo'
import {DonutNavBarIcon , ProfileIcon ,SearchIcon ,BellIcon} from '../../Icon'
import NavItem from './NavItem'

const Header = () => {
    
    return (    
        <Fragment>
            <nav className="nav navbar-expand-lg border">
                <div className="container d-flex ">
                        <button className="btn"><DonutNavBarIcon/></button> 
                        <Logo/>  
                        <div className="spliter"></div>
                            <NavItem/>
                            <NavItem/>
                            <NavItem/>
                            <NavItem/>
                            <NavItem/>
                        <div className="icons d-flex  ">
                            <SearchIcon/>
                            <BellIcon/>
                            <ProfileIcon/>
                        </div>      
                </div>
            </nav>
        </Fragment>
        
    )
}

export default Header
