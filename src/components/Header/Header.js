import React from 'react';

const Header = () => {
  return (
    <div className='text-center'>
      <a className='text-decoration-none mx-2' href="/home">Home</a>
      <a className='text-decoration-none mx-2' href="/contractus">Contract us</a>
      <a className='text-decoration-none mx-2' href="/aboutus">about us</a>
    </div>
  );
};

export default Header;