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
    <div className="sidebar">
      <div className="menu-icon" onClick={toggleSidebar}>
        <MenuOutlined style={{ fontSize: '28px', color: 'black' }}/>
      </div>
      {sidebarVisible && (
        <div className="menu-options">
          <UserProfile />
          <ul>
            <li>Blog</li>
            <li>Sobre Nós</li>
            <li>Fale Conosco</li>
            <li>Produtos e Serviços</li>
          </ul>
        </div>
      )}
    </div>
  );
}
