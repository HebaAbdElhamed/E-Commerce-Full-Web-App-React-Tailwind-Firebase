export default function PaymentInput({id,image,onSelect, selected}) {
    return (
        <div className="flex items-center justify-center">
            <input type="radio" name="payment" required id={id} value={id} checked={selected === id} onChange={()=>onSelect(id)}/>
            <label htmlFor={id}><img className="w-24" src={`/images/`+ image} alt="" /></label>
        </div>
    );
}