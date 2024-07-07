import React from 'react';
import '../styles/header.css'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCheck, faUser, faCaretDown, faSearch, faPhone, faBars  } from '@fortawesome/free-solid-svg-icons';
import HealthXcale from '../assets/images/HealthXcale.png';


const Header = () => {
    return (
        <header>
            <nav>
                <div className='nav-container'>
                    <div className='logo'>
                        <img className='logo-img' alt='Logo' src={HealthXcale} />
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
                        <div className='hamburger-section'>
                            <FontAwesomeIcon icon= {faBars} className='hamburger' />
                        </div>
                    </div>
                </div> 
                <div className='search-container'>
                    <div className='shop-by'> 
                        <p className='shop-by-category'>Shop by Category   <span><FontAwesomeIcon icon= {faCaretDown}/></span></p>
                    </div>
                    <div className='tag-line2'>
                        <p>Nigeria's No.1 Pharmaceutical e-commerce platform</p>
                    </div>
                    <div className='search-bar'>
                        <form > 
                            <span><FontAwesomeIcon icon={faSearch} className="search-icon" /></span>
                            <input className='search-input' type="text" placeholder="           What Do You Need?" />
                        </form>
                    </div>
                    <div className='call-container'>
                        <div><FontAwesomeIcon icon= {faPhone} className='phone-icon'/></div>
                        <div><p className='shop-by-category'>Call - 08127845670</p></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;