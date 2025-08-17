import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
  const fetchProperties = async () => {
      setLoading(true);
      try {
    const params = {};
    const qp = new URLSearchParams(location.search);
    if (qp.get("location")) params.location = qp.get("location");
    if (qp.get("minPrice")) params.minPrice = qp.get("minPrice");
    if (qp.get("maxPrice")) params.maxPrice = qp.get("maxPrice");
    if (qp.get("mode")) params.mode = qp.get("mode");

    const res = await axios.get("http://localhost:5000/api/properties", { params });
        const data = res.data;
        // normalize various possible response shapes to an array
        if (Array.isArray(data)) {
          setProperties(data);
        } else if (Array.isArray(data.listings)) {
          setProperties(data.listings);
        } else if (Array.isArray(data.results)) {
          setProperties(data.results);
        } else {
          setProperties([]);
        }
      } catch (err) {
        console.error(err);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [location.search]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🏡 Property Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-3 text-center">Loading...</div>
        ) : properties.length === 0 ? (
          <div className="col-span-3 text-center">No properties found.</div>
        ) : (
          properties.map((property) => (
            <div key={property._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={property.images?.[0] || '/placeholder.svg'}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{property.title}</h2>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-lg font-bold text-green-600 mt-2">₹{property.price}</p>
                <Link
                  to={`/properties/${property._id}`}
                  className="mt-4 block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PropertyList;
