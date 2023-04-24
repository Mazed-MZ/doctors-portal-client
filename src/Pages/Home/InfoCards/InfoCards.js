import React from "react";

export default function InfoCards(card) {
    
    const {name, description, icon, bgColor} = card.card;

  return (
    <div>
      <div className={`card card-side bg-base-100 shadow-xl p-5 bg-teal-500 ${bgColor}`}>
        <figure>
          <img
            src={icon}
            alt="Movie" className="w-16"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="font-bold">{description}</p>
        </div>
      </div>
    </div>
  );
}
