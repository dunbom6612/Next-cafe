import Image from 'next/image';
import React, { useContext, useState } from 'react';
import NotificationContext from '../../../common/context/NotificationContext';
import classes from './contact.module.css'

interface ContactParams {
  name: string,
  email: string,
  number: string
}

const sendContactData = async (contactDetails: ContactParams) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}


const Contact = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  // const [requestStatus, setRequestStatus] = useState(''); // 'pending', 'success', 'error'
  const notificationCtx = useContext(NotificationContext);



  const sendMessageHandler = async (event: any) => {
    event.preventDefault();

    // optional: add client-side validation

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        number: enteredNumber,
      });
      setEnteredNumber('');
      setEnteredEmail('');
      setEnteredName('');
      notificationCtx.showNotification({
        title: 'Success!',
        message: 'Thank for your information!',
        status: 'success',
      });
    } catch (error: any) {
      notificationCtx.showNotification({
        title: 'Error!',
        message: error || 'Something went wrong!',
        status: 'error',
      });
    }
  }
  return (
    <section className={classes.contact} id="contact">

      <h1 className="heading"> <span>contact</span> us </h1>

      <div className={classes.row}>

        <iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin" loading="lazy"></iframe>

        <form onSubmit={sendMessageHandler}>
          <h3>get in touch</h3>
          <div className={classes.inputBox}>
            <span className="fas fa-user"></span>
            <input type="text" placeholder="name"
              id='name'
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
          <div className={classes.inputBox}>
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="email" id='email'
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)} />
          </div>
          <div className={classes.inputBox}>
            <span className="fas fa-phone"></span>
            <input type="number" placeholder="number"
              required
              value={enteredNumber}
              onChange={(event) => setEnteredNumber(event.target.value)}
            />
          </div>
          <input type="submit" value="contact now" className="btn" />
        </form>

      </div>

    </section>
  );
};

export default Contact;