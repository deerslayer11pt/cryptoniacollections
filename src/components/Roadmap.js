import React from 'react'

const Roadmap = () => {
    return (
        <section class="bg-siteColors-backColor max-w-full py-10">
            <div class="container bg-siteColors-backColor mx-auto w-full h-full">
                <div className="items-center justify-center flex pt-6">
                    <div className="text-center text-5xl text-black py-4 px-6 bg-siteColors-purp rounded-xl drop-shadow-md font-bold">Roadmap</div>
                </div>
            <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-2-2 border-siteColors-purp h-full border absolute left-1/2"></div>
            {/* right timeline */}
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-siteColors-purp shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-black">10%</h1>
                </div>
                <div class="order-1 bg-siteColors-purp rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-black text-xl">Random Rewards</h3>
                <p class="text-sm leading-snug tracking-wide text-black text-opacity-100">Five Random holders will win .1 ETH each and NFT drawing competition for the best lion</p>
                </div>
            </div>
        
            {/* left timeline */}
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-siteColors-purp shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto text-black font-semibold text-lg">15%</h1>
                </div>
                <div class="order-1 bg-siteColors-purp rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-black text-xl">Twitter Competition</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">Tweet your new explorer and tag us. We will select 3 random tweets for a free NFT</p>
                </div>
            </div>
            
            {/* right timeline */}
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-siteColors-purp shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-black">20%</h1>
                </div>
                <div class="order-1 bg-siteColors-purp rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-black text-xl">Specialty Mint Pass Giveaway</h3>
                <p class="text-sm leading-snug tracking-wide text-black text-opacity-100">First 250 token holders will be given a free mint pass to be used on a future project.</p>
                </div>
            </div>
        
            {/* left timeline */}
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-siteColors-purp shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto text-black font-semibold text-lg">50%</h1>
                </div>
                <div class="order-1 bg-siteColors-purp rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-black text-xl">Charity Donation</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100"> $15,000 will be used for donation. Our community will have a chance to choose a charity of their choice through voting.</p>
                </div>
            </div>

            {/* right timeline */}
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-siteColors-purp shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-black">80%</h1>
                </div>
                <div class="order-1 bg-siteColors-purp rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-black text-xl">Eth Giveaway</h3>
                <p class="text-sm leading-snug tracking-wide text-black text-opacity-100"> 1 ETH Giveaway to one current new explorer holder.</p>
                </div>
            </div>
        
            {/* left timeline */}
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-siteColors-purp shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto text-black font-semibold text-lg">100%</h1>
                </div>
                <div class="order-1 bg-siteColors-purp rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-black text-xl">The Lucky 10</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100"> 10 random holds will get a lion each. Community wallet will be filled with 2.5% to fund "research and development" for the expansion of Cryptonia and provide holders special giveaways to upcoming projects.</p>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}

export default Roadmap
