import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className="py-6 pt-40 pb-20 md:pt-5 h-full max-w-full bg-siteColors-backColor">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-lg font-medium tracking-wider text-center uppercase text-siteColors-purp">Development team</p>
                <h1 className="text-4xl font-bold leading-none text-center text-siteColors-purp sm:text-5xl">The talended people behind the scenes</h1>
                <div className="flex flex-row flex-wrap-reverse justify-center mt-12">
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-coolGray-100 dark:text-coolGray-800">
                        <img alt="" className="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-coolGray-500" src="/genImgs/chris.png"/>
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug text-siteColors-purp">The Scientist</p>
                            <p className="text-siteColors-purp">Chief Game Designer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-siteColors-purp">
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-coolGray-100 dark:text-coolGray-800">
                        <img alt="" className="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-coolGray-500" src="/genImgs/chris.png"/>
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug text-siteColors-purp">Chris the uwu programmer</p>
                            <p className="text-siteColors-purp">Chief Technology Officer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-siteColors-purp">
                            
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-coolGray-100 dark:text-coolGray-800">
                        <img alt="" className="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-coolGray-500" src="/genImgs/butie.png"/>
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug text-siteColors-purp">Buitie</p>
                            <p className="text-siteColors-purp">Chief Artist</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-siteColors-purp">
                            <Link to="/christinaInsta">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 24 24" class="fill-current text-siteColors-purp">
                                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-coolGray-100 dark:text-coolGray-800">
                        <img alt="" className="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-coolGray-500" src="/genImgs/momo.png"/>
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug text-siteColors-purp">Mojelly</p>
                            <p className="text-siteColors-purp">Chief Designer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-siteColors-purp">
                            <Link to="/michelleInsta">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 24 24" class="fill-current text-siteColors-purp">
                                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-coolGray-100 dark:text-coolGray-800">
                        <img alt="" className="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-coolGray-500" src="/genImgs/wes.png"/>
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug text-siteColors-purp">Say Less Wess</p>
                            <p className="text-siteColors-purp">Chief Executive Officer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-siteColors-purp">
                            
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default About
