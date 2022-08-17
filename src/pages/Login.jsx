import React, { useState } from 'react';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const [identifier, setIdentifier] = useState("")
   const [password, setPassword] = useState("")
   const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
   const data = {
    identifier,
    password
  };
 
  fetch("http://localhost:1337/auth/local", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
       console.log(data.jwt);
       Cookies.set('token', `${data.jwt}`)})
       setIdentifier("")
       setPassword("")
       navigate('/')
    }

  return (
    <>
      <div>
         <form onSubmit={(e) => handleSubmit(e)}>
         <label>username/mail</label>
         <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)}></input>
         <label>password</label>
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
         <input type="submit" value="Envoyer" />
         </form>
      </div>
    </>
  );
};

export default Login;
