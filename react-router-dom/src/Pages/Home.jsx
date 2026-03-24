import React from 'react'

const Home = () => {
  return (
   <>
   <section className='flex items-center justify-center h-screen w-full flex-col gap-y-2'>
    <h1 className='text-9xl font-bold'>HomePage</h1>
    <h1>Steps:</h1>
    <p>1.install react-router dom</p>
    <p>2.main.jsx == wrap app with browser router</p>
    <p>3. app.jsx == create a route for all pages </p>
    <p>4.app.jsx == wrap all route with routes</p>
    <p>5.convert: a tag == link</p>
    <p>6.convert:href == to</p>
   </section>
   </>
  );
};

export default Home;