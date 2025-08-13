import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/properties/${id}`)
      .then(res => setProperty(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!property) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-6 overflow-hidden">
      <img
        src={property.images?.[0] || "https://via.placeholder.com/800x400"}
        alt={property.title}
        className="w-full h-96 object-cover"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-lg font-bold text-green-600 mt-2">₹{property.price}</p>
        <p className="mt-4">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
