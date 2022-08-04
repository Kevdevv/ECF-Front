import React from 'react'
import 'Pages/Contact/ContactForm.css'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xnqrazrk");
  if (state.succeeded) {
      return <div className='block-message'><p className='message'>Votre message a bien été envoyé!</p></div>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <div className='inside-form'>
      <label htmlFor="email">
        E-mail
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Votre message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>
      </div>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;