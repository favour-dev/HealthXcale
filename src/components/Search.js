import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles'

const Search = () => {
    return (
        <div className='search-container'>
            <div className='Search'>
                <div className='shop-by'> 
                    <p>Shop by Category<span><FontAwesomeIcon icon= {faCaretDown}/></span></p>
                </div>
                <div className='Search-bar'>
                    <form> 
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input type="text" placeholder="What Do You Need?" />
                    </form>
                </div>
                <div>
                    <FontAwesomeIcon icon= {faPhone}/><span><p>Call - 08127845670</p></span>
                </div>
            </div>
        </div>
    )
}

export default Search;