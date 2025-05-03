import ShippingInput from "../Components/ShippingInput";
export default function ShippingCard({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    return (
        <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col py-10 mx-2 my-8 space-y-5 px-7 shadow-custom">
                <ShippingInput type="text"  name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
                <ShippingInput type="tel"   name="phone"   value={formData.phone} onChange={handleChange} placeholder="Your Phone" />
                <ShippingInput type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            </div>

            <div className="flex flex-col py-10 mx-2 my-8 space-y-5 px-7 shadow-custom">
                <ShippingInput type="text" placeholder="Your Address" name="address" value={formData.address} onChange={handleChange} />
                <ShippingInput type="text" placeholder="Your City"    name="city"   value={formData.city} onChange={handleChange} />
                <ShippingInput type="text" placeholder="Your Country" name="country" value={formData.country} onChange={handleChange} />
            </div>
        </div>
    );
}