'use client';

import React, { useState } from 'react';
import UserProfile from '../UserProfile/UserProfile';
import { MenuOutlined } from '@ant-design/icons';
import './styles.css';

export default function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div >
      <div className="menu-icon" onClick={toggleSidebar}>
        <MenuOutlined style={{ fontSize: '28px', color: 'black' }}/>
      </div>

    </div>
  );
}
