import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Sign() {
  const { createUser, updateUser } =
    useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSignUpError();

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  const saveUser = (name, email) =>{
    const user ={name, email};
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        navigate('/');
    })
}

  return (
    <div>
      <form
        className="mx-auto my-32 card flex-shrink-0 w-full max-w-prose shadow-2xl bg-zinc-200 max-w-screen-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mx-auto mt-6">
          <h1 className="text-black-600 text-3xl font-bold">Sign Up</h1>
        </div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="Type your name"
              {...register("name")}
            />

            <label className="label">
              <span className="label-text text-xl">Your Age</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              placeholder="Select your age"
              {...register("age")}
            />

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
            {setSignUpError && (
              <p className="text-red-600 text-xl p-3">{signUpError}</p>
            )}
          </div>
        </div>
        <input
          className="btn bg-cyan-900 text-xl text-primary m-6"
          type="submit"
          value="Sign UP"
        />
        <label className="label">
          <span className="label-text text-xl mx-auto">
            Already have an account?{" "}
            <a className="text-cyan-500" href="/login">
              Login
            </a>
          </span>
        </label>
        <div className="flex flex-col w-full border-opacity-100">
          <div className="divider">OR</div>
          <div className="grid h-20 card rounded-box place-items-center">
            <button className="btn btn-outline btn-slate-300">
              Continue with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
