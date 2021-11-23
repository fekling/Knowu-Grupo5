import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarNavigationData } from './SidebarNavigationData';
import './SidebarNavigation.css';
import '../../assets/css/reset.css';
import { IconContext } from 'react-icons';
import imagemLogo from '../../assets/images/Logo-U.png';
import imagemUsuario from '../../assets/images/sistema/imgDefault.png';

function SidebarNavigation(props) {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: '#303031' }}>
                <div className="navbar">
                    <Link to="#" className="navsidebar-menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className="caixa">
                        <nav className="navbar-header-itens">
                            <ul>
                                <li>
                                    <a href="/usuario/postagens">{props.titulo1}</a>
                                </li>
                                <li>
                                    <a href="/usuario/perfil">{props.titulo2}</a>
                                </li>
                                <li>
                                    <a href="/usuario/conta">{props.titulo3}</a>
                                </li>
                                <li>
                                    <AiIcons.AiOutlineBell className="bel" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <nav className={sidebar ? 'navsidebar-menu active' : 'navsidebar-menu'}>
                    <ul className="navsidebar-menu-items" onClick={showSidebar}>
                        <li className="navsidebar-toggle">
                            <Link to="#" className="navsidebar-menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li>
                            <img className="imagem-logo" src={imagemLogo} />
                        </li>
                        <li>
                            <img className="imagem-usuario" src={imagemUsuario} />
                        </li>
                        {SidebarNavigationData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className="navsidebar-titulo">{item.title}</span>
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
