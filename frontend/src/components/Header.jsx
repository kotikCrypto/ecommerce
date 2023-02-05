import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>

            <div className="headerTop">
                <div className="headerTopLinks">
                    <Link to="/account">Account: Guest</Link>
                    <Link to="/cart">Your Cart(0)</Link>
                    <Link to="/account">Login / Register</Link>
                </div>
            </div>

            <div className="headerBottom">
                <div className="headerLogo">
                    <NavLink to="/" className="headerLLogoLink">
                        <h2 className="headerLogoTitle">
                            RicpeShop
                        </h2>
                        <h4 className="headerLogoTitle">
                            Online Shopping
                        </h4>
                    </NavLink>
                </div>
                <div className="headerNav">
                    <ul>
                        <li>
                            <NavLink to="/" className="headerNavLink">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="headerNavLink" >Mens</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="headerNavLink">Woomes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="headerNavLink">Kids</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="headerNavLink">Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="headerNavLink">Expolre</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header