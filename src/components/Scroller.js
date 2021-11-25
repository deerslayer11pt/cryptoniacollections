import React from 'react';
import '../photoScroller/photoScroller.css';

const Scroller = () => {
    return (
        //Section Div
        <div className="max-w-full h-5/6 flex flex-col bg-siteColors-backColor items-center overflow-hidden">
            <div className="text-5xl text-siteColors-purp pt-20 pb-10">Current Project: Incubator Genesis</div>
            <div className="text-xl text-siteColors-purp w-1/2 text-center pb-10"><p>Incubator Genesis is our premium mint pass used to mint one NFT within every collection of Cryptonia!</p></div>
            <div class="marquee">
                <ul class="marquee-content">
                    <li><img src="/scrollerImgs/scroller1.png" alt="scroll pic 1" /></li>
                    <li><img src="/scrollerImgs/scroller2.png" alt="scroll pic 2" /></li>
                    <li><img src="/scrollerImgs/scroller3.png" alt="scroll pic 3" /></li>
                    <li><img src="/scrollerImgs/scroller4.png" alt="scroll pic 4" /></li>
                    <li><img src="/scrollerImgs/scroller5.png" alt="scroll pic 5" /></li>
                    <li><img src="/scrollerImgs/scroller6.png" alt="scroll pic 6" /></li>
                    <li><img src="/scrollerImgs/scroller7.png" alt="scroll pic 7" /></li>
                    <li><img src="/scrollerImgs/scroller8.png" alt="scroll pic 8" /></li>
                    <li><img src="/scrollerImgs/scroller9.png" alt="scroll pic 9" /></li>
                    <li><img src="/scrollerImgs/scroller1.png" alt="scroll pic 10" /></li>
                    <li><img src="/scrollerImgs/scroller2.png" alt="scroll pic 11" /></li>
                    <li><img src="/scrollerImgs/scroller3.png" alt="scroll pic 12" /></li>
                    <li><img src="/scrollerImgs/scroller4.png" alt="scroll pic 13" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Scroller
