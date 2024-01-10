import React, { useState }  from 'react'
import LayoutPage from "./LayoutPage";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email,
        password,
      });

      if (res && res.data.success) {
        // toast.success(res.data && res.data.message);
        console.log("successfully Logged In")
        setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        console.log("Failed Logged In")
      }
    } catch (error) {
      console.log(error);
      
    }
  };

  
  return (
    <LayoutPage>
      <div className="form-container ">

        <form onSubmit={handleSubmit} >
          <h4 className="title text-center mb-5" >LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>

        </form>
      </div>
    </LayoutPage>
  )
}

export default Login;