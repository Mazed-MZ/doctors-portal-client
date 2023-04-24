import React from "react";

export default function ServiceCard(data) {
  const { title, description, icon } = data.data;
  return (
    <div>
      <div className="card w-96 mx-auto bg-base-100 border-2 border-cyan-500">
        <figure className="px-10 pt-10">
          <img
            src={icon}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
