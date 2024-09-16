import React from 'react';
import { BarLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-6'>
      <div className='relative mb-8'>
        <img
          src='./logo.png'
          className='h-40 w-40 rounded-full border-4 border-white shadow-lg'
          alt='logo'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='animate-spin rounded-full h-24 w-24 border-4 border-t-4 border-white'></div>
        </div>
      </div>
      <h1 className='text-4xl font-extrabold text-white mb-4'>
        Renu Sharma Healthcare & Education Foundation
      </h1>
      <p className='text-xl text-white mb-6'>
        A New Vision for the Nation
      </p>
      <BarLoader
        color="#ffffff"
        width={300}
        className='mx-auto'
      />
    </div>
  );
}

export default Loading;
