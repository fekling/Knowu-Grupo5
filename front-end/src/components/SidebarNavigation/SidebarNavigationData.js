import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import { Link } from "react-router-dom";
import React, { useCallback, useEffect } from "react";

export const SidebarNavigationData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'navsidebar-text'
    },
    {
        title: 'Chat',
        path: '/chat',
        icon: <BsIcons.BsChatDots />,
        cName: 'navsidebar-text'
    },
    {
        title: 'Eventos',
        path: '/evento',
        icon: <BsIcons.BsCalendarCheck />,
        cName: 'navsidebar-text'
    },
    {
        title: 'Perfil',
        path: '/usuario-perfil',
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
