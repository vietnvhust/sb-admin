import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../stores/auth";
import { AppState } from "../../stores/stores";
import { useHistory } from "react-router-dom";

export function Login() {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);
  const authState = useSelector((state: AppState)=>state.auth)
  const { loading, token } = authState
  const dispatch = useDispatch()
  const history = useHistory();
  useEffect(()=>{
    if(!!token) {
      history.push("/dashboard");
    }
  },[dispatch, token])
  const { email, password } = inputs;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    dispatch(login(email, password))
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          className={`form-control form-control-user ${
                            submitted && !email ? " is-invalid" : ""
                          }`}
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          name="email"
                          onChange={handleChange}
                        />
                        {submitted && !email && (
                          <div className="invalid-feedback">
                            Email is required
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className={`form-control form-control-user ${
                            submitted && !password ? " is-invalid" : ""
                          }`}
                          id="exampleInputPassword"
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                        />
                        {submitted && !password && (
                          <div className="invalid-feedback">
                            Password is required
                          </div>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                        disabled={submitted && loading}
                      >
                        Login {submitted && loading ? "loading..." : ''}
                      </button>
                    </form>
                    <div className="text-center">
                      <Link to="/">Create an Account!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
