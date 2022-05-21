import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function ResetPassword() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
          <FaUser /> Reset password
        </h1>
        <p>Please enter your new password</p>
      </section>

      <div className="form">
        <form onSubmit={onSubmit}>
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
            <input
              type="text"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Re-enter your password"
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
    </div>
  );
}

export default ResetPassword;
