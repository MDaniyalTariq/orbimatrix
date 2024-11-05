import React, { useState } from 'react';

const Field = () => {
  const [Email, setEmail] = useState('');
  const [Error, setError] = useState('');
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const verifEmail = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(Email)) {
      setEmail('example@email/com');
      setError('Please provide a valid email address');
      return false;
    }
    
    setEmail('');
    setError('');
    return true;
  };

  return (
    <div className="w-container mx-auto md:max-w-xl lg:max-w-3xl">
        <form onSubmit={verifEmail} className="flex flex-col md:flex-row md:items-center md:justify-between">
          <input className={`px-8 py-3 my-2 ${Error ? 'border border-Light-Red' : 'border border-Pale-Blue'} rounded-3xl placeholder:text-Pale-Blue focus:outline-0 md:w-morehalf`} type="text" value={Email} onChange={handleChange} placeholder="Your email address ..." />
          <input className="w-full rounded-3xl p-3 text-white bg-Blue hover:cursor-pointer md:w-lesshalf hover:bg-hBlue" type="submit" value="Notify Me" />
        </form>
        <span className="italic text-Light-Red">{Error}</span>
    </div>
  );
};

export default Field;
