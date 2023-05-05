import React, { useState } from "react";
import { Link } from "react-router-dom";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Register: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="email">Nom d'utilisateur</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
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
          onChange={handleEmailChange}
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
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="password">Confirmation du mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button className="login-form__button" type="submit">
        Login
      </button>
      <Link to="/login">Déjà inscrit ?</Link>
    </form>
  );
};

export default Register;