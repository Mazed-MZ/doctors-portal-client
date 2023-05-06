import React, { useEffect } from 'react';
import InfoCards from './InfoCards';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Cards() {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hour',
            description: 'Opening at 9.00 am to 10.00 pm',
            icon: 'https://cdn-icons-png.flaticon.com/512/109/109613.png',
            bgColor: 'bg-primary'
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Opening at 9.00 am to 10.00 pm',
            icon: 'https://cdn-icons-png.flaticon.com/512/3425/3425077.png',
            bgColor: 'bg-secondary'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: 'Opening at 9.00 am to 10.00 pm',
            icon: 'https://icons-for-free.com/iconfiles/png/512/phone-131964784943439862.png',
            bgColor: 'bg-primary'
        }
    ];

    useEffect(function () {
      Aos.init({ duration: 1000 });
    }, []);

  return (
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24' data-aos="flip-up">
      {
        cardData.map(card => <InfoCards key={card.id} card={card}></InfoCards>)
      }
    </div>
  )
}
