import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

const Login = ({ alerts }) => {

  let history = useHistory()

  const [auth, setAuth] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value })
  }

  // http request to get data from database
  const login = async (e) => {
    e.preventDefault()

    const response = await fetch(`http://localhost:5000/api/user/auth`, {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({ email: auth.email, password: auth.password })
    })

    const json = await response.json();
    // here using localStorage to get the auth-token for login
    if (json.success) {
      localStorage.setItem("token", json.authToken)
      history.push("/")
      alerts("Logged In", "success")
    }
  }

  return (
    <div className='container' style={{ paddingBottom: 20, paddingTop: 30, fontSize: 25 }}>
      <h2 className="heading text-center text-warning" style={{ fontSize: 30, padding: 5 }}>Welcome To The <span className="text-primary">LogIn Page</span></h2>

      <form onSubmit={login}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input style={{ padding: 15, fontSize: 15 }} type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} name='email' value={auth.email} />
          <div id="emailHelp" style={{ fontWeight: "bolder", color: "black" }} className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input style={{ padding: 15, fontSize: 15 }} type="password" className="form-control" id="password" onChange={handleChange} name='password' value={auth.password} />
        </div>
        <button type="submit" style={{ fontSize: 15 }} className="btn btn-primary text-center">LogIn</button>
      </form>

      <div className='d-flex align-items-center justify-content-center pt-5'>
        <h5 style={{ color: "grey" }}>If you don't have account then <Link to="/signup" className="text-primary" style={{ textDecoration: "none" }}>SignUp</Link></h5>
      </div>
    </div>
  );
};

export default Login;
