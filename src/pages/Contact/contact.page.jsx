import React from 'react';

import { ContactContainer, LinkTo } from './contact.style';
import ContactForm from '../../components/ContactForm/contactForm.component';

const ContactPage = () => {
  return (
    <>
      {/* TODO: Set up the contact form*/}
      <ContactContainer>
        <LinkTo to='https://docs.google.com/forms/d/e/1FAIpQLSe38oac-k2UtxSfEifJi7HEvpytB1FOsao0av_yOiv3sYtekQ/viewform?usp=sf_link'>
          Leave a Review
        </LinkTo>
      </ContactContainer>
    </>
  );
};

export default ContactPage;
