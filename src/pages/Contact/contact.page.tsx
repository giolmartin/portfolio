import React from 'react';
import Canvas from '../../components/Canvas/canvas.component';
import ToggleThemeButton from '../../components/toggleThemeButton/toggleThemeButton.component';
import ContactForm from '../../components/ContactForm/contactForm.component';

const ContactPage: React.FC = () => {
  return (
    <>
      <Canvas>
        <ToggleThemeButton />
        <ContactForm />
      </Canvas>
    </>
  );
};

export default ContactPage;
