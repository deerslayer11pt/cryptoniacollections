import React from 'react'

const ScrollerNext = () => {
    return (
        <section>
            <div className="max-w-full h-auto py-40 justify-center flex flex-col bg-siteColors-backColor items-center overflow-hidden">
                <div className="text-3xl md:text-5xl text-siteColors-purp pt-20 pb-10">Next Project: Lions of Cryptonia</div>
                <div className="text-xl text-siteColors-purp w-1/2 text-center pb-10"><p>Our first exploration into our world, where every NFT comes with a majestic lion and elegant girl. Look out for the confuzzled scientists and a spicy meme girl.</p></div>
                <div class="marquee">
                    <ul class="marquee-content">
                        <li><img src="/genImgs/blurs/1.png" alt="scroll pic 1" /></li>
                        <li><img src="/genImgs/blurs/6.png" alt="scroll pic 2" /></li>
                        <li><img src="/genImgs/blurs/9.png" alt="scroll pic 3" /></li>
                        <li><img src="/genImgs/blurs/2.png" alt="scroll pic 4" /></li>
                        <li><img src="/genImgs/blurs/8.png" alt="scroll pic 5" /></li>
                        <li><img src="/genImgs/blurs/3.png" alt="scroll pic 6" /></li>
                        <li><img src="/genImgs/blurs/4.png" alt="scroll pic 7" /></li>
                        <li><img src="/genImgs/blurs/5.png" alt="scroll pic 8" /></li>
                        <li><img src="/genImgs/blurs/7.png" alt="scroll pic 9" /></li>
                        <li><img src="/genImgs/blurs/8.png" alt="scroll pic 10" /></li>
                        <li><img src="/genImgs/blurs/10.png" alt="scroll pic 11" /></li>
                        <li><img src="/genImgs/blurs/9.png" alt="scroll pic 12" /></li>
                        <li><img src="/genImgs/blurs/2.png" alt="scroll pic 13" /></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col max-w-full items-center py-10 bg-siteColors-backColor">
                <div className="w-3/4 h-2 border-2 border-siteColors-purp"></div>
            </div>
        </section>
    )
}

export default ScrollerNext
