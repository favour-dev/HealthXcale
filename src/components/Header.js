import React from 'react';
import '../styles/Header.css'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import HealthXcale from '../assets/images/HealthXcale.png';

const Header = () => {
    return (
        <header>
            <nav>
                <div className='nav-container'>
                    <div className='logo'>
                        <img alt='Logo' src={HealthXcale} />
                    </div>
                    <div className='tag-line'>
                        <p>Nigeria's No.1 Pharmaceutical e-commerce platform</p>
                    </div>
                    
                    <div className='cart-shopmeds'>
                        <div className='user-icon'>
                            <FontAwesomeIcon icon= {faUser} className='person-icon'/>
                        </div>
                        <div className='icon-circle'>
                            <FontAwesomeIcon icon= {faShoppingCart} className='shopping-cart' />
                            <FontAwesomeIcon icon= {faCheck} className='checkmark' />
                            <div className='notification-circle'>0</div>
                        </div>
                        <div className='shopmeds-container'>
                            <button className='shopmeds-button'>Shop Meds</button>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </header>
    )
}

export default Header;