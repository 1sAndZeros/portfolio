import React from 'react';
import '../css/headings.css';

interface Props {
  text: string;
}

const Subheading: React.FC<Props> = ({ text }) => {
  return (
    <div className='subheading flex'>
      <h3 className='mx-auto'>{text}</h3>
    </div>
  );
};

export default Subheading;
