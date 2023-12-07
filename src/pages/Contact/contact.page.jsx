import React from 'react';

import { ContactContainer , Text} from './contact.style';
import ContactForm from '../../components/ContactForm/contactForm.component';

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactForm />
    </ContactContainer>
  );
};

export default ContactPage;
