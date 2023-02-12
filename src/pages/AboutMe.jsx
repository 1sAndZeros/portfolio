function AboutMe() {
  return (
    <main className='main'>
      <div className='rounded-lg border-2 border-gray-200 p-4 dark:border-gray-700'>
        <div className='mb-4 flex grid-cols-3 gap-4 border-4'>
          <div className='flex h-24 items-center justify-start rounded bg-gray-500 dark:bg-gray-800'>
            <h1 className='p-4 text-4xl text-white dark:text-gray-500'>
              About Me
            </h1>
          </div>
          <div className='flex h-24 items-center justify-around rounded bg-gray-500 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>2</p>
          </div>
        </div>
        <div className='mb-4 flex h-96 items-center justify-center rounded bg-gray-500 dark:bg-gray-800'>
          <img src='Rikie.png' className='profile-img' alt='me' />
        </div>
        <div className='mb-4 grid grid-cols-2 gap-4'>
          <div className='flex h-28 items-center justify-center rounded bg-gray-500 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>5</p>
          </div>
          <div className='flex h-28 items-center justify-center rounded bg-gray-500 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>6</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;
