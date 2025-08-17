import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    q: "",
    minPrice: "",
    maxPrice: "",
    location: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchProperties = async (pageNum = 1) => {
    setLoading(true);
    try {
      const params = { ...filters, page: pageNum, limit: 6 };
      Object.keys(params).forEach(key => {
        if (params[key] === "") delete params[key];
      });
      const res = await axios.get("http://localhost:5000/api/properties", { params });
      setProperties(res.data.listings || res.data);
      setTotal(res.data.total || 0);
      setPage(res.data.page || 1);
    } catch (err) {
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties(1);
    // eslint-disable-next-line
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProperties(1);
  };

  const handlePageChange = (newPage) => {
    fetchProperties(newPage);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🏡 Property Listings</h1>

      {/* Search & Filters */}
      <form onSubmit={handleSearch} className="mb-6 grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
        <input name="q" value={filters.q} onChange={handleFilterChange} placeholder="Search..." className="border p-2" />
        <input name="location" value={filters.location} onChange={handleFilterChange} placeholder="Location" className="border p-2" />
        <input name="minPrice" value={filters.minPrice} onChange={handleFilterChange} type="number" placeholder="Min Price" className="border p-2" />
        <input name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} type="number" placeholder="Max Price" className="border p-2" />
        <select name="propertyType" value={filters.propertyType} onChange={handleFilterChange} className="border p-2">
          <option value="">Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="land">Land</option>
          <option value="villa">Villa</option>
          <option value="office">Office</option>
        </select>
        <div className="flex gap-2">
          <input name="bedrooms" value={filters.bedrooms} onChange={handleFilterChange} type="number" min="0" placeholder="Beds" className="border p-2 w-20" />
          <input name="bathrooms" value={filters.bathrooms} onChange={handleFilterChange} type="number" min="0" placeholder="Baths" className="border p-2 w-20" />
        </div>
        <button className="bg-blue-600 text-white p-2 col-span-1 md:col-span-6">Search</button>
      </form>

      {/* Listings */}
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.length === 0 ? (
            <div className="col-span-3 text-center">No properties found.</div>
          ) : (
            properties.map((property) => (
              <div key={property._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={property.images?.[0] || "https://via.placeholder.com/400x250"}
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
      )}

      {/* Pagination */}
      {total > 6 && (
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-4 py-2">Page {page}</span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page * 6 >= total}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyList;
