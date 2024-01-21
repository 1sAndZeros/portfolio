import '../css/contact.css';

function ContactForm() {
  // TODO: Add click handler for submit button to send message
  return (
    // eslint-disable-next-line react/no-unknown-property
    <form name='contact' method='post' className='container mx-auto p-6'>
      <input type='hidden' name='form-name' value='contact' />
      <div className='mb-2 grid gap-6 md:grid-cols-2'>
        <div>
          <label htmlFor='name'>
            Name
            <input
              type='text'
              id='name'
              name='name'
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
              name='email'
              className='form-input'
              placeholder='johnsmith@example.com'
              required
            />
          </label>
        </div>
      </div>
      <div>
        <label htmlFor='message'>
          Message
          <textarea
            id='message'
            name='message'
            className='form-input'
            placeholder='How can I help?'
            rows={4}
            required
          />
        </label>
      </div>
      <div className='flex w-full'>
        <button type='submit' className='mx-auto w-60'>
          SEND MESSAGE
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
