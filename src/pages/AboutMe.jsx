function AboutMe() {
  return (
    <main className='p-4 sm:ml-64'>
      <div className='p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700'>
        <div className='flex border-4 grid-cols-3 gap-4 mb-4'>
          <div className='flex items-center justify-start h-24 rounded bg-gray-500 dark:bg-gray-800'>
            <h1 className='text-4xl text-white p-4 dark:text-gray-500'>
              About Me
            </h1>
          </div>
          <div className='flex items-center justify-around h-24 rounded bg-gray-500 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>2</p>
          </div>
        </div>
        <div className='flex items-center justify-center h-96 mb-4 rounded bg-gray-500 dark:bg-gray-800'>
          <img src='Rikie.png' className='profile-img' alt='me' />
        </div>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div className='flex items-center justify-center rounded bg-gray-500 h-28 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>5</p>
          </div>
          <div className='flex items-center justify-center rounded bg-gray-500 h-28 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>6</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;
