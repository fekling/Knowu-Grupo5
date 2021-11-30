import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import { Link } from "react-router-dom";


export const SidebarNavigationData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'navsidebar-text'
    },
    {
        title: 'Chat',
        path: '',
        icon: <BsIcons.BsChatDots />,
        cName: 'navsidebar-text'
    },
    {
        title: 'Eventos',
        path: <Link to="../../assets/html/home-evento.html"/>,
        icon: <BsIcons.BsCalendarCheck />,
        cName: 'navsidebar-text'
    },
    {
        title: 'Perfil',
        path: '/usuario-postagens',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'navsidebar-text'
    },
    {
        title: 'Sair',
        path: '/',
        icon: <BiIcons.BiLogOut />,
        cName: 'navsidebar-text'
    }
]
