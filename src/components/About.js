import image from '../images/James3.png'
import Fade from 'react-reveal/Fade'

function About() {
    return (
        <section id='about'>
            <Fade duration={2000}>
            <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
                        👋 I'm James.
                        <br className='hidden lg:inline-block' />I'd love to work for you.
                    </h1>
                    <p className='mb-10 leading-relaxed'>
                        I'm a certified Full-Stack Web Developer specializing in front-end design.
                        I'm also a musician, dog-lover, and walking Legend of Zelda encyclopedia. I'd
                        love to add my skills (mostly the development ones) to your team.
                    </p>
                    <div className='flex justify-center'>
                        <a 
                          href='#contact'
                          className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'>
                          Contact Me
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-1/3 md:w-1/2 w-2/3">
                    <img
                      className='object-cover object-center rounded'
                      alt='hero'
                      src={image}
                    />
                </div>
            </div>
            </Fade>
        </section>
    )
}

export default About;