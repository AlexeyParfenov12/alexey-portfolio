import { useState } from 'react';

import {FiDownload, FiMenu, FiX} from 'react-icons/fi'

import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    } 

  return (
    <header className="header">
      <div className="container">

        <a href="#home" className="header__logo">
          ALEXEY <span>PARFENOV</span>
        </a>

        <nav className={ menuOpen ? 'header__nav header__nav-open' : 'header__nav'}>
            <a href="#home" onClick={closeMenu}>Главная</a>
            <a href="#about" onClick={closeMenu}>Обо мне</a>
            <a href="#technologies" onClick={closeMenu}>Навыки</a>
            <a href="#projects" onClick={closeMenu}>Проекты</a>
            <a href="#experience" onClick={closeMenu}>Опыт</a>
            <a href="#contacts" onClick={closeMenu}>Контакты</a>
            <a href="#" className="header__resume-mobile" onClick={closeMenu}>
                <FiDownload />
                <span>Скачать резюме</span>
            </a>
        </nav>

        <a href="#" className="header__resume">
            <FiDownload />
            <span>Скачать резюме</span>
        </a>

        <button 
            className='header__menu-button' 
            type='button'
            onClick={() => setMenuOpen(!menuOpen)}  
        >
            {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        
      </div>
    </header>
  );
}

export default Header;
