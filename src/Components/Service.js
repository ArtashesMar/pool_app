import React from "react";
import { motion } from "framer-motion";
import "../Styles/Services.css";
const services = [
  {
    title: "Pool Construction Maintenance",
    description: "Maintain Pool Beauty Year-Round",
    price: "$120",
  },
  {
    title: "Water Purification Equipment Maintenance",
    description: "Crystal Clean Water Every Time",
    price: "$100",
  },
  {
    title: "Pool Lighting Maintenance",
    description: "Keep Your Pool Lighting Sparkling",
    price: "$80",
  },
];

export const Services = () => {
  return (
    <div className="services-container">
      {/* Title */}
      <h2 className="services-title">SERVICES</h2>

      {/* Service Cards */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <p className="service-price">{service.price}</p>
            <button className="service-button">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
