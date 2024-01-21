import React from 'react';
import '../css/contact.css';

interface Props {
  icon: string;
  tag: string;
  href: string;
}

const ContactIcon: React.FC<Props> = ({ icon, tag, href }) => {
  return (
    <div className='contact-icon-container'>
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
};

export default ContactIcon;
