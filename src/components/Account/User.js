import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const User = ({ open }) => {

  let history = useHistory();

  const [user, setUser] = useState({ _id: "", name: "", email: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const getUser = async () => {
    const response = await fetch("http://localhost:5000/api/user/getUser", {
      method: "GET",
      headers: {
        "content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    })

    const { user } = await response.json();
    // console.log(user)
    setUser({ id: user._id, name: user.name, email: user.email })
  }

  useEffect(() => {
   getUser()
  }, []);

  const handleClick = () => {
    if (localStorage.getItem("token")) {
      history.push("/cart")
    }else{
      alert("You must login first")
    }
  }

  return (
    <div>

      <button type="button" ref={open} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#userModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" style={{ fontSize: 15 }} id="exampleModalLabel">Account Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form onSubmit={getUser}>
                <div className="mb-3">
                  <label htmlFor="id" style={{ fontSize: 15, color: "#333", padding: 2 }} className="form-label">Id</label>
                  <input type="text" className="form-control" id="id" aria-describedby="emailHelp" onChange={handleChange} value={user.id} name="id" />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" style={{ fontSize: 15, color: "#333", padding: 2 }} className="form-label text-dark">User name</label>
                  <input type="text" className="form-control" id="name" onChange={handleChange} value={user.name} name="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" style={{ fontSize: 15, color: "#333", padding: 2 }} className="form-label text-dark">Password</label>
                  <input type="email" className="form-control" id="password" onChange={handleChange} value={user.email} name="email" />
                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
