import React from "react";
import Cookies from "js-cookie";

import { useAtom } from "jotai";
import { userNameAtom, userEmailAtom, userPasswordAtom } from "../components/atoms/User";
import { useNavigate } from "react-router";


const Register = () => {
  const [username, setUsername] = useAtom(userNameAtom);
  const [email, setEmail] = useAtom(userEmailAtom);
  const [password, setPassword] = useAtom(userPasswordAtom);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };

    fetch("http://localhost:1337/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.jwt);
        Cookies.set("token", data.jwt);
        setUsername("")
        setEmail("")
        setPassword("")
        navigate('/')
      });
  };
  // let yourToken = Cookies.get('token');

  // const data2 = {
  //   key: value,
  //   key2: value2
  // };

  // fetch('API_URL', {
  //   method: 'post',
  //   headers: {
  //     'Authorization': `Bearer ${yourToken}`,
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data2)
  // });

  return (
    <>
      <h1>Register</h1>

      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input type="submit" value="Envoyer" />
        </form>
      </div>

      <p></p>
    </>
  );
};

export default Register;
