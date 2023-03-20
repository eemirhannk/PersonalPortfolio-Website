import React from 'react'

const Home = () => {
  return (
    <section className='w-full h-screen flex justify-between items-center pr-32 px-32'>
    <div className='max-w-xl'>
        <h3 className='text-3xl font-bold opacity-0'>Hello, It's Me</h3>
        <h1 className='mt-4 text-6xl font-bold -mx-1 my-0'>Emirhan Koç</h1>
        <h3 className='mt-4 text-3xl font-bold opacity-0'>And I'm a <span className='multiple-text'>Frontend Developer</span></h3>
        <p className='text-lg'>I'm 20 years old Computer Engineering Student of Kocaeli University.</p>
        <div>
            <a className='inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-solid border-blue rounded-full text-xl text-blue no-underline ease-in duration-150 hover:bg-blue hover:text-dark' href="https://www.instagram.com/eemirkoc" target='_blank'><i class='bx bxl-instagram-alt'></i></a>
            <a className='inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-solid border-blue rounded-full text-xl text-blue no-underline ease-in duration-150 hover:bg-blue hover:text-dark' href="twitter.com/eemirkocc" target='_blank'><i class='bx bxl-twitter' ></i></a>
            <a className='inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-solid border-blue rounded-full text-xl text-blue no-underline ease-in duration-150 hover:bg-blue hover:text-dark' href="github.com/eemirhannk" target='_blank'><i class='bx bxl-github' ></i></a>
            <a className='inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-solid border-blue rounded-full text-xl text-blue no-underline ease-in duration-150 hover:bg-blue hover:text-dark' href="https://www.linkedin.com/in/emirhan-koç-706a32234/" target='_blank'><i class='bx bxl-linkedin' ></i></a>
        </div>
        <a href="https://drive.google.com/file/d/1IUzPRpLfnTugGDktY4oMOZuz6o3GNxBu/view?usp=share_link" target="_blank" className="inline-block px-3 py-7 bg-blue rounded-3xl text-base text-dark tracking-widest font-semibold hover:bg-dark hover:text-blue">Download CV</a>
        </div>
        <div className="home-img">
            <img src="Home.jpg" className='max-w-md mr-10' alt="" />
        
    </div>
    </section>
  )
}

export default Home
