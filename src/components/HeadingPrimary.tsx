import React from 'react';
import '../css/headings.css';

interface Props {
  text: string;
  icon: string;
}

const HeadingPrimary: React.FC<Props> = ({ text, icon }) => {
  return (
    <div className='heading-container mx-auto flex w-4/5'>
      <h1 className='text-heading-primary grow'>{text}</h1>
      <img src={icon} alt='heading-icon' className='heading-icon items-end' />
    </div>
  );
};

export default HeadingPrimary;
