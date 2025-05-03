import React, { useState } from "react";
import ShippingCard from "../Components/ShippingCard";

export default function ShippingPart({ onSubmit, onData }) {
  // 1) formData يحتوي كل الحقول
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    country: "",
    taxesAccepted: false,
  });

  // 2) عندما يُرسل النموذج (submit)، نرفع البيانات كلها دفعة واحدة
  const handleSubmit = (e) => {
    e.preventDefault();
    onData(formData);
    onSubmit(e);
  };

  // 3) تحديث حالة taxesAccepted
  const handleCheckbox = (e) => {
    setFormData(prev => ({ ...prev, taxesAccepted: e.target.checked }));
  };

  return (
    <div>
      <h3 className="mt-20 text-2xl text-center">Shipping Information</h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-10">
        <ShippingCard formData={formData} setFormData={setFormData} />

        <div className="flex space-x-3">
          <input
            type="checkbox"
            name="taxesAccepted"
            id="taxes"
            required
            checked={formData.taxesAccepted}
            onChange={handleCheckbox}
          />
          <label htmlFor="taxes" className="text-gray-600">
            We will add shipping to order All Egypt 50 EGP and Upper Egypt 100 EGP
          </label>
        </div>

        <button
          type="submit"
          className="px-20 py-2 my-5 text-white bg-main hover:scale-110"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
