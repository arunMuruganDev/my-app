import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Validation logic goes here
    if (username==="Admin" && password==="1234") {
      alert("Login Success.");
      // You can replace the alert with any other logic you need
    } else {
      alert('Please enter a valid username and password');
    }
  }

  return (
    <div className="App">
      <form>
        <h1>Hello Again!</h1>
        <p>Welcome back you've been missed!</p>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>Recovery Password</span>
        <input type="submit" value="Sign In" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default App;
