
export default function OffersHome() {
    return (
            <div className="relative mb-20" id="offers">
                <img src="/images/offers.png" alt="" className="w-full"/>
                <div className="absolute grid w-full grid-cols-2 text-white bottom-80">
                    <div className="flex justify-center">
                        <h2 className="text-9xl text-shadow-offer tex">Offers</h2>
                    </div>
                    <div className="flex flex-col justify-center space-y-2 ">
                        <h2 className="text-7xl">Buy One Get One</h2>
                        <p className="text-3xl">Selected Items</p>
                    </div>
                </div>
            </div>
    );
}