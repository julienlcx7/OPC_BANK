import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { getuser } from '../../actions/user.action';
import logo from "../../img/argentBankLogo.png";
import "@fortawesome/fontawesome-free/css/all.css";
import { useNavigate } from 'react-router-dom';
const Navbar = ({ name_account }) => {
  const token = useSelector(state => state.tokenReducer.token);
  const isLoggedIn = !!token;  // Convert token to boolean to check if user is logged in
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getuser(token));
      console.log("run post");
    } else {
      console.log('No token available');
    }
  }, [token, dispatch]);

  const handleSignOut = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            {isLoggedIn ? name_account || "Login" : "Login"}
          </Link>
        {isLoggedIn && (
          <button id="btn_navbar" className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
