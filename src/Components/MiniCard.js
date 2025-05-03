export default function MiniCard({product}) {
    return (
        <div className="grid grid-cols-[1.5fr,1.25fr,1fr] ml-10  my-3 shadow-custom gap-8">
            <img src={`/images/${product.image}`} alt="" className="object-cover h-full" />
            <div className="flex flex-col justify-center p-3 space-y-4">
                <h2 className="text-xl">{product.title}</h2>
                <p className="">{product.description}</p>
            </div>
            <div className="flex items-end justify-end text-3xl m-9">
                <h6 className="text-sm">{product.price} $</h6>
            </div>
        </div>
    );
}