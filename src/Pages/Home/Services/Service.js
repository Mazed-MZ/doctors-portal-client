import React from "react";
import ServiceCard from "./ServiceCard";

export default function Service() {
  const serviceData = [
    {
      id: 1,
      icon: "https://i.ibb.co/zHB8RGr/fluoride.png",
      title: "Flouride Treatment",
      description:
        "Lorem ipsam and this is the cavity fellings station with food divarsity and the major part is AI generated coumputer ganaralized hospital which is serve batter than the other competitor",
    },
    {
      id: 2,
      icon: "https://i.ibb.co/k1Tzdy2/cavity.png",
      title: "Cavity Filling",
      description:
        "Lorem ipsam and this is the cavity fellings station with food divarsity and the major part is AI generated coumputer ganaralized hospital which is serve batter than the other competitor",
    },
    {
      id: 3,
      icon: "https://i.ibb.co/Yd2xpgS/whitening.png",
      title: "Teeth Whitening",
      description:
        "Lorem ipsam and this is the cavity fellings station with food divarsity and the major part is AI generated coumputer ganaralized hospital which is serve batter than the other competitor",
    },
  ];
  return (
    <div>
      <div className='text-center mt-32 my-10'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
        </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((data) => (
          <ServiceCard key={data.id} data={data}></ServiceCard>
        ))}
      </div>
    </div>
  );
}
