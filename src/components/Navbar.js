import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ( {toggle} ) => {
    return (
        <nav>
            <div className='bg-opacity-0 px-4 absolute w-full h-16'>
                <div className='flex justify-between items-center bg-transparent'>
                    <div className='flex ml-10'>
                        <Link to='/' className='bg-siteColors-backColor text-siteColors-text py-2 px-6 rounded-b-xl font-bold tracking-wider drop-shadow-lg'>CRYPTONIA COLLECTIONS</Link>
                    </div>
                    <div className="hidden md:flex items-center pr-8">
                        <Link to="/" className="bg-siteColors-backColor text-siteColors-text hover:bg-siteColors-main hover:text-siteColors-backColor py-2 px-4 rounded-bl-xl transition duration-300">Home</Link>
                        <Link to="/coll" className="bg-siteColors-backColor hover:bg-siteColors-main text-siteColors-text hover:text-siteColors-backColor py-2 px-4 transition duration-300">Collections</Link>
                        <Link to="/rmap" className="bg-siteColors-backColor hover:bg-siteColors-main text-siteColors-text hover:text-siteColors-backColor py-2 px-4 transition duration-300">Roadmap</Link>
                        <Link to="/about" className="bg-siteColors-backColor hover:bg-siteColors-main text-siteColors-text hover:text-siteColors-backColor py-2 px-4 transition duration-300">About</Link>
                        <Link to="/mint" className="bg-siteColors-backColor hover:bg-siteColors-main text-siteColors-text hover:text-siteColors-backColor py-2 px-4 transition duration-300">Mint</Link>
                        <Link to="/stake" className="bg-siteColors-backColor hover:bg-siteColors-main text-siteColors-text hover:text-siteColors-backColor py-2 px-4 rounded-br-xl transition duration-300">Staking</Link>  
                    </div>
                    <div className='md:hidden flex-center pr-8' onClick={toggle}>
                        <button className="mobile-menu-button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
