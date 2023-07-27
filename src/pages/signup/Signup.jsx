import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any signup logic here (e.g., calling an API to register the user)
    // For this example, we will simulate an error for demonstration purposes
    if (username === '') {
      setError('Username is required.');
    } else if (email === '') {
      setError('Email is required.');
    } else if (password === '') {
      setError('Password is required.');
    } else {
      setError(''); // Clear any previous error
      // Continue with the signup logic, e.g., calling an API to register the user
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);

      // Clear the form fields after successful submission.
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <br />
      <br />
      <div id="signup_form">
        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
            required
          />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
          <br />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <br />
          <input type="submit" value="Sign Up" className="button1" />
        </form>
        <br />
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
