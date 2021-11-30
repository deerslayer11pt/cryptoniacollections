import React from 'react'
import { Link } from 'react-router-dom'

const faq = () => {
    return (
        <section className="bg-siteColors-backColor pb-40 max-w-full h-screen">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 h-screen">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-siteColors-purp">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-siteColors-purp">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-siteColors-purp">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">When is Presale and Public Sale?</summary>
                        <div className="px-4 pb-4 text-siteColors-purp">
                            <p>To be determined. Presale will last for 24 hours to avoid high gas fees and Public Sale will immediately follow after.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">Cost to Mint?</summary>
                        <div className="px-4 pb-4 text-siteColors-purp">
                            <p>Current Project: Premium Incubators will sell for 0.125 eth.</p>
                            <p>Next Project: Lions to sell for 0.05 eth.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">How do I mint some?</summary>
                        <div className="px-4 pb-4 space-y-2 text-siteColors-purp">
                            <p>When sale is open, you may click the "Mint" button on this site.</p>
                            <p>This will prompt you to connect your metamask wallet and you may select your quantity to mint.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">How do I get in the presale/ get a free lion?</summary>
                        <div className="px-4 pb-4 space-y-2 text-siteColors-purp">
                            <p>There will be a total of 1,000 presale slots available. Keep an eye out on our Twitter! Giveaways and presale slots will be raffled off leading up to our release along with a first come, first serve basis.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">How is the art made?</summary>
                        <div className="px-4 pb-4 space-y-2 text-siteColors-purp">
                            <p>This project is hand-drawn and generative. Each core layer of the character/lion designs, clothing, shapes, and coloring have been made individually. Then a generative algorithm is used to combine everything together with the exemptions of the 1/1s.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">How many are there total?</summary>
                        <div className="px-4 pb-4 space-y-2 text-siteColors-purp">
                            <p>Current Project: There will be a total of 275 Premium Incubators.</p>
                            <p>Next Project: There will be a total of 5,500 Lions. 100 of these will be reserved for giveaways and future events.</p> 
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">Are there minting limits per address?</summary>
                        <div className="px-4 pb-4 space-y-2 text-siteColors-purp">
                            <p>Current Project: You may mint two Premium Incubators per wallet address</p>
                            <p>Next Project: You may mint 6 Lion NFT's per wallet address</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">How many presale slots are you allocating?</summary>
                        <div className="px-4 pb-4 space-y-2 text-siteColors-purp">
                            <p>1,000</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">Are there additional secondary market royalties?</summary>
                        <div className="px-4 pb-4 space-y-2 text-siteColors-purp">
                            <p>5%, part of which will be used for looting (event after all collections have been minted out and released) </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">How to interact with us?</summary>
                        <div className="px-4 pb-4 space-y-2 text-siteColors-purp">
                            <p>Connect with us at our discord server!</p>
                            <Link to="/discord"><button type="button" className="px-8 py-3 mt-5 mx-4 font-semibold rounded-full bg-siteColors-purp text-black">Discord</button></Link>
                            <Link to="/twitter"><button type="button" className="px-8 py-3 mt-5 font-semibold rounded-full bg-siteColors-purp text-black">Twitter</button></Link>
                        </div>
                    </details>
                </div>
            </div>
        </section> 
    )
}

export default faq
