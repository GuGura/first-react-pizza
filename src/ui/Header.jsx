import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../featrues/order/SearchOrder.jsx';
import Username from '../featrues/user/Username.jsx';

function Header(props) {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
