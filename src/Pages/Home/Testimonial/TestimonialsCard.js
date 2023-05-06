import React from "react";

export default function TestimonialsCard(info) {
  const { name, description, img, country } = info.info;
  return (
    <div>
      <div className="card w-96 glass mx-auto my-12 text-white p-5">
        <p>{description}</p>
        <div>
          <div className="card-body grid grid-cols-1">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>
            <h2 className="card-title">{name}</h2>
            <p>{country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
