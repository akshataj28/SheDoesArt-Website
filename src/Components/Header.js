import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cart }) => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    if (showSearch) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearch]);

  return (
    <header className="header">
      <div className="top-bar">FREE SHIPPING ON ALL ORDERS ABOVE Rs 1099/-</div>
      <div className="nav-container">
        <nav>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="#shop">SHOP</a></li>
            <li><a href="#bestseller">BESTSELLERS</a></li>
            <li><a href="about-us">ABOUT</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#connect">CONNECT</a></li>
          </ul>
        </nav>
        <div ref={searchRef} className={`search-wrapper ${showSearch ? 'active' : ''}`}>
          {!showSearch && (
            <div className="search-icon" onClick={handleSearchClick}>
              🔍
            </div>
          )}
          {showSearch && (
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search-input" />
              <button className="search-button">Search</button>
            </div>
          )}
        </div>
        <Link to="/cart" className="cart-icon">
          🛒
          {cart && cart.length > 0 && (
            <span className="cart-count">{cart.length}</span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
