import React from 'react';
import './header.styles.scss';
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase-utils-config';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({toggleCartHidden, currentUser, hidden, signOutStart}) => (
  <div className='header'>
    <Link to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>

      {
        currentUser ?
          (
            <div className='option' onClick={signOutStart}>
              SIGN OUT
            </div>
          )
          :
          (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )
      }
      <CartIcon/>
    </div>
    {hidden ? null : <CartDropdown/>}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});



export default connect(mapStateToProps, {signOutStart})(Header);
