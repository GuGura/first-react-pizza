import React from 'react';
import {Link} from "react-router-dom";
import SearchOrder from "../featrues/order/SearchOrder.jsx";

function Header(props) {
    return (
        <header>
            <Link to='/'>Fast React Pizza Co.</Link>
            <SearchOrder/>
            <p>Jonas</p>
        </header>
    );
}

export default Header;