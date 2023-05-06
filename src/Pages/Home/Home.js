import React from 'react';
import Banner from '../../Banner/Banner';
import Cards from './InfoCards/Cards';
import Service from './Services/Service';
import Blog from './BlogSection/Blog';
import Appointment from './MakeAppointment/Appointment';
import Testimonial from './Testimonial/Testimonial';
import Form from './ContactForm/Form';


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Cards></Cards>
      <Service></Service>
      <Blog></Blog>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <Form></Form>
    </div>
  )
}
