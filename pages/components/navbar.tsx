import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-blue-600 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        {/* Replace this logo with your own SVG */}
        <svg xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' viewBox='0 0 24 24' className='h-8 w-8 mr-2'>
          <path fill='#fff' d='M13.417 0.884c0.356 0.378 0.448 0.94 0.237 1.414l-2.583 5.099h5.466c0.36 0 0.652 0.292 0.652 0.652v2.731c0 0.36-0.292 0.652-0.652 0.652h-5.494l2.682 5.334c0.193 0.384 0.11 0.854-0.237 1.157-0.176 0.161-0.397 0.249-0.625 0.249-0.191 0-0.381-0.069-0.532-0.2l-3.447-2.92-3.448 2.92c-0.299 0.254-0.721 0.254-1.02 0l-3.448-2.92-0.107-0.090c-0.111-0.092-0.185-0.2-0.257-0.313-0.272-0.427-0.177-1.004 0.206-1.34l2.682-5.334h-5.68c-0.36 0-0.652-0.292-0.652-0.652v-2.731c0-0.36 0.292-0.652 0.652-0.652h5.7l-2.634-5.192c-0.211-0.418-0.121-0.953 0.237-1.293l3.403-3.149c0.292-0.27 0.703-0.42 1.13-0.42s0.838 0.149 1.13 0.42l3.403 3.149z'/>
        </svg>
        <span className='font-semibold text-xl tracking-tight'>
          <Link href='/'>
            Fast Support
            </Link>
          </span>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          <Link href='/about'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4'>
              About
            </a>
          </Link>
          <Link href='/contact'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white'>
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;