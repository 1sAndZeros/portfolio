import ContactForm from '../components/ContactForm';
import '../css/contact.css';
import HeadingPrimary from '../components/HeadingPrimary';
import mailIcon from '../assets/svg-icons/mail.svg';
import Subheading from '../components/Subheading';
import ContactIcon from '../components/ContactIcon';

function ContactMe() {
  return (
    <main className='main'>
      <HeadingPrimary text='Contact Me' icon={mailIcon} />
      <div className='form-container'>
        <Subheading text="Let's Talk!" />
        <ContactForm />

        <div className='grid grid-cols-3 gap-4'>
          <ContactIcon
            icon='fas fa-paper-plane'
            tag='rikiepatrick@gmail.com'
            href='mailto:rikiepatrick@gmail.com?subject=Hi Rikie'
          />
          <ContactIcon
            icon='fa-brands fa-github'
            tag='1sAndZeros'
            href='https://github.com/1sAndZeros'
          />
          <ContactIcon
            icon='fa-brands fa-linkedin'
            tag='Rikie-Patrick'
            href='https://www.linkedin.com/in/rikie-patrick/'
          />
        </div>
      </div>
    </main>
  );
}

export default ContactMe;
