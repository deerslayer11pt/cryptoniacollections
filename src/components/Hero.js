import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="max-w-full h-full flex flex-col bg-home-back bg-no-repeat bg-contain md:bg-cover md:bg-center bg-siteColors-backColor pb-5">
            <div class="rounded-2xl shadow-xl bg-siteColors-purp lg:w-1/5 md:w-2/5 md:ml-20 mt-20 mx-6 transform transition duration-500 hover:scale-105">
                <div class="p-5">
                    {/*Card Header*/}
                    <header class="font-semibold text-5xl pb-5">Welcome to Cryptonia Collections</header>
                    <p class="text-black font-semibold px-4">
                    Have a look around and explore our wonders!
                    </p>
                    <footer class="text-center space-x-5">
                    <Link to="/opensea">
                    <button class="py-2 px-4 mt-5 bg-siteColors-backColor rounded-lg text-white font-semibold hover:text-siteColors-backColor hover:bg-siteColors-main transition duration-200">
                        OPENSEA
                    </button>
                    </Link>
                    <Link to="/mint">
                    <button class="py-2 px-4 mt-5 bg-siteColors-backColor rounded-lg text-white font-semibold hover:text-siteColors-backColor hover:bg-siteColors-main transition duration-200">
                        MINTING
                    </button>
                    </Link>
                    <Link to="/twitter">
                    <button class="py-2 px-4 mt-5 bg-siteColors-backColor rounded-lg text-white font-semibold hover:text-siteColors-backColor hover:bg-siteColors-main transition duration-200">
                        TWITTER
                    </button>
                    </Link>
                    </footer>
                </div>
            </div>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4 text-center">
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Link to="/coll">
                            <div class="py-20 bg-gradient-to-t from-siteColors-purp to-siteColors-fade border-2 border-gray-600 px-4 rounded-lg transform transition duration-500 hover:scale-110">
                                <div class="inline-block">
                                    <div class="flex items-center justify-center w-40 h-40 bg-siteColors-purp rounded-full">
                                        <img src="/genImgs/cute-monster.png" class="w-30 h-30 mb-3" alt="monster" />
                                    </div>
                                </div>
                                <h2 class="title-font font-medium text-3xl text-white mb-2">Explore Our Collections!</h2>
                            </div>
                        </Link>
                    </div>    
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="bg-gradient-to-t from-siteColors-purp to-siteColors-fade border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                            <div class="w-card h-card bg-card1 bg-no-repeat bg-contain bg-center"></div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="bg-gradient-to-t from-siteColors-purp to-siteColors-fade border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                            <div className="w-card h-card bg-card2 bg-no-repeat bg-contain bg-center"></div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="bg-gradient-to-t from-siteColors-purp to-siteColors-fade border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                            <div className="w-card h-card bg-card3 bg-no-repeat bg-contain bg-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

