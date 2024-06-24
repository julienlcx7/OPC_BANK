import React from 'react';
import './Login.css'; // Ensure you create a corresponding CSS file for styling
import Formulaire from '../../component/Formulaire/Formulaire';
import { getPosts } from '../../actions/post.action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    const onSuccess = () => navigate('/account');
      dispatch(getPosts(data,onSuccess));
  };

  return (
    <main className="main bg-dark">
      <Navbar/>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Formulaire onSubmit={handleFormSubmit}/>
      </section>
      <Footer/>
    </main>
  );
}

export default Login;
