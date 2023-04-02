import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
// import styled from 'styled-components';
import { SidebarData } from './SidebarData';

import './Sidebar.scss';

const Sidebar: React.FunctionComponent = () => {
    const [close, setClose] = useState(false);
    const showSidebar = () => setClose(!close);
    const showMenu = !close;

    return (
        <>
            <div className="navbar">
                <Link className="menuIconOpen" to="#" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </Link>
            </div>
            <div className={showMenu ? 'sidebarMenu sidebarMenu--close' : 'sidebarMenu'}>
                <Link className="menuIconClose" to="#" onClick={showSidebar}>
                    <FaIcons.FaTimes />
                </Link>
                <ul>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className="menuItems">
                                <Link to={item.path} className="menuItemLinks">
                                    {item.icon}
                                    <span style={{marginLeft: '16px'}}>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
       </>
   );
};

export default Sidebar;
