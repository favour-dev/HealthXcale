import React from 'react';
import '../styles/Header.css'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCheck } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <nav>
                <div className='nav-container'>
                    <div className='logo tag-line'><h1>Health<span className='xcale'>Xcale</span></h1></div>
                    <div className='tag-line'><p>Nigeria's No.1 Pharmaceutical e-commerce platform</p></div>
                    <div className='cart-shopmeds'>
                        <div className='icon-circle'>
                        <FontAwesomeIcon icon= {faShoppingCart} className='shopping-cart' />
                        <FontAwesomeIcon icon= {faCheck} className='checkmark' />
                        <div className='notification-circle'>0</div>
                        </div>
                        <div className='shopmeds-container'><button className='shopmeds-button'>Shop Meds</button></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;