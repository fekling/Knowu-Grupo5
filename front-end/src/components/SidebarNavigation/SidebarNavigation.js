import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarNavigationData } from './SidebarNavigationData';
import './SidebarNavigation.css';
import '../../assets/css/reset.css';
import { IconContext } from 'react-icons';

function SidebarNavigation() {
    
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#303031'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                   <FaIcons.FaBars onClick={showSidebar}/> 
                </Link>
                <AiIcons.AiOutlineBell className="bel"/>
            </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarNavigationData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span className="navbar-titulo">{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default SidebarNavigation;
