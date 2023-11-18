import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    fullName: "",
    username: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", userData);
    localStorage.setItem("userData", JSON.stringify(userData)); //Saves the stuff
  };

  return (
    <main className="App">
      <div className="signUpApp">
        <h1>User Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={userData.fullName}
              onChange={handleChange}
              required
            />
          </label>

          <br />

          <label>
            Desired Username:
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </label>

          <br />

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </label>

          <br />

          <label>
            Address:
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
              required
            />
          </label>

          <br />

          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>

          <br />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </main>
  );
}

export default App;
