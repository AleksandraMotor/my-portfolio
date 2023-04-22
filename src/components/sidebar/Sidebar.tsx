import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import classNames from 'classnames';

import './Sidebar.scss';

const Sidebar: React.FunctionComponent = () => {
    const [close, setClose] = useState(true);
    const showSidebar = () => setClose(!close);

    return (
        <div className="sidebar">
            <Link to="#" onClick={showSidebar}
                className={classNames({
                    'sidebar__burger': true,
                    'sidebar__burger--x': !close
                })}
            >
                    {close && (
                        <FaIcons.FaBars />
                    )}
                    {!close && (
                        <FaIcons.FaTimes />
                    )}
            </Link>
            <ul className={classNames({
                    'sidebar__list': true,
                    'sidebar__list--close': close
            })}>
                {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className="menuItems">
                                    <Link to={item.path} className="menuItemLinks">
                                        <span>{item.title}</span>
                                        <div className="menuItemLinks__hexagon">{item.icon}</div>
                                    </Link>
                                </li>
                            )
                        })}
            </ul>
       </div>
   );
};

export default Sidebar;
