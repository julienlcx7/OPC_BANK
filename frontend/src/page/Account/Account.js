import React, { useEffect, useState } from 'react';
import './Account.css';
import Account_name from '../../component/Account_name/Account_name';
import Bank from '../../component/Bank/Bank';
import { useDispatch, useSelector } from 'react-redux';
import { getuser } from '../../actions/user.action';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const token = useSelector(state => state.tokenReducer.token);
  const prenom = useSelector(state => state.userReducer.prenom);
  const nom = useSelector(state => state.userReducer.nom);
  const pseudo = useSelector(state => state.userReducer.pseudo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(getuser(token));
      console.log("run post");
    } else {
      console.log('No token available');
      navigate('/account')
      
    }
  }, [token, dispatch]);

  return (
    <main className="main bg-dark">
      <Navbar name_account={pseudo}/>
      <Account_name prenom={prenom} nom={nom} pseudo={pseudo}/>
      <h2 className="sr-only">Accounts</h2>
      <Bank title={"Argent Bank Checking (x8349)"} amount={"$10,463.56"} description={"Available Balance"} btn={"View transactions"}/>
      <Bank title={"Argent Bank Savings (x5850)"} amount={"$12,483.67"} description={"Available Balance"} btn={"View transactions"}/>
      <Bank title={"Argent Bank Credit Card (x8349)"} amount={"$1,493.36"} description={"Available Balance"} btn={"View transactions"}/>
      <Footer/>
    </main>
  );
}

export default Login;
