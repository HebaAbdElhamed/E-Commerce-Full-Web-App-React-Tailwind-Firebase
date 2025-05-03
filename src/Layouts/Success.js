export default function Success({order}) {
    return (
            <div className="flex flex-col items-center justify-center text-center my-96">
                <h1 className="mb-5 text-7xl font-greatvibes text-shadow-custom">Clothing</h1>
                <p className="text-lg">
                    Your order Done Successfully<br />
                    with number <span className="font-extrabold text-white bg-main">{order}</span><br />
                    calling you within 24h
                    </p>
            </div>
    );
}