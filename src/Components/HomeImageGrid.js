
export default function HomeImageGrid() {
    return (
            <div className="grid grid-cols-2 gap-3 my-20 ml-10 mr-5">
                <div className="flex flex-col">
                    <img src="/images/first.png" alt="" />
                    <img src="/images/forth.png" alt="" className="h-4/5" />
                </div>
                <div className="flex flex-col animate-revers">
                    <img src="/images/second.png" alt="" />
                    <img src="/images/third.png" alt="" />
                    <img src="/images/fifth.png" alt="" />
                </div>
            </div>
    );
}