import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [listings, setListings] = useState([]);
  const [unreadByProperty, setUnreadByProperty] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userRes = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(userRes.data);

        // Only fetch listings if seller
        if (userRes.data.role === "seller") {
          const listingsRes = await axios.get("http://localhost:5000/api/listings/my-listings", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setListings(listingsRes.data);
        }
      } catch (err) {
        // ...handle error
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Setup socket for seller notifications
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    // fetch user info to join their room
    axios.get("http://localhost:5000/api/auth/me", { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        const user = res.data;
        if (user && user.role === "seller") {
          const s = io("http://localhost:5000");
          setSocket(s);
          s.emit("joinUser", { userId: user._id });
          s.on("newMessageNotification", ({ propertyId, message }) => {
            setUnreadByProperty(prev => ({ ...prev, [propertyId]: (prev[propertyId] || 0) + 1 }));
          });
        }
      })
      .catch(() => {});

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {user && <p className="mb-4 text-lg">Welcome, {user.name} 👋</p>}

      {user && user.role === "seller" && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold">Your Listings ({listings.length})</h2>
            <button
              onClick={() => navigate('/property-form')}
              className="bg-green-600 text-white px-3 py-1 rounded text-sm"
            >
              Add Property
            </button>
          </div>
          {listings.length === 0 ? (
            <p>You have not added any properties yet.</p>
          ) : (
            <ul className="space-y-2">
              {listings.map(listing => (
                <li key={listing._id} className="border p-2 rounded flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
                  <span>{listing.title} - ₹{listing.price}</span>
                  <span className="text-xs text-gray-500">{listing.status}</span>
                  {unreadByProperty[listing._id] > 0 && (
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white">
                      {unreadByProperty[listing._id]}
                    </span>
                  )}
                  <div className="flex gap-2 mt-2 md:mt-0">
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded text-xs"
                      onClick={() => navigate(`/property-form/${listing._id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                      onClick={async () => {
                        if (window.confirm("Are you sure you want to delete this property?")) {
                          try {
                            const token = localStorage.getItem("token");
                            await axios.delete(`http://localhost:5000/api/listings/${listing._id}`, {
                              headers: { Authorization: `Bearer ${token}` },
                            });
                            setListings(listings.filter(l => l._id !== listing._id));
                          } catch (err) {
                            alert("Error deleting property");
                          }
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Add more stats for buyers or sellers here */}

      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
