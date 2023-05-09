import  { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import { Link } from "react-router-dom";
import axios from "axios";
interface RegistrationFormData {
  username: string;
  password: string;
  email: string;
}

const RegisterForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState<string>('');
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(true);

  const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    setIsPasswordConfirmed(event.target.value === password);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isPasswordConfirmed) {
      return;
    }

    const formData: RegistrationFormData = { username, password, email };
    handleRegistrationSubmit(formData);
  };

  const handleRegistrationSubmit = async (formData: RegistrationFormData) => {  
    await axios.post('http://localhost:8000/user', formData);

    toast('Message envoyé !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    setUsername("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  };


  return (
    <>
    <ToastContainer />
    <h2>Créez votre compte ici</h2>
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="email">Nom d'utilisateur</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail( e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="confirm-password">Confirmation du mot de passe</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPassword}          
          required
        />
        {!isPasswordConfirmed && <p>Le mot de passe ne correspond pas. </p>}
      </div>
      <button className="login-form__button" type="submit">
        Login
      </button>
      <Link to="/login">Déjà inscrit ?</Link>
    </form>
    </>
  );
};

export default RegisterForm;

