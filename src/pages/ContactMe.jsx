import ContactForm from '../components/contact/ContactForm';
import '../components/contact/contact.css';

function ContactMe() {
  return (
    <main className='main'>
      <div className='container mx-auto mt-10 border p-8 text-center'>
        <h1 className='text-heading-primary'>Contact Me</h1>
        <div className='row mb-70'>
          <div className='col-lg-8  offset-lg-2'>
            <div className='subheading'>
              <h3>{`Let's Talk`}</h3>
            </div>
            <ContactForm />
          </div>
        </div>

        <div className='row contact-info mb-70'>
          <div className='col-md-4 info-item'>
            <span className='icon'>
              <i className='fas fa-paper-plane' />
            </span>
            <h5>
              <a href='mailto:example@example.com'>example@example.com</a>
            </h5>
          </div>

          <div className='col-md-4 info-item'>
            <span className='icon'>
              <i className='fas fa-map-marker-alt' />
            </span>
            <h5>123 Lorem Ipsum, USA</h5>
          </div>

          <div className='col-md-4 info-item'>
            <span className='icon'>
              <i className='fas fa-phone' />
            </span>
            <h5>(+1) 123 456 7890</h5>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactMe;
