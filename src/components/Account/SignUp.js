import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = ({ alerts }) => {

    let history = useHistory()

    const [info, setInfo] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    // http request to get data from database
    const signup = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:5000/api/user/createUser`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ name: info.name, email: info.email, password: info.password })
        })

        const json = await response.json()
        // localStorage is use to save the auth-Token for signup as well
        if (json.success) {
            localStorage.setItem("token", json.authToken)
            history.push("/")
            alerts("Successfully Signed In", "success")
        }
    }

    return (
        <div>
            <div className='container' style={{ paddingBottom: 20, paddingTop: 30, fontSize: 25 }}>

                <h2 className='heading text-center text-warning' style={{ fontSize: 30, padding: 5 }}>Welcome to SignUp page</h2>

                <form onSubmit={signup}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">User Name</label>
                        <input type="text" style={{ padding: 15, fontSize: 15 }} className="form-control" id="name" aria-describedby="emailHelp" name="name" value={info.name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email address</label>
                        <input type="email" style={{ padding: 15, fontSize: 15 }} className="form-control" id="email" aria-describedby="emailHelp" name="email" value={info.email} onChange={handleChange} />
                        <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" style={{ padding: 15, fontSize: 15 }} className="form-control" id="password" name="password" value={info.password} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ fontSize: 20 }}>SignUp</button>
                </form>

            </div>
        </div>
    )
};

export default SignUp;
