import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header>
            <Link to='/'>Fast React Pizza Co.</Link>
            <p>Jonas</p>
        </header>
    );
}

export default Header;