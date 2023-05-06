import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Sign from "../../../SignUp/Sign";

export default function Form() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="text-center mt-32 my-10">
        <h3 className="text-xl font-bold text-primary uppercase">Contact Us</h3>
        <h2 className="text-3xl">Stay Connected With Us</h2>
        <div className="flex flex-col w-full">
          <div className="divider"></div>
        </div>
        <div>
          <div className="grid mx-auto grid-cols-2 flex-row lg:flex-row-reverse">
            <div>
              <Sign></Sign>
            </div>
            <div
              className="mt-32 text-center lg:text-left mx-20"
              data-aos="fade-right"
            >
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            {/* <div className="max-w-prose card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
