import React from 'react';
import './contact.css';

function ContactForm() {
  return (
    <form className='container m-4 mx-auto rounded-md p-6'>
      <div className='mb-6 grid gap-6 md:grid-cols-2'>
        <div>
          <label htmlFor='firstName'>
            First Name
            <input
              type='text'
              id='firstName'
              className='dark:text-white block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              placeholder='John'
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor='lastName'>
            Last Name
            <input
              type='text'
              id='lastName'
              className='dark:text-white block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              placeholder='Smith'
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
            className='dark:text-white block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            placeholder='How can I help?'
            rows='5'
            required
          />
        </label>
      </div>
      <button
        type='button'
        className='hover:text-white dark:hover:text-white my-2 mb-2 w-full rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800'
      >
        Default
      </button>
    </form>
  );
}

export default ContactForm;
