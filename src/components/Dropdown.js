import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-7 text-center items-center' : 'hidden'} onClick={toggle}>
            <Link to="/" className="block py-4 px-4 text-sm bg-siteColors-backColor hover:bg-siteColors-main text-siteColors-text hover:text-siteColors-backColor text-opacity-0">Example Text</Link>
            <Link to="/" className="block py-4 px-4 text-sm bg-siteColors-backColor hover:bg-siteColors-main text-siteColors-text hover:text-siteColors-backColor">Home</Link>
            <Link to="/coll" className="block py-4 px-4 text-sm bg-siteColors-backColor hover:bg-siteColors-main text-siteColors-text hover:text-siteColors-backColor">Collections</Link>
            <Link to="/rmap" className="block py-4 px-4 text-sm bg-siteColors-backColor hover:bg-siteColors-main text-siteColors-text hover:text-siteColors-backColor">Roadmap</Link>
            <Link to="/about" className="block py-4 px-4 text-sm bg-siteColors-backColor hover:bg-siteColors-main text-siteColors-text hover:text-siteColors-backColor">About</Link>
            <Link to="/mint" className="block py-4 px-4 text-sm bg-siteColors-backColor hover:bg-siteColors-main text-siteColors-text hover:text-siteColors-backColor">Mint</Link>
            {/*<Link to="/stake" className="block py-4 px-4 text-sm bg-siteColors-backColor hover:bg-siteColors-main text-siteColors-text hover:text-siteColors-backColor">Staking</Link>*/}
        </div>
    )
}

export default Dropdown
