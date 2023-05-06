import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { signin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, setLogin] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const onSubmit = (data) => {
    setLogin("");
    signin(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        navigate(from, {replace: true})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLogin(errorMessage);
      });
  };

  return (
    <div>
      <form
        className="mx-auto my-32 card flex-shrink-0 w-full max-w-prose shadow-2xl bg-base-300 max-w-screen-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mx-auto mt-6">
          <h1 className="text-black-600 text-3xl font-bold">Log in</h1>
        </div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-600 text-xl p-3">
                ⚠ {errors.email?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text text-xl">Password</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="Type your password"
              {...register("password", {
                required: "⚠ This field is required",
                minLength: {
                  value: 6,
                  message: "Password required minimum 6 character",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-600 text-xl p-3">
                ⚠ Password required minimum 6 character
              </span>
            )}
          </div>
        </div>
        <input
          className="btn bg-cyan-900 text-xl text-primary m-6"
          type="submit"
          value="Log in"
        />
        <label className="label">
          <span className="label-text text-xl mx-auto">
            New to Doctor's Portal?{" "}
            <a className="text-cyan-500" href="/signup">
              Create New Account
            </a>
          </span>
        </label>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            <button className="btn btn-outline btn-slate-300">
              Continue with Google
            </button>
          </div>
        </div>
        {login && (
          <span>
            <div className="alert alert-error shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Invalid user information. Try again!!!</span>
              </div>
            </div>
          </span>
        )}
        {/* {login && (
          <span>
            <div className="alert alert-success shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Log in Successfully!!!</span>
              </div>
            </div>
          </span>
        )} */}
      </form>
    </div>
  );
}
