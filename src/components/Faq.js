import React from 'react'
import { Link } from 'react-router-dom'

const faq = () => {
    return (
        <section className="bg-siteColors-backColor pb-40 max-w-full">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-siteColors-purp">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-siteColors-purp">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-siteColors-purp">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">When is Presale and Public Sale?</summary>
                        <div className="px-4 pb-4 text-siteColors-purp">
                            <p>To be determined. Presale will last for 48 hours to avoid high gas fees and Public Sale will immediately follow after.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">Cost to Mint?</summary>
                        <div className="px-4 pb-4 text-siteColors-purp">
                            <p>0.05 eth /mint</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">How do I mint some?</summary>
                        <div className="px-4 pb-4 space-y-2 text-siteColors-purp">
                            <p>When sale is open, you may click the "Mint" button on [insert website link] - this will prompt you to connect to Metamask and mint one Lion.</p>
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
                            <p>There will be a total of 5,500 lions and their owners. 100 of these will be reserved for giveaways and future events.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline text-siteColors-purp text-lg">Are there minting limits per address?</summary>
                        <div className="px-4 pb-4 space-y-2 text-siteColors-purp">
                            <p>Yes, a maximum total of 6 per address across both presale and public sale.</p>
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
                            <Link to="/discord"><button type="button" className="px-8 py-3 mt-5 font-semibold rounded-full bg-siteColors-purp text-black">Discord</button></Link>
                        </div>
                    </details>
                </div>
            </div>
        </section> 
    )
}

export default faq
