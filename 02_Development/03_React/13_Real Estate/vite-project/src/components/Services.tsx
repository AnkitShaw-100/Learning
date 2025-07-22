import React from 'react'
import { FaHome, FaHandshake, FaKey, FaChartLine } from 'react-icons/fa'

const services = [
  {
    title: "Buy a Home",
    icon: <FaHome size={40} className="text-blue-600" />,
    desc: "Explore a wide range of properties and find your dream home with expert guidance."
  },
  {
    title: "Sell Your Property",
    icon: <FaHandshake size={40} className="text-green-600" />,
    desc: "List your property with us and connect with serious buyers for quick, secure sales."
  },
  {
    title: "Rent Properties",
    icon: <FaKey size={40} className="text-yellow-500" />,
    desc: "Find affordable and verified rental homes in your preferred locations."
  },
  {
    title: "Market Insights",
    icon: <FaChartLine size={40} className="text-purple-600" />,
    desc: "Get real-time data and price trends to make informed real estate decisions."
  }
]

const Services = () => {
  return (
    <div className="px-6 sm:px-16 py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Services We Offer</h2>
        <p className="text-gray-600 text-lg mt-3">We simplify your real estate journey</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
