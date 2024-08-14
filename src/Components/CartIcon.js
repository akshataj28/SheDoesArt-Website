import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartIcon = () => {
  return (
    <IconButton component={Link} to="/cart" className="cart-icon">
      <ShoppingCartIcon />
    </IconButton>
  );
};

export default CartIcon;
