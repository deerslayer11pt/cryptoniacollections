import React from 'react';
import '../photoScroller/photoScroller.css';

const Scroller = () => {
    return (
        //Section Div
        <section>
            <div className="flex flex-col max-w-full items-center py-10 bg-siteColors-backColor">
                <div className="w-3/4 h-2 border-2 border-siteColors-purp"></div>
            </div>
            <div className="max-w-full h-auto py-40 justify-center flex flex-col bg-siteColors-backColor items-center overflow-hidden">
                <div className="text-5xl text-siteColors-purp pt-20 pb-10">Current Project: Incubator Genesis</div>
                <div className="text-xl text-siteColors-purp w-1/2 text-center pb-10"><p>Incubator Genesis is our premium mint pass used to mint one NFT within every collection of Cryptonia!</p></div>
                <div class="marquee">
                    <ul class="marquee-content">
                        <li><img src="/genImgs/incBlur/16.png" alt="scroll pic 1" /></li>
                        <li><img src="/genImgs/incBlur/62.png" alt="scroll pic 2" /></li>
                        <li><img src="/genImgs/incBlur/98.png" alt="scroll pic 3" /></li>
                        <li><img src="/genImgs/incBlur/111.png" alt="scroll pic 4" /></li>
                        <li><img src="/genImgs/incBlur/134.png" alt="scroll pic 5" /></li>
                        <li><img src="/genImgs/incBlur/141.png" alt="scroll pic 6" /></li>
                        <li><img src="/genImgs/incBlur/161.png" alt="scroll pic 7" /></li>
                        <li><img src="/genImgs/incBlur/187.png" alt="scroll pic 8" /></li>
                        <li><img src="/genImgs/incBlur/213.png" alt="scroll pic 9" /></li>
                        <li><img src="/genImgs/incBlur/246.png" alt="scroll pic 10" /></li>
                        <li><img src="/genImgs/incBlur/16.png" alt="scroll pic 11" /></li>
                        <li><img src="/genImgs/incBlur/62.png" alt="scroll pic 12" /></li>
                        <li><img src="/genImgs/incBlur/98.png" alt="scroll pic 13" /></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col max-w-full items-center py-10 bg-siteColors-backColor">
                <div className="w-3/4 h-2 border-2 border-siteColors-purp"></div>
            </div>
        </section>
    )
}

export default Scroller
