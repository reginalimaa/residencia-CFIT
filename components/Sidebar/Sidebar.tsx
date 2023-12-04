'use client'

import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import './sidebar.css'

class Sidebar extends React.Component {
  showSettings(event: React.MouseEvent) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="blog" className="menu-item" href="/blog">
          Blog
        </a>
        <a id="about" className="menu-item" href="/aboutus">
          Sobre nós
        </a>
        <a id="contact" className="menu-item" href="/contactus">
          Fale conosco
        </a>
        <a id='products-services' className="menu-item" href="/allproducts">
          Produtos e serviços
        </a>
      </Menu>
    );
  }
}

export default Sidebar;