'use client'

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { MenuOutlined } from '@ant-design/icons';

import './sidebar.css'

class Sidebar extends React.Component {
  showSettings(event: React.MouseEvent) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          Blog
        </a>
        <a id="about" className="menu-item" href="/about">
          Sobre nós
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Fale conosco
        </a>
        <a onClick={this.showSettings} className="menu-item" href="">
          Produtos e serviços
        </a>
      </Menu>
    );
  }
}

export default Sidebar;