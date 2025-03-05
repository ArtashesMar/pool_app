import React, { useState } from "react";
import"../Styles/registration.css"
import { Header } from "../Components/HeaderComponent";
export const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Enter a valid 10-digit phone number";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login Successful");
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="">
    <Header/>
    <div className="regComponent">
      <p className="container"><h2 className="">Login Pool Cleaning Services</h2></p>
        <form onSubmit={handleSubmit} className="">
         
          <div>
            <label className="">Email</label>
            <input type="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} className="regInput" />
            {errors.email && <p className="">{errors.email}</p>}
          </div>
          <div>
            <label className="">Phone Number</label>
            <input type="text" placeholder="phone"  name="phone" value={formData.phone} onChange={handleChange} className="regInput" />
            {errors.phone && <p className="">{errors.phone}</p>}
          </div>
          <div>
            <label className="">Password</label>
            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} className="regInput" />
            {errors.password && <p className="">{errors.password}</p>}
          </div>
         
          <button type="submit" className="regButton">Login</button>
        </form>
      </div>
    </div>
  );
};



