import { FastForwardIcon } from '@heroicons/react/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
    return (
        <header className='bg-gray-800 md:sticky top-0 z-10'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <a className='title-font font-medium text-white mb-4 md:mb-0'>
                    <a href='' className='ml-3 text-xl'>
                        James Lindsey
                    </a>
                </a>
                <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
                    <a href='#projects' className='mr-5 hover:text-white'>
                        Projects
                    </a>
                    <a href='#skills' className='mr-5 hover:text-white'>
                        Skills
                    </a>
                    <a href='https://github.com/james182-dang' target="_blank" className='mr-5 hover:text-white'><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/james-lindsey-7ab945218/' target="_blank" className='mr-5 hover:text-white'><FaLinkedin /></a>


                </nav>
                <a 
                  href='#contact'
                  className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
                  Hire Me
                  <FastForwardIcon className='w-4 h-4 ml-1' />
                </a> 
            </div>
        </header>
    );
}

export default Navbar;