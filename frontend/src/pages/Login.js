import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = () => {};

  const onSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="showBox">
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start</p>
      </section>
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div>
        Don't have an account?&nbsp;
        <Link to="/register" className="link">
          Register
        </Link>
        &nbsp;here.
      </div>
      <br></br>
      <div>
        <Link to="/resetpassword" className="link">
          Forget your password?
        </Link>
      </div>
    </div>
  );
}

export default Login;
