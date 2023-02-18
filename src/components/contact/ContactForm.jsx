import React from 'react';
import './contact.css';

function ContactForm() {
  // TODO: Add click handler for submit button to send message
  return (
    <form className='container mx-auto p-6'>
      <div className='mb-2 grid gap-6 md:grid-cols-2'>
        <div>
          <label htmlFor='name'>
            Name
            <input
              type='text'
              id='name'
              className='form-input'
              placeholder='John Smith'
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor='email'>
            E-mail
            <input
              type='email'
              id='email'
              className='form-input'
              placeholder='johnsmiith@example.com'
              required
            />
          </label>
        </div>
      </div>
      <div>
        <label htmlFor='message'>
          Message
          <textarea
            type='text'
            id='message'
            className='form-input'
            placeholder='How can I help?'
            rows='4'
            required
          />
        </label>
      </div>
      <div className='flex w-full'>
        <button type='button' className='mx-auto w-60'>
          SEND MESSAGE
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
