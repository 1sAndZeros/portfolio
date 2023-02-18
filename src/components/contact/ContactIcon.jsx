import React from 'react';
import './contact.css';

function ContactIcon({ icon, tag, href }) {
  return (
    <div className='text-center'>
      <a
        href={href}
        target='_blank'
        rel='noreferrer noopener'
        className='contact-icon'
      >
        <i className={`${icon}`} />
      </a>
      <h5>{tag}</h5>
    </div>
  );
}

export default ContactIcon;
