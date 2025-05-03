export default function ShippingInput({name, type, placeholder, value, onChange}) {
    return (
        <input name={name}
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange} className="py-1 pl-5 pr-32 bg-gray-100 border-b-2 border-gray-300 placeholder:text-sm focus:outline-none" />
    );
}