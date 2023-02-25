import '../css/headings.css';

function Subheading({ text }) {
  return (
    <div className='subheading flex'>
      <h3 className='mx-auto'>{text}</h3>
    </div>
  );
}

export default Subheading;
