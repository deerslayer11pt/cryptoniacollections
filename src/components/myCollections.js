import React from 'react'

const CollectionsReal = () => {
    return (
        <section className="bg-siteColors-backColor max-w-full h-full py-10">
            <div className="items-center justify-center text-center max-w-full flex flex-col">
                <div className="text-4xl text-siteColors-text pt-20 pb-10">Cryptonia's Story</div>
                <div className="text-lg text-siteColors-text w-1/2 pb-10">
                    Cyrptonia is our metaverse of wonder. It all starts with *INSERT STORY HERE*.
                </div>
                <div className="text-lg text-siteColors-text w-1/2">
                    Our vision is *Insert our vision here*
                </div>
            </div>
            <div className="flex flex-col max-w-full items-center py-10">
                <div className="w-3/4 h-2 border-2 border-siteColors-purp"></div>
            </div>
            <div className="items-center justify-center text-center max-w-full flex flex-col">
                <div className="text-4xl text-siteColors-text pb-10">Our First Collection Preview</div>
                <div className="text-lg text-siteColors-text w-1/2 pb-10">
                    This collection will remain blurred until it's debut on Opensea.io. It's hopeful drop will be a few weeks after the reveal of the incubator (mint pass). Future collection previews can be found here every three weeks until Cryptonia is complete!
                </div>
            </div>
            <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4 w-3/5 h-4/5">
                <img src="/genImgs/blurs/edit1.png" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 "/>
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 " src="/genImgs/blurs/edit2.png"/>
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 " src="/genImgs/blurs/edit3.png"/>
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 " src="/genImgs/blurs/edit4.png"/>
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 " src="/genImgs/blurs/edit5.png"/>
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 " src="/genImgs/blurs/edit6.png"/>
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 " src="/genImgs/blurs/edit7.png"/>
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 " src="/genImgs/blurs/edit11.png"/>
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 " src="/genImgs/blurs/edit12.png"/>
                <img src="/genImgs/blurs/edit10.png" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 "/>
            </div>
            <div className="flex flex-col max-w-full items-center py-10">
                <div className="w-3/4 h-2 border-2 border-siteColors-purp"></div>
            </div>
        </section>
    )
}

export default CollectionsReal
