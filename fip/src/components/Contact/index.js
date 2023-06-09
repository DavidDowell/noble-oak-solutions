import React, { useRef } from 'react';
import { Link, animateScroll } from 'react-scroll';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  function validatePhoneNumber(phone) {
    const regex = /^(\d{3}[-\)]?)?\d{3}[-]?\d{4}$/;
    return regex.test(phone);
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const form = useRef();
  const checkInfo = e => {
    e.preventDefault();
    let firstName = document.getElementById('contact-name-first').value;
    let lastName = document.getElementById('contact-name-last').value;
    let phone = document.getElementById('contact-phone').value;
    let email = document.getElementById('contact-email').value;
    let message = document.getElementById('contact-message').value;
    if (!firstName) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Provide Your First Name!',
        allowOutsideClick: true,
        allowEnterKey: true,
      });
      console.log('Must have a First Name!');
    } else if (!lastName) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Provide Your Last Name!',
        allowOutsideClick: true,
        allowEnterKey: true,
      });
      console.log('Must have a Last Name!');
    } else if (!validatePhoneNumber(phone) && !validateEmail(email)) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Provide A Valid Phone Number Or Email!',
        allowOutsideClick: true,
        allowEnterKey: true,
      });
      console.log('Must have a Last Name!');
    } else if (!message) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Leave Us A Message With What We Can Help You With!',
        allowOutsideClick: true,
        allowEnterKey: true,
      });
      console.log('Must have a message!');
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID_CONTACT,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          result => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully',
            });
          },
          error => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong :sweat_smile:',
              text: error.text,
            });
          }
        );
    }
  };

  return (
    <section id="Contact" className="flex">
      <div className="contact">
        <div className="contact-info">
          <div className="contact-left">
            <h3>Noble Oak Solutions</h3>
            <p>
              Have any questions or concerns?
              <br />
              Let us know and we'll be happy to talk to you!
            </p>

            <p>
              <address>
                Our office is located at: <br />
                <a href="#contact">
                  365 Main Ave SW <br />
                  Hickory, NC <br />
                  28602 <br />
                </a>
              </address>
            </p>

            <p>
              Phone Number: <a href="tel: 8288381274"> 828-838-1274 </a>
            </p>
          </div>

          <div className="contact-form">
            <h3>Contact Us</h3>
            <form className="text-start" ref={form} onSubmit={checkInfo}>
              <label htmlFor="contact-name">Your Name</label>
              <div className="flex">
                <div className="flex flex-col" style={{ width: '50%' }}>
                  <input
                    type="text"
                    id="contact-name-first"
                    name="contact-name-first"
                    placeholder="First Name"
                    className="mr-2"
                  />
                </div>
                <div className="flex flex-col" style={{ width: '50%' }}>
                  <input
                    type="text"
                    id="contact-name-last"
                    name="contact-name-last"
                    placeholder="Last Name"
                    className="ml-2"
                  />
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col" style={{ width: '50%' }}>
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    type="text"
                    id="contact-phone"
                    name="contact-phone"
                    placeholder="Your Number"
                    className="mr-2"
                  />
                </div>
                <div className="flex flex-col" style={{ width: '50%' }}>
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="text"
                    id="contact-email"
                    name="contact-email"
                    placeholder="Your Email"
                    className="ml-2"
                  />
                </div>
              </div>

              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="contact-message"
                placeholder="Message"
              ></textarea>

              <button className="">Submit</button>
            </form>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.7837505392176!2d-81.34679132287093!3d35.73153652720673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88512e2b750c3e75%3A0x57418a8a9b6c378!2s365%20Main%20Ave%20SW%2C%20Hickory%2C%20NC%2028602!5e0!3m2!1sen!2sus!4v1681418385138!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hello"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
