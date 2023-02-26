import '../css/contact.css';

function ContactIcon({ icon, tag, href }) {
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
}

export default ContactIcon;
