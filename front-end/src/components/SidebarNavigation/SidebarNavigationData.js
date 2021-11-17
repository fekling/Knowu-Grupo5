import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';


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
        path: '/eventos',
        icon: <BsIcons.BsCalendarCheck />,
        cName: 'navsidebar-text'
    },
    {
        title: 'Perfil',
        path: '/perfil',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'navsidebar-text'
    }
]
