import React from 'react';
import './Login.css'; // Ensure you create a corresponding CSS file for styling
import Formulaire from '../../component/Formulaire/Formulaire';
import { getPosts } from '../../actions/post.action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.tokenReducer.error); // Adjust according to your state structure

  const handleFormSubmit = (data) => {
    const onSuccess = () => {
      // Clear any previous error (optional, as the reducer does this)
      navigate('/account');
    };

    const onFailure = (errorMessage) => {
      // The error state is already set in the reducer, so this may be optional
    };

    dispatch(getPosts(data, onSuccess, onFailure));
  };

  return (
    <main className="main bg-dark">
      <Navbar/>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Formulaire onSubmit={handleFormSubmit}/>
        {error && <div className="error-message">{error}</div>}
      </section>
      <Footer/>
    </main>
  );
}

export default Login;
